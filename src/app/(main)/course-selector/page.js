import Image from "next/image";
import LearningBoy from "../../../assets/LearningBoy.png";
import Link from "next/link";
const Courses = () => {
  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="space-y-10">
        <div>
          <h2 className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl  font-bold md:text-balance text-headingColor text-wrap ">
            <span className="text-[#003F7D]">Choose The </span>
            <span className="text-[#F98149]">Course</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 justify-center items-center gap-10">
          <div>
            <div className="drop-shadow-lg text-center  bg-[#FDFDFD] space-y-20 rounded-md py-10 md:py-20 px-10">
              <h2 className="text-black font-bold sm:text-2xl  text-xl ">
                Ok, Let me help you
              </h2>
              

                <Link href="/courseSelector">
                <button className="bg-[#F2831F] border-2 border-[#F2831F] px-5 py-5 mt-5 rounded-lg  text-white font-bold  sm:text-xl text-lg">
                  Discover <br/> Course
                </button>
                </Link>
               


                
                {/* <button className="border-[#2048AB] border-2 px-5 py-24   rounded-3xl text-[#2048AB] font-bold  sm:text-xl text-lg">
                  Suggest <br/> Course
                </button> */}
            
               
             
            </div>
          </div>
          <div>
            <Image
              src={LearningBoy}
              alt="LearningBoy"
              className="w-10/12 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
