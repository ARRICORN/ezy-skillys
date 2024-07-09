"use client";
import React from "react";
import axiosConfig from "/axiosConfig";


import { useQuery } from "@tanstack/react-query";
import Review from "../achivepages/review/Review";

const HomeReview = () => {
  //fetches all reviews for the course
  const fetchCourseReviews = async () => {
    try {
      const { data } = await axiosConfig.get(`/reviews/all-reviews`);
      console.log(data);
      return data;
    } catch (error) {
      console.log("error from course details page", error);
    }
  };

  //  all reviews fetches
  const {
    data: reviewsData,
    isLoading: isReviewsDataLoading,
    isError: isReviewsDataError,
    isSuccess: isReviewsDataSuccess,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchCourseReviews,
  });

  if (isReviewsDataLoading) console.log("loading reviews");
  if (isReviewsDataError) console.log("error reviews");
  if (isReviewsDataSuccess) console.log("success", reviewsData);

  return <>{reviewsData?.data && <Review reviewsData={reviewsData?.data} />}</>;
};

export default HomeReview;
