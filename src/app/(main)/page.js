import SkillDevelopment from "@/Components/Home/SkillDevelopment";
import SkillYourWay from "@/Components/Home/SkillYourWay";
import WorldsFirstAI from "@/Components/Home/WorldsFirstAI";
import Achievement from "@/Components/pages/achievements/Achievement";
import CertificateAchievement from "@/Components/pages/certificate-achivement/CertificateAchievement";
import MentorsTrainer from "@/Components/pages/mentors-trainers-review/MentorsTrainer";
import ReviewTemplate from "@/Components/pages/mentors-trainers-review/ReviewTemplate";
import PopularCourses from "@/Components/pages/popular-courses/PopularCourses";
import Project_planning from "@/Components/pages/project-planning/Project_planning";
import React, { Fragment } from "react";
import ReviewSection from "@/Components/pages/review/ReviewSection";
const page = () => {
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
        <ReviewSection />
        <CertificateAchievement />

      </div>
    </Fragment>
  );
};

export default page;