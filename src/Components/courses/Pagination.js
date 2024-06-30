import React from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // console.log("currentPage", currentPage, "totalPages", totalPages);
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`h-8 md:h-[44px] rounded-[4px] text-base md:text-[22px]   ${
            i === currentPage
              ? "bg-[#F98149] text-white"
              : "bg-[#F3F3F3] text-[#F98149]"
          }    border-2 border-[#F98149] px-2 md:pt-[6px] md:pr-[15px] md:pb-[17px] md:pl-[14px] font-semibold`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="w-full flex justify-center align-center gap-2 md:gap-4 lg:gap-[33px] xl:gap-[53px] pt-[127px] pb-[89px] ">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`h-8 md:h-[44px] rounded-[4px] text-base md:text-[22px] bg-[#F3F3F3] disabled:opacity-50 text-[#F98149] border-2 border-[#F98149] py-1 md:py-[10px] px-2 md:px-[12px] font-semibold`}
      >
        <FaLessThan />
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`h-8 md:h-[44px] rounded-[4px] text-base md:text-[22px] bg-[#F3F3F3] disabled:opacity-50 text-[#F98149] border-2 border-[#F98149] py-1 md:py-[10px] px-2 md:px-[12px] font-semibold`}
      >
        <FaGreaterThan />
      </button>
    </div>
  );
};

export default Pagination;
