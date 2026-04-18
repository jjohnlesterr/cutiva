import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { HowToOrderSection } from '@/components/sections/HowToOrderSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SocialProofSection />
        <ProductsSection />
        <WhyChooseSection />
        <HowToOrderSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
