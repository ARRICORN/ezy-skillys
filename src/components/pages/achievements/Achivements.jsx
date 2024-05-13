import Image from "next/image";
import img from "../../../../public/assets/Frame.png";
import person from "../../../../public/assets/boy.png";
import book from "../../../../public/assets/stack-of-books.png";
import style from "./activement.module.css";

const Achivements = () => {
  return (
    <div className={`${style.bg} container py-14 bg-[#FBFBFB]`}>
      <h1 className="text-center font-semibold text-[30px] text-[#003F7D]">
        Our <span className="text-orange-500">Achievements</span>
      </h1>
      <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2">
        {/* left image */}
        <Image src={img} width={1000} height={0} alt="logo" />

        {/* right content */}
        <div>
          {/* number of student */}
          <div className="flex items-center justify-center gap-4">
            <div className={`${style.shadows} text-center rounded-lg p-5`}>
              <strong className="text-[50px] text-orange-400">100</strong>
              <div className="flex items-center justify-center gap-3">
                <Image src={person} width={30} height={0} alt="logo" />
                <span>Students Trained</span>
              </div>
            </div>

            <div
              className={`${style.shadows} text-center rounded-lg p-5 bg-white`}
            >
              <strong className="text-[50px] text-orange-400">50</strong>
              <div className="flex items-center justify-center gap-3">
                <Image src={book} width={30} height={0} alt="logo" />
                <span>Courses Available</span>
              </div>
            </div>
          </div>

          {/* discount for student */}
          <div
            className={`${style.shadows} flex items-center justify-center gap-5 w-[80%] md:max-w-[50%] mx-auto p-5 rounded-md mt-3 bg-white`}
          >
            <h1 className="text-[2.5rem] font-bold text-[#003F7D]">70%</h1>
            <span className="text-[#303030]">
              Students Secured Jobs in Level 1 Companies
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
