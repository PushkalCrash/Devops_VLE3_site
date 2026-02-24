const LessonsIntroVid = () => {
  return (
    <section className="py-24">
      <div className="container max-w-5xl">

        <h2 className="section-title mb-12 text-center">
          Watch How I Teach
        </h2>

        <div className="relative rounded-2xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            className="w-full h-[320px] md:h-[520px]"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
};

export default LessonsIntroVid;
