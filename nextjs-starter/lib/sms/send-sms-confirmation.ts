/**
 * Normalizes a US phone number to E.164 format (+1XXXXXXXXXX).
 * Returns an empty string if the number is invalid or cannot be parsed.
 */
export function toE164(phone: string): string {
  if (!phone) return "";

  // Strip all non-digit characters
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  // If it already had a leading '+' and is a reasonable length (10-15 digits), keep it
  const hasPlus = phone.trim().startsWith("+");
  if (hasPlus && digits.length >= 10 && digits.length <= 15) {
    return `+${digits}`;
  }

  // Fallback: if digits count is valid E.164 length (10-15 digits), try prepending '+'
  if (digits.length >= 10 && digits.length <= 15) {
    return `+${digits}`;
  }

  return "";
}

interface BookingSmsData {
  customerName: string;
  customerPhone: string;
  tourId: string;
  tourDate: string;
  numberOfSeats: number;
  bookingType: string;
  amountTotal?: number;
  tourTime?: string;
  tourType?: string;
}

/**
 * Sends a message via the Quo (OpenPhone) API.
 */
async function sendSms(to: string, content: string): Promise<any> {
  const apiKey = process.env.QUO_API_KEY;
  const fromNumber = process.env.QUO_FROM_NUMBER;
  const userId = process.env.QUO_USER_ID;

  if (!apiKey) {
    throw new Error("Missing QUO_API_KEY environment variable.");
  }
  if (!fromNumber) {
    throw new Error("Missing QUO_FROM_NUMBER environment variable.");
  }

  const normalizedTo = toE164(to);
  if (!normalizedTo) {
    throw new Error(`Invalid recipient phone number: "${to}"`);
  }

  const normalizedFrom = toE164(fromNumber);
  if (!normalizedFrom) {
    throw new Error(`Invalid sender phone number (QUO_FROM_NUMBER): "${fromNumber}"`);
  }

  const body: Record<string, any> = {
    content,
    from: normalizedFrom,
    to: [normalizedTo],
  };

  if (userId) {
    body.userId = userId;
  }

  const response = await fetch("https://api.openphone.com/v1/messages", {
    method: "POST",
    headers: {
      "Authorization": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenPhone API request failed with status ${response.status}: ${errorText}`);
  }

  return response.json();
}

/**
 * Sends a booking confirmation text to the customer.
 */
export async function sendCustomerSmsConfirmation(booking: BookingSmsData): Promise<void> {
  const apiKey = process.env.QUO_API_KEY;
  const fromNumber = process.env.QUO_FROM_NUMBER;

  if (!apiKey) {
    throw new Error("Missing QUO_API_KEY environment variable.");
  }
  if (!fromNumber) {
    throw new Error("Missing QUO_FROM_NUMBER environment variable.");
  }

  const { customerName, customerPhone, tourDate, tourId, tourTime, tourType, numberOfSeats } = booking;

  if (!customerPhone) {
    console.warn("Skipping customer SMS: customerPhone is missing.");
    return;
  }

  const normalizedPhone = toE164(customerPhone);
  if (!normalizedPhone) {
    console.warn(`Skipping customer SMS: Normalized phone number is invalid for raw input "${customerPhone}".`);
    return;
  }

  const timeStr = tourTime || (tourId === '9am' ? '9:00 AM' : tourId === '12pm' ? '12:00 PM' : tourId === '3pm' ? '3:00 PM' : tourId === '6pm' ? '6:00 PM' : tourId);
  const typeStr = tourType || "Standard Tour";

  const content = `Hi ${customerName}, your Nomad Yellowstone booking is confirmed! Details: ${numberOfSeats} seats on ${tourDate} @ ${timeStr} (${typeStr}). Please arrive 15 minutes before departure. If you have any questions, text or call this number.`;

  try {
    await sendSms(normalizedPhone, content);
    console.log(`Customer confirmation SMS successfully sent to ${normalizedPhone}`);
  } catch (error: any) {
    console.error(`Error sending customer SMS confirmation: ${error.message}`);
  }
}

/**
 * Sends an owner alert for a new booking.
 * Supports comma-separated phone numbers in OWNER_PHONE (e.g. "208-821-6929, 208-353-7088").
 */
export async function sendOwnerSmsAlert(booking: BookingSmsData): Promise<void> {
  const apiKey = process.env.QUO_API_KEY;
  const fromNumber = process.env.QUO_FROM_NUMBER;
  const ownerPhone = process.env.OWNER_PHONE;

  if (!apiKey) {
    throw new Error("Missing QUO_API_KEY environment variable.");
  }
  if (!fromNumber) {
    throw new Error("Missing QUO_FROM_NUMBER environment variable.");
  }
  if (!ownerPhone) {
    throw new Error("Missing OWNER_PHONE environment variable.");
  }

  const { customerName, customerPhone, tourDate, tourId, tourTime, tourType, numberOfSeats, amountTotal } = booking;

  const timeStr = tourTime || (tourId === '9am' ? '9:00 AM' : tourId === '12pm' ? '12:00 PM' : tourId === '3pm' ? '3:00 PM' : tourId === '6pm' ? '6:00 PM' : tourId);
  const typeStr = tourType || "Standard Tour";
  const priceStr = amountTotal !== undefined ? `$${amountTotal.toFixed(2)}` : "N/A";

  const content = `New Booking Alert!\nName: ${customerName}\nTour: ${typeStr} @ ${timeStr}\nDate: ${tourDate}\nSeats: ${numberOfSeats}\nPaid: ${priceStr}\nPhone: ${customerPhone || "N/A"}`;

  // Split by comma to support multiple owner phone numbers
  const ownerPhones = ownerPhone.split(",").map(p => p.trim()).filter(Boolean);

  if (ownerPhones.length === 0) {
    console.warn("Skipping owner SMS: OWNER_PHONE environment variable contains no valid entries.");
    return;
  }

  for (const phone of ownerPhones) {
    try {
      const normalizedOwner = toE164(phone);
      if (!normalizedOwner) {
        console.error(`Owner phone number is invalid: "${phone}"`);
        continue;
      }
      await sendSms(normalizedOwner, content);
      console.log(`Owner SMS alert successfully sent to ${normalizedOwner}`);
    } catch (error: any) {
      console.error(`Error sending owner SMS alert to ${phone}: ${error.message}`);
    }
  }
}

