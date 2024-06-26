"use client";
import { useQuery } from "@tanstack/react-query";
import axiosConfig from "/axiosConfig";
import { Fragment, useEffect, useState } from "react";
import Heading from "@/Components/courses/Heading";
import CourseMenu from "@/Components/courses/CourseMenu";
import AllCourses from "@/Components/courses/AllCourses";
import Pagination from "@/Components/courses/Pagination";
import Loading from "@/app/loading";
import Modal from "@/Components/courses/Modal";

const AllCoursesPage = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [pdfLink, setPdfLink] = useState("");
  const [sort, setSort] = useState(false);
  const [courseStatus, setCourseStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCourseCurriculumDownload = () => {
    const link = document.createElement("a");
    link.href = pdfLink;
    link.setAttribute("download", ""); // Set the download attribute
    link.setAttribute("target", "_blank"); // Open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // fetches data from all courses
  const fetchCourses = async () => {
    const { data } = await axiosConfig.get(
      `/courses?_page=${currentPage}&_per_page=${itemsPerPage}${
        search !== "" ? `&title=${search.trim().split(" ").join("+")}` : ""
      }${sort ? `&_sort=${sort}` : ""}${
        courseStatus != "all" ? `&courseStatus.${courseStatus}=true` : ""
      }`
    );
    return data;
  };

  // fetches data
  const {
    data: coursesData,
    isLoading: coursesIsLoading,
    isError: coursesIsError,
    isSuccess: coursesIsSuccess,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: () => fetchCourses(),
    onSuccess: () => {
      refetch();
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch, sort, search, courseStatus]);

  return (
    <div className="font-poppins relative">
      {/*  modal start */}
      <Modal
        modalTitle={"Do you want to download?"}
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        handleCourseCurriculumDownload={handleCourseCurriculumDownload}
      />
      {/* modal end */}
      <Heading />
      <CourseMenu
        setSort={setSort}
        setSearch={setSearch}
        setCourseStatus={setCourseStatus}
      />
      {coursesIsLoading && <Loading />}
      <div class="bg-[#F3F3F3]">
        {coursesIsSuccess && (
          <AllCourses
            data={coursesData}
            setModalStatus={setModalStatus}
            setPdfLink={setPdfLink}
          />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={coursesData?.pages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AllCoursesPage;
