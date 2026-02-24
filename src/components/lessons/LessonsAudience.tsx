const audience = [
  {
    title: "Complete Beginners",
    desc: "Start from scratch with proper technique, rhythm understanding, and structured progression."
  },
  {
    title: "Intermediate Players",
    desc: "Break plateaus, refine technique, and gain real control over improvisation and theory."
  },
  {
    title: "Advanced Musicians",
    desc: "Polish precision, elevate tone control, and strengthen stage confidence."
  }
];

const LessonsAudience = () => {
  return (
    <section className="py-24">
      <div className="container max-w-6xl">

        <h2 className="section-title mb-12 text-center">
          Who It’s For
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {audience.map((item, i) => (
            <div
              key={i}
              className="card-glass p-8 rounded-xl"
            >
              <h3 className="font-display text-xl mb-4">
                {item.title}
              </h3>
              <p className="text-white/75">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LessonsAudience;
