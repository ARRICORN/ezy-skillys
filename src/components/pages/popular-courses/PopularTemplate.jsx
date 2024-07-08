import Image from "next/image";
import Link from "next/link";
import crsCss from "./popular.module.css";

const PopularTemplate = ({ course }) => {
  return (
    <div className={`${crsCss.shadow} rounded-md pb-4`}>
      <div className="w-full h-[128px] overflow-hidden bg-teal-50 py-4 rounded-md">
        <Image
          src={course.image}
          alt={`${course.title} image`}
          width={100}
          height={100}
          className="mx-auto rounded-xl aspect-auto"
        />
      </div>

      <div className="bg-white text-center py-4 px-2 rounded-2xl mt-4 box-border flex flex-col w-full">
        <h2 className="mb-2 font-semibold text-xl">{course.title}</h2>
        <p className="text-sm text-center word-wrap mb-4 block h-[70px]">
          {course.desc.length > 100
            ? `${course.desc.slice(0, 100)}...`
            : course.desc}
        </p>
      </div>

      <div className="w-full mx-auto">
        <Link
          href={`/courses/${course._id}`}
          className="text-[14px] block text-center w-[200px] mx-auto py-2 bg-[#196aba] rounded-lg font-semibold hover:bg-orange-400 text-white transition-all"
        >
          <span>More Details</span>
        </Link>
      </div>
    </div>
  );
};

export default PopularTemplate;
