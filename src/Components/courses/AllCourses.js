import Image from "next/image";
import { Fragment } from "react";

const AllCourses = ({ data }) => {
  return (
    <Fragment>
      <div className="flex flex-wrap justify-evenly bg-[#F3F3F3] min-h-screen">
        {data.map((each) => (

            <div key={each._id} className="bg-[#003F7D] h-60 w-[16rem] flex flex-col rounded-xl items-center p-2 pt-12">
              <Image src={each.image} alt={`${each.title} image`} width={120} height={120} className="h-20 w-20"/>

              <div className="bg-white h-80 text-center p-4 rounded-xl">
                <h2 className="mb-2 font-semibold">{each.title}</h2>
                <p className="text-[11px]">{each.desc}</p>
                <div>
                    <button>Live Demo</button>
                    <button>Enroll Now</button>
                </div>
            </div>
            </div>

        ))}
      </div>
    </Fragment>
  );
};

export default AllCourses;
