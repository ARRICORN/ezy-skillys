import Image from "next/image";
import files from "../../../../public/assets/file.png";
import demo from "../../../../public/assets/computer.png";
import pin from "../../../../public/assets/push-pin.png";
import style from "./popular.module.css";

const PopularTemplate = ({ item }) => {
  return (
    <div className="rounded-xl bg-[#003F7D] text-center relative pb-16 mb-40">
      <div className="h-[30%] p-10">
        {/* image box */}
        <Image
          width={100}
          height={0}
          alt="brand logo"
          src={item?.image}
          className="mx-auto"
        />
      </div>

      {/* details box */}
      <div className={`absolute top-[64%] px-2`}>
        <div className={`${style.shadow} bg-[#FDFDFD] rounded-lg p-2 pb-4`}>
          <h3 className="text-[20px] md:text-[25px] py-2">
            {item?.courseName}
          </h3>
          <p className="text-[15px]">
            {item?.description.length >= 100
              ? `${item?.description.slice(0, 90)} ...`
              : item?.description}
          </p>
          {/* button with icon */}
          <div className="flex items-center justify-evenly py-3 gap-x-2">
            <div className="flex items-center justify-between gap-x-3 border-[1px] py-[2px] border-orange-400 px-3 rounded">
              <Image width={13} height={1} alt="icon" src={demo} />
              <button className="inline-block font-semibold text-[#575757]">
                Live demo
              </button>
            </div>

            <div className="flex items-center justify-between gap-x-2 border-[1px] py-[2px] border-orange-400 px-2 rounded">
              <Image width={13} height={1} alt="icon" src={pin} />
              <button className="inline-block font-semibold text-[#575757]">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Download Curriculam */}
          <button className={`${style.buttons}`}>
            <Image width={17} height={1} alt="icon" src={files} />
            <span>Download Curriculam</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularTemplate;

{
  /* <div className="flex items-center justify-center gap-x-2 bg-[#F98D5B] rounded-xl mx-5 text-white py-[5px]">
  {/* image box */
}
//   <Image width={30} height={0} alt="brand logo" src={logo} />
//   <button className="inline-block text-[15px]">Download Curriculam</button>
// </div>; */}
