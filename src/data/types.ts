export interface City {
  slug: string;
  name: string;
  region: string;
  zone: string;
  neighborhoods: string[];
  gradient: string;
  gradientEnd: string;
  nearbyCities: string[];
  testimonials: Testimonial[];
  pricing: {
    residencial: string;
    comercial: string;
    impermeabilizacao: string;
  };
}

export interface Testimonial {
  name: string;
  neighborhood: string;
  text: string;
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  priceLabel: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
