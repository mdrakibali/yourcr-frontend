import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-primary font-bold text-sm tracking-wide mb-3">
              Popular Questions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              Find Commonly Asked Questions By Users
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 pr-4">
              Find answers to your most pressing questions and discover how our platform can transform your learning and teaching journey.
            </p>
            <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-none">
              Submit Your Question
            </Button>
          </div>

          {/* Right Column (Accordion) */}
          <div className="lg:col-span-7 mt-4 lg:mt-0">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/40 py-1">
                  <AccordionTrigger className="text-sm md:text-base font-semibold hover:text-primary hover:no-underline text-left leading-snug pr-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-1 pr-4">
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

