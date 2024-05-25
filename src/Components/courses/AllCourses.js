import Image from "next/image";
import { Fragment } from "react";

const AllCourses = ({ data }) => {
  return (
    <Fragment>
      <div className="flex flex-wrap justify-evenly">
        {data.map((each) => (
          <div key={each._id}>
            <div className="bg-[#003F7D] h-52 w-52 flex justify-center p-16">
              <Image src={each.image} alt={`${each.title} image`} width={120} height={120}/>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AllCourses;
