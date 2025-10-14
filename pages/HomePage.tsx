import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { HowItWorks } from '../components/HowItWorks';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { useEffect } from 'react';
import type { Page } from '../App';

interface HomePageProps {
  t: (key: string) => string;
  setCurrentPage: (page: Page) => void;
}

export function HomePage({ t, setCurrentPage }: HomePageProps) {
  useEffect(() => {
    // Check if we need to scroll to FAQ (e.g., from Support page)
    const hash = window.location.hash;
    if (hash === '#faq') {
      setTimeout(() => {
        const faqElement = document.getElementById('faq');
        if (faqElement) {
          faqElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Hero t={t} setCurrentPage={setCurrentPage} />
      <Benefits t={t} />
      <HowItWorks t={t} />
      <Pricing t={t} setCurrentPage={setCurrentPage} />
      <FAQ t={t} />
    </>
  );
}