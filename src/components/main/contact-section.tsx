'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side (Form) */}
          <div className="flex flex-col text-left">
            <h2 className="text-foreground mb-6 text-2xl font-bold md:text-3xl">
              Get In Touch With Us
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-card focus:border-primary h-11 rounded-sm border-transparent"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-card focus:border-primary h-11 rounded-sm border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  type="tel"
                  placeholder="Phone No"
                  className="bg-card focus:border-primary h-11 rounded-sm border-transparent"
                />
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-card focus:border-primary h-11 rounded-sm border-transparent"
                />
              </div>

              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-card focus:border-primary min-h-30 resize-none rounded-sm border-transparent"
              />

              <div className="flex items-center space-x-2 pt-1 pb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-foreground cursor-pointer text-sm font-medium"
                >
                  I agree to the Terms & conditions
                </label>
              </div>

              <div className="flex justify-start">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-10 rounded-sm px-8 text-sm font-semibold shadow-none"
                >
                  Send Your Message
                </Button>
              </div>
            </form>
          </div>

          {/* Right Side (Image) */}
          <div className="relative h-75 w-full overflow-hidden rounded-md md:h-100">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000"
              alt="Student studying in a library"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
