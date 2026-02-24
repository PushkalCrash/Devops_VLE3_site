import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicePreviewSection from '@/components/ServicePreviewSection';
import GallerySection from '@/components/GallerySection';
import AlbumsSection from '@/components/AlbumsSection';
import SocialSection from '@/components/SocialSection';
import ImpactSection from '@/components/ImpactSection';

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <section id="home">
        <HeroSection />
      </section>
    </main>
  );
};

export default Index;
