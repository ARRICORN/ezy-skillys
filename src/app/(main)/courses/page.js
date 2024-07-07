"use client";
import { useQuery } from "@tanstack/react-query";
import axiosConfig from "/axiosConfig";
import { useEffect, useState } from "react";
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
  const itemsPerPage = 16;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCourseCurriculumDownload = () => {
    const link = document.createElement("a");
    link.href = pdfLink;
    link.setAttribute("download", "");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // fetches data from all courses
  const fetchCourses = async () => {
    const { data } = await axiosConfig.get(
      `/courses?page=${currentPage}&limit=${itemsPerPage}${
        search !== ""
          ? `&search_term=${search.trim().split(" ").join("+")}`
          : ""
      }${sort ? `&sort=${sort}` : ""}${
        courseStatus != "all" ? `&tag=${courseStatus}` : ""
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
    queryKey: ["courses", currentPage],
    queryFn: () => fetchCourses(),
    onSuccess: () => {
      refetch();
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch, sort, search, courseStatus]);

  // if (coursesIsSuccess) console.log(coursesData);
  if (coursesIsError) console.log(coursesIsError);

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
      <div className="bg-[#F3F3F3]">
        {/* {coursesIsLoading && <Loading />} */}
        {/* {coursesIsSuccess && ( */}
        <AllCourses
          data={coursesData}
          setModalStatus={setModalStatus}
          setPdfLink={setPdfLink}
        />
        {/* )} */}
        <Pagination
          currentPage={currentPage}
          totalPages={coursesData?.meta?.totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AllCoursesPage;
