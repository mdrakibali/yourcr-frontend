'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function ContactSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side (Form) */}
          <div className="flex flex-col text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Get In Touch With Us
            </h2>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  placeholder="Name" 
                  className="h-11 bg-card border-transparent focus:border-primary rounded-sm"
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="h-11 bg-card border-transparent focus:border-primary rounded-sm"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="tel" 
                  placeholder="Phone No" 
                  className="h-11 bg-card border-transparent focus:border-primary rounded-sm"
                />
                <Input 
                  type="text" 
                  placeholder="Subject" 
                  className="h-11 bg-card border-transparent focus:border-primary rounded-sm"
                />
              </div>
              
              <Textarea 
                placeholder="Your Message" 
                rows={5}
                className="bg-card border-transparent focus:border-primary resize-none min-h-30 rounded-sm"
              />
              
              <div className="flex items-center space-x-2 pt-1 pb-3">
                <Checkbox id="terms" />
                <label 
                  htmlFor="terms" 
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  I agree to the Terms & conditions
                </label>
              </div>

              <div className="flex justify-start">
                <Button type="submit" className="h-10 px-8 rounded-sm text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-none">
                  Send Your Message
                </Button>
              </div>
            </form>
          </div>

          {/* Right Side (Image) */}
          <div className="relative w-full h-75 md:h-100 overflow-hidden rounded-md">
             <img 
               src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000" 
               alt="Student studying in a library" 
               className="w-full h-full object-cover"
             />
          </div>

        </div>
      </div>
    </section>
  );
}
