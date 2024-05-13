import Achivements from "@/components/pages/achievements/Achivements";
import PopularCourses from "@/components/pages/popular-courses/PopularCourses";
import Project_planning from "@/components/pages/project-planning/Project_planning";

export default function Home() {
  return (
    <main>
      {/* How it works section */}
      <Project_planning />
      <PopularCourses />
      <Achivements />
    </main>
  );
}
