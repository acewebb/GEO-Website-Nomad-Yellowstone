import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Book a Guided ATV Tour Near Yellowstone | From $179/Seat | Nomad Yellowstone",
    description: "Secure your passenger-only guided ATV tour near West Yellowstone and Island Park. View live availability for morning, afternoon, and private buyout backcountry expeditions.",
    robots: { index: true, follow: true },
    alternates: { canonical: 'https://nomadyellowstone.com/booking' },
    openGraph: {
        title: 'Book Your ATV Tour | Nomad Yellowstone',
        description: 'Reserve your private guided ATV expedition in Island Park, Idaho. Tours from $179/passenger.',
        url: 'https://nomadyellowstone.com/booking',
        images: [{ url: '/sawtelle.png', width: 1200, height: 630, alt: 'Book a Nomad Yellowstone ATV tour' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Book Your ATV Tour | Nomad Yellowstone',
        description: 'Reserve your private guided ATV expedition in Island Park, Idaho. Tours from $179/passenger.',
        images: ['/sawtelle.png'],
    },
};

export default function BookingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
