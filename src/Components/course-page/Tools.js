import { Fragment } from "react";
import "/src/app/(main)/course-page/coursePage.css"
import Image from "next/image";

const Tools = ({courseTools}) => {
    return (
        <Fragment>
            <div className="w-5/6 mx-auto">
            <div className="flex items-center">
                <h2 className="heading w-3/4 lg:w-1/4">Tools & Platforms</h2>
                <div className="w-1/2 lg:w-full border border-[#FF8401] h-0 relative -top-[5px]"></div>
                </div>
  
                <div className="flex justify-between mt-4 lg:mt-8 gap-2">
                    {
                        courseTools.map((each, index) => (
                            <div key={index} className="rounded-full p-4 bg-[#003F7D] flex items-center">
                                <Image src={each.img} alt={"tool"} width={66} height={66}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Tools;