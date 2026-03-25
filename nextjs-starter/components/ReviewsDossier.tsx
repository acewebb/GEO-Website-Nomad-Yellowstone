import React from 'react';
import FadeIn from './FadeIn';

const reviewsData = [
    {
        name: "Navigat...",
        date: "Sep 19, 2025",
        title: "Amazing experience",
        text: "Our tour was great! Marcus was amazing! He even made sure our toddler had a great time! So kind he even took pictures of us. We were able to see some antelope!!"
    },
    {
        name: "jasonsl...",
        date: "Oct 3, 2025",
        title: "Great way to kill a few hours seeing Nature",
        text: "We were in town for a wedding and needed some fun activities to keep the family entertained for a few hours, which is why we chose this tour. We had a great time communicating with the guides throughout the reservation. The tour was perfect for our family of five (three adults and two teenagers) - the vehicle was spacious and the ATV was completely enclosed, which was great for rainy weather. Overall, it was a fantastic experience that allowed us to discover some amazing hidden gems off the beaten path."
    },
    {
        name: "119cale...",
        date: "Jul 30, 2025",
        title: "Great Experience",
        text: "It was a great trip! It felt similar to driving through Yellowstone, but more backcountry so wildlife is a little more prevalent. I saw moose, elk and deer. The views were great. The guide was very relaxed, fun and professional. You get some cool off-road rides on the Can-am as well."
    },
    {
        name: "Culture...",
        date: "Oct 25, 2025",
        title: "Tour",
        text: "We had Ayson give us a tour, and he did an absolutely wonderful job. It was the best day of our trip by far, great views, good knowledge, and overall a great day. Highly recommend."
    },
    {
        name: "brevan...",
        date: "Oct 25, 2025",
        title: "Best part of our trip!!",
        text: "We went on a nice comfortable ride, and saw a lot of scenic views. And the driver was very friendly which made the trip even better. Highlight of our trip in Island Park!!"
    }
];

export default function ReviewsDossier() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-transparent z-10 overflow-hidden">

            {/* Container */}
            <div className="container mx-auto px-4 max-w-7xl relative z-20">
                <FadeIn>
                    <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
                        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-nomad-black uppercase leading-[0.85] tracking-tight mb-6 text-distressed drop-shadow-md">
                            FIELD REPORTS
                        </h2>
                        <p className="font-mono text-sm text-nomad-red font-bold tracking-widest uppercase mb-6 drop-shadow-sm">
              // Authorized Personnel • Verified Dispatch
                        </p>
                        <div className="flex items-center gap-2 text-nomad-red text-2xl md:text-3xl tracking-[0.2em] mb-6">
                            ★★★★★
                        </div>
                        <p className="text-nomad-black/80 font-mono text-xs uppercase tracking-widest max-w-lg mx-auto leading-relaxed border-t border-b border-nomad-black/20 py-4 opacity-90 mix-blend-multiply">
                            Elite Top-Rated Outfitter. Independent dispatches sourced from TripAdvisor operations logs.
                        </p>
                    </div>
                </FadeIn>

                {/* Masonry Layout via CSS columns */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {reviewsData.map((review, i) => (
                        <FadeIn key={i} delay={0.1 * i} className="break-inside-avoid">
                            <div
                                className="bg-nomad-paper border-2 border-nomad-black p-6 md:p-8 relative shadow-[6px_6px_0px_#1C1A17] hover:shadow-[10px_10px_0px_#A63C24] transition-all hover:-translate-y-1 duration-300"
                            >
                                {/* Vintage Tape/Header styling */}
                                <div className="flex justify-between items-start mb-6 border-b-2 border-nomad-black/20 pb-4">
                                    <div className="flex flex-col">
                                        <span className="font-mono text-nomad-black font-extrabold text-base md:text-lg uppercase tracking-wider">{review.name}</span>
                                        <span className="font-mono text-nomad-black/60 text-xs tracking-[0.1em] font-medium">{review.date}</span>
                                    </div>
                                    <div className="text-nomad-red text-lg md:text-xl tracking-[0.1em] drop-shadow-sm">★★★★★</div>
                                </div>

                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-nomad-black uppercase mb-4 text-distressed tracking-wide leading-[1.1]">
                                    {review.title}
                                </h3>

                                <p className="font-body text-nomad-black/90 leading-relaxed text-sm md:text-base font-medium opacity-90">
                                    &quot;{review.text}&quot;
                                </p>

                                {/* Decorative staple/corner markings */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-nomad-black/10"></div>
                                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-nomad-black/10"></div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.5} className="mt-20 text-center flex justify-center w-full">
                    <a
                        href="https://www.tripadvisor.com/AttractionProductReview-g35494-d33307035-Guided_ATV_Adventure_Island_Park_20_Mins_from_West_Yellowstone-Island_Park_Idaho.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-grunge opacity-90 transition-all text-sm md:text-base px-8 py-4"
                    >
                        VERIFY ON TRIPADVISOR
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}
