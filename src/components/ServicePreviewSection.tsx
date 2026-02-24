import ServicePreviewBlock from "./ServicePreviewBlock";

const ServicePreviewSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container space-y-24">

        <ServicePreviewBlock
          eyebrow="Guitar Lessons"
          title="Structured Guitar Lessons For All Levels"
          description="Whether you're picking up a guitar for the first time or refining advanced techniques, these structured one on one sessions are built to move you forward with clarity and measurable progress."
          cta="Consult Regarding Guitar Lessons"
          href="https://calendly.com/its-apg-music/guitar-consultation-lesson"
          image="/Services/Lessons.jpeg"
          align="left"
        />

        <ServicePreviewBlock
          eyebrow="Performances"
          title="Stage Ready Live Shows"
          description="From intimate solo sets to dynamic full band performances, each show is crafted to command attention, elevate the atmosphere, and leave a lasting impression."
          cta="Book A Meeting"
          href="https://calendly.com/its-apg-music/performance-conversation"
          image="/Services/Live.jpeg"
          align="right"
        />

      </div>
    </section>
  );
};

export default ServicePreviewSection;
