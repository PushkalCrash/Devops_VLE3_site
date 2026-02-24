import Navigation from "@/components/Navigation";
import LessonsHero from "@/components/lessons/LessonsHero";
import LessonsIntrovid from "@/components/lessons/LessonsIntrovid";
import LessonsAudience from "@/components/lessons/LessonsAudience";
import LessonsCurriculum from "@/components/lessons/LessonsCurriculum";
import LessonsFormat from "@/components/lessons/LessonsFormat";
import LessonsCTA from "@/components/lessons/LessonsCTA";

const Lessons = () => {
  return (
    <main className="bg-background min-h-screen">

      <Navigation />

      <section>
        <LessonsHero />
      </section>

      <section>
        <LessonsIntrovid />
      </section>

      <section>
        <LessonsAudience />
      </section>
     
           <section>
        <LessonsCurriculum />
      </section>

      <section>
        <LessonsFormat />
      </section>

      <section>
        <LessonsCTA />
      </section>
      
     </main>
  );
};

export default Lessons;
