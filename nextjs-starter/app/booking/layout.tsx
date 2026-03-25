import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Book Your ATV Tour | Secure Deployment | Nomad Yellowstone",
    description: "Secure your passenger-only guided ATV tour near West Yellowstone and Island Park. View live availability for morning, afternoon, and private buyout backcountry expeditions.",
    robots: { index: true, follow: true },
    alternates: { canonical: 'https://nomadyellowstone.com/booking' },
};

export default function BookingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
