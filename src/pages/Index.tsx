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
      <section id="impact">
        <ImpactSection />
      </section>
      <section id="services">
        <ServicePreviewSection />
      </section>

      <section id="releases">
        <AlbumsSection />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>


      <section id="contact">
        <SocialSection />
      </section>
    </main>
  );
};

export default Index;
