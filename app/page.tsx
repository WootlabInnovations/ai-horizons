import CallToActionSection from "../components/landing-page/CallToActionSection";
import FAQSection from "../components/landing-page/FAQSection";
import HeroSection from "../components/landing-page/HeroSection";
import LearningPathsSection from "../components/landing-page/LearningPathsSection";
import PartnersSection from "../components/landing-page/PartnersSection";
import ProgramBannerSection from "../components/landing-page/ProgramBannerSection";
import QuizSection from "../components/landing-page/QuizSection";
import SuccessStoriesSection from "../components/landing-page/SuccessStoriesSection";
import WhyChooseSection from "../components/landing-page/WhyChooseSection";

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
