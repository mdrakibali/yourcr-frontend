import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/constants';

export function FaqSection() {
  return (
    <section id="faq" className="bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left lg:col-span-5">
            <span className="text-primary mb-3 text-sm font-bold tracking-wide">
              Popular Questions
            </span>
            <h2 className="text-foreground mb-4 text-2xl leading-tight font-bold md:text-3xl">
              Find Commonly Asked Questions By Users
            </h2>
            <p className="text-muted-foreground mb-6 pr-4 text-sm leading-relaxed">
              Find answers to your most pressing questions and discover how our
              platform can transform your learning and teaching journey.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 font-semibold shadow-none">
              Submit Your Question
            </Button>
          </div>

          {/* Right Column (Accordion) */}
          <div className="mt-4 lg:col-span-7 lg:mt-0">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/40 border-b py-1"
                >
                  <AccordionTrigger className="hover:text-primary pr-4 text-left text-sm leading-snug font-semibold hover:no-underline md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-1 pr-4 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
