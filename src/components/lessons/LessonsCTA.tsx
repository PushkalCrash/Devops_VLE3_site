const LessonsCTA = () => {
  return (
    <section className="py-32 text-center">
      <div className="container max-w-3xl">

        <h2 className="font-display text-4xl md:text-5xl mb-6">
          Ready to Elevate Your Playing?
        </h2>

        <p className="text-white/70 mb-10">
          Book your first session and begin structured, focused progress.
        </p>

        <a
          href="/contact"
          className="
            inline-block
            px-10 py-4
            rounded-xl
            bg-[hsl(var(--accent))]
            text-white
            font-semibold
            hover:scale-105
            transition-all
          "
        >
          Book a Lesson
        </a>

      </div>
    </section>
  );
};

export default LessonsCTA;
