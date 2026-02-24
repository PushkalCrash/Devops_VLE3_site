const LessonsHero = () => {
  return (
    <section className="py-28">
      <div className="container grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT SIDE */}
        <div>

          <p
            className="text-[hsl(var(--accent))] uppercase font-semibold mb-6"
            style={{ fontSize: "0.8rem", letterSpacing: "0.35em" }}
          >
            Guitar Lessons
          </p>

          <h1
            className="font-display mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: "1.05",
            }}
          >
            Structured Guitar Mastery
          </h1>

          <p
            className="text-white/75 max-w-xl"
            style={{
              fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
              lineHeight: "1.6",
            }}
          >
            Whether you're starting from scratch or refining advanced technique,
            each one-on-one session is structured around your level — building
            precision, practical theory, creative expression, and measurable progress.
          </p>

        </div>

        {/* IMAGE SIDE */}
        <div className="relative rounded-3xl overflow-hidden">

          <img
            src="/services/lessons-hero.jpg"
            alt="Guitar lesson session"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />

          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        </div>

      </div>
    </section>
  );
};

export default LessonsHero;
