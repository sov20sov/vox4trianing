
export type Language = 'en' | 'ar';

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    courses: string;
    ielts: string;
    contact: string;
    testimonials: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    contactCta: string;
  };
  services: {
    title: string;
    english: {
      title: string;
      desc: string;
    };
    ielts: {
      title: string;
      desc: string;
    };
    computer: {
      title: string;
      desc: string;
    };
    digital: {
      title: string;
      desc: string;
    };
  };
  about: {
    title: string;
    mission: string;
    missionText: string;
    whyChooseUs: string;
    points: string[];
  };
  footer: {
    rights: string;
    address: string;
    followUs: string;
  };
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}
