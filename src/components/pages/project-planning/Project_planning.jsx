import Image from "next/image";
import planningData from "../../../../src/utility/temp/course_planing.json";
import PlanningTemplate from "./PlanningTemplate";
import styles from "./planning.module.css";
import logo from "../../../../public/assets/doted.png";

const Project_planning = () => {
  return (
    <div className={` bg-[#FDFDFD] py-14 ${styles.bg_image} relative`}>
      <div className={``}>
        <div className={`container bg-[#003F7D] rounded-lg py-14 relative`}>
          <div className="max-w-[40%] md:max-w-[30%] mx-auto absolute top-[-35px] right-[20%] left-[20%] bg-orange-400 py-3 text-white font-semibold  md:px-[10px] text-center rounded-lg md:text-[22px]">
            <h2>How it works</h2>
          </div>

          {/* === course planning === */}
          <div className={`${styles.responsive}`}>
            {planningData &&
              planningData.map((item) => (
                <PlanningTemplate item={item} key={item.count} />
              ))}
          </div>
        </div>
      </div>

      {/* bg-image */}
      <div className="absolute bottom-[0px] left-[63px]">
        <Image priority={true} src={logo} width={60} height={10} alt="logo" />
      </div>
    </div>
  );
};

export default Project_planning;
