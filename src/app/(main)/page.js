import SkillDevelopment from "@/Components/Home/SkillDevelopment";
import SkillYourWay from "@/Components/Home/SkillYourWay";
import WorldsFirstAI from "@/Components/Home/WorldsFirstAI";
import Achievement from "@/Components/achivepages/achievements/Achievement";
import CertificateAchievement from "@/Components/achivepages/certificate-achivement/CertificateAchievement";
import MentorsTrainer from "@/Components/achivepages/mentors-trainers-review/MentorsTrainer";
import ReviewTemplate from "@/Components/achivepages/mentors-trainers-review/ReviewTemplate";
import PopularCourses from "@/Components/achivepages/popular-courses/PopularCourses";
import Project_planning from "@/Components/achivepages/project-planning/Project_planning";
import React, { Fragment } from "react";
import HomeReview from "@/Components/Home/HomeReview";
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
        <HomeReview />
        <CertificateAchievement />
      </div>
    </Fragment>
  );
};

export default page;
