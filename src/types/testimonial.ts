export interface Testimonial {
  text: string;
  author: string;
  role: string;
  avatar: string;
  company?: string;
  companyLogo?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}
