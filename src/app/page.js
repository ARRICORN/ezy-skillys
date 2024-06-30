import Footer from "@/Components/Shared/Footer";
import Achievement from "@/components/pages/achievements/Achievement";
import CertificateAchievement from "@/components/pages/certificate-achivement/CertificateAchievement";
import MentorsTrainer from "@/components/pages/mentors-trainers-review/MentorsTrainer";
import PopularCourses from "@/components/pages/popular-courses/PopularCourses";
import Project_planning from "@/components/pages/project-planning/Project_planning";
import Review from "@/components/pages/review/review";

export default function Home() {
  return (
    <main>
      {/* How it works section */}
      <Project_planning />
      <PopularCourses />
      <Achievement />
      <MentorsTrainer />
      <Review/>
      <CertificateAchievement />

      <Footer />
    </main>
  );
}
