import Image from "next/image";
import files from "../../../assets/file.png";
import demo from "../../../assets/computer.png";
import pin from "../../../assets/push-pin.png";
import styles from "./popular.module.css";

const PopularTemplate = ({ item }) => {
  return (
    <div className="rounded-xl bg-[#003F7D] text-center relative pb-16 mb-40">
      <div className="h-[30%] p-10">
        {/* image box */}
        <Image
          priority={true}
          width={100}
          height={10}
          alt="brand logo"
          src={item?.image}
          className="mx-auto"
        />
      </div>

      {/* details box */}
      <div className={`absolute top-[64%] px-2`}>
        <div className={`${styles.shadow} bg-[#FDFDFD] rounded-lg p-2 pb-4`}>
          <h3 className="text-[20px] md:text-[25px] py-2">{item?.title}</h3>
          <p className="text-[15px]">
            {item?.desc.length >= 100
              ? `${item?.desc.slice(0, 90)} ...`
              : item?.desc}
          </p>
          {/* button with icon */}
          <div className="flex items-center justify-evenly py-4 gap-x-2">
            <div className="flex items-center justify-between gap-x-3 border-[1px] py-[2px] border-orange-400 px-3 rounded">
              <Image
                priority={true}
                width={13}
                height={10}
                alt="icon"
                src={demo}
              />
              <a
                href={item.liveDemo}
                className="inline-block font-semibold text-[#575757]"
              >
                Live demo
              </a>
            </div>

            <div className="flex items-center justify-between gap-x-2 border-[1px] py-[2px] border-orange-400 px-2 rounded">
              <Image
                priority={true}
                width={13}
                height={10}
                alt="icon"
                src={pin}
              />
              <button className="inline-block font-semibold text-[#575757]">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Download Curriculam */}
          <button className={`${styles.buttons}`}>
            <Image
              priority={true}
              width={17}
              height={10}
              alt="icon"
              src={files}
            />
            <span>Download Curriculam</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularTemplate;
