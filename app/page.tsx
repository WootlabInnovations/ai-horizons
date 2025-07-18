import HeroSection from '@/components/landing-page/HeroSection';
import WhyChooseSection from '@/components/landing-page/WhyChooseSection';
import PartnersSection from '@/components/landing-page/PartnersSection';
import ProgramBannerSection from '@/components/landing-page/ProgramBannerSection';
import LearningPathsSection from '@/components/landing-page/LearningPathsSection';
import QuizSection from '@/components/landing-page/QuizSection';
import SuccessStoriesSection from '@/components/landing-page/SuccessStoriesSection';
import FAQSection from '@/components/landing-page/FAQSection';
import CallToActionSection from '@/components/landing-page/CallToActionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <PartnersSection />
      <ProgramBannerSection />
      <LearningPathsSection />
      <QuizSection />
      <SuccessStoriesSection />
      <FAQSection />
      <CallToActionSection />
    </>
  );
}
