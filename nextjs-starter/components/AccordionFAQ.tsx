'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export interface FAQItem {
    question: string;
    answer: string | React.ReactNode;
}

interface AccordionFAQProps {
    items: FAQItem[];
    className?: string;
    defaultOpenIndex?: number | null;
}

export default function AccordionFAQ({ items, className, defaultOpenIndex = null }: AccordionFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={clsx("w-full max-w-4xl mx-auto flex flex-col space-y-4", className)}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className={clsx(
                            "border border-nomad-black/10 overflow-hidden transition-colors duration-300",
                            isOpen ? "bg-white shadow-xl" : "bg-nomad-paper hover:border-nomad-red/50 hover:bg-white/50"
                        )}
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            aria-expanded={isOpen}
                        >
                            <h3 className={clsx(
                                "font-heading text-lg md:text-xl uppercase tracking-wider transition-colors duration-300 pr-8",
                                isOpen ? "text-nomad-red drop-shadow-sm" : "text-nomad-black"
                            )}>
                                {item.question}
                            </h3>

                            {/* Plus/Minus Indicator */}
                            <div className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                <div className={clsx(
                                    "absolute w-full h-0.5 bg-nomad-black transition-transform duration-300",
                                    isOpen ? "bg-nomad-red rotate-180" : ""
                                )} />
                                <div className={clsx(
                                    "absolute h-full w-0.5 bg-nomad-black transition-transform duration-300",
                                    isOpen ? "bg-nomad-red rotate-90 opacity-0" : ""
                                )} />
                            </div>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 md:p-8 pt-0 font-body text-nomad-black/80 font-medium leading-relaxed md:text-lg border-t border-nomad-black/5 mx-6 md:mx-8">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
