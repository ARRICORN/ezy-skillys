// import SkillDevelopment from "@/Components/Home/SkillDevelopment";
// import SkillYourWay from "@/Components/Home/SkillYourWay";
// import WorldsFirstAI from "@/Components/Home/WorldsFirstAI";
// import Achievement from "@/Components/achivepages/achievements/Achievement";
// import CertificateAchievement from "@/Components/achivepages/certificate-achivement/CertificateAchievement";
// import MentorsTrainer from "@/Components/achivepages/mentors-trainers-review/MentorsTrainer";

// import PopularCourses from "@/Components/achivepages/popular-courses/PopularCourses";
// import Project_planning from "@/Components/achivepages/project-planning/Project_planning";
// import React, { Fragment } from "react";
// import HomeReview from "@/Components/Home/HomeReview";
// const page = () => {
//   return (
//     <Fragment>
//       <div className="w-11/12 mx-auto space-y-32">
//         <SkillYourWay />
//         <WorldsFirstAI />
//         <SkillDevelopment />
//         {/* How it works section */}
//         <Project_planning />
//         <PopularCourses />
//         <Achievement />
//         <MentorsTrainer />
//         <HomeReview />
//         <CertificateAchievement />
//       </div>
//     </Fragment>
//   );
// };

// export default page;
import dynamic from 'next/dynamic';
import React, { Fragment } from "react";

// Dynamic imports for all components
const SkillDevelopment = dynamic(() => import("@/Components/Home/SkillDevelopment"), { ssr: false });
const SkillYourWay = dynamic(() => import("@/Components/Home/SkillYourWay"), { ssr: false });
const WorldsFirstAI = dynamic(() => import("@/Components/Home/WorldsFirstAI"), { ssr: false });
const Achievement = dynamic(() => import("@/Components/achivepages/achievements/Achievement"), { ssr: false });
const CertificateAchievement = dynamic(() => import("@/Components/achivepages/certificate-achivement/CertificateAchievement"), { ssr: false });
const MentorsTrainer = dynamic(() => import("@/Components/achivepages/mentors-trainers-review/MentorsTrainer"), { ssr: false });
const PopularCourses = dynamic(() => import("@/Components/achivepages/popular-courses/PopularCourses"), { ssr: false });
const Project_planning = dynamic(() => import("@/Components/achivepages/project-planning/Project_planning"), { ssr: false });
const HomeReview = dynamic(() => import("@/Components/Home/HomeReview"), { ssr: false });

const Page = () => {
  return (
    <Fragment>
      <div className="w-11/12 mx-auto space-y-32">
        <SkillYourWay />
        <WorldsFirstAI />
        <SkillDevelopment />
        {/* How it works section */}
        <Project_planning />
        <PopularCourses />
        <Achievement />
        <MentorsTrainer />
        <HomeReview />
        <CertificateAchievement />
      </div>
    </Fragment>
  );
};

export default Page;