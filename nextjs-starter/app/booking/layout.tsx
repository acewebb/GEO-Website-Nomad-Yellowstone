import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Book a Guided ATV Tour Near Yellowstone | Nomad Yellowstone",
    description: "Secure your passenger-only guided ATV tour near West Yellowstone and Island Park. View live availability for morning, afternoon, and evening backcountry tours.",
    robots: { index: true, follow: true },
    alternates: { canonical: 'https://nomadyellowstone.com/booking' },
    openGraph: {
        title: 'Book Your ATV Tour | Nomad Yellowstone',
        description: 'Reserve your passenger-only guided ATV tour in Island Park, Idaho. Backcountry tours.',
        url: 'https://nomadyellowstone.com/booking',
        images: [{ url: '/sawtelle.png', width: 1200, height: 630, alt: 'Book a Nomad Yellowstone ATV tour' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Book Your ATV Tour | Nomad Yellowstone',
        description: 'Reserve your passenger-only guided ATV tour in Island Park, Idaho. Backcountry tours.',
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
