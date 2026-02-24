const topics = [
  "Technical control & finger strength",
  "Practical music theory applied to real songs",
  "Improvisation & solo development",
  "Chord progressions & songwriting structure",
  "Tone shaping & sound control",
  "Performance confidence & stage presence"
];

const LessonsCurriculum = () => {
  return (
    <section className="py-24">
      <div className="container max-w-5xl">

        <h2 className="section-title mb-12">
          What You’ll Learn
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="card-glass p-6 rounded-xl"
            >
              <p className="text-white">{topic}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LessonsCurriculum;
