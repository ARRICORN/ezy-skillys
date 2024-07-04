import Image from "next/image";
import files from "../../../assets/file.png";
import demo from "../../../assets/computer.png";
import monitor from "/src/assets/monitor-vector.png";
import pin from "/src/assets/enroll-vector.png";
import download from "/src/assets/download-vector.png";
import styles from "./popular.module.css";
import Link from "next/link";

const PopularTemplate = ({ item }) => {
  return (
    // <div className="rounded-xl bg-[#003F7D] text-center relative pb-16 mb-40">
    //   <div className="h-[30%] p-10">
    //     {/* image box */}
    //     <Image
    //       priority={true}
    //       width={100}
    //       height={100}
    //       alt="brand logo"
    //       src={item?.image}
    //       className="mx-auto aspect-auto"
    //     />
    //   </div>

    //   {/* details box */}
    //   <div className={`absolute top-[64%] px-2 w-full`}>
    //     <div className={`${styles.shadow} bg-[#FDFDFD] rounded-lg p-2 pb-4`}>
    //       <h3 className="text-[20px] md:text-[25px] py-2">{item?.title}</h3>
    //       <p className="text-[15px]">
    //         {item?.desc.length >= 100
    //            `${item?.desc.slice(0, 90)} ...`
    //           : item?.desc}
    //       </p>
    //       {/* button with icon */}
    //       <div className="flex items-center justify-evenly py-4 gap-x-2">
    //         <div className="flex items-center justify-between gap-x-3 border-[1px] py-[2px] border-orange-400 px-3 rounded">
    //           <Image
    //             priority={true}
    //             width={13}
    //             height={10}
    //             alt="icon"
    //             src={demo}
    //           />
    //           <a
    //             href={item.liveDemo}
    //             className="inline-block font-semibold text-[#575757]"
    //           >
    //             Live demo
    //           </a>
    //         </div>

    //         <div className="flex items-center justify-between gap-x-2 border-[1px] py-[2px] border-orange-400 px-2 rounded">
    //           <Image
    //             priority={true}
    //             width={13}
    //             height={10}
    //             alt="icon"
    //             src={pin}
    //           />
    //           <button className="inline-block font-semibold text-[#575757]">
    //             Enroll Now
    //           </button>
    //         </div>
    //       </div>

    //       {/* Download Curriculam */}
    //       <button className={`${styles.buttons}`}>
    //         <Image
    //           priority={true}
    //           width={17}
    //           height={10}
    //           alt="icon"
    //           src={files}
    //           className="-z-10"
    //         />
    //         <span>Download Curriculam</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#003F7D] h-[300px] w-full flex flex-col rounded-2xl items-center p-4 box-border cols-span-1">
      <div className="w-full h-full object-cover rounded-xl">
        <Image
          src={item?.image}
          alt={`${item?.title} image`}
          width={120}
          height={120}
          className="h-[140px] w-full rounded-xl"
        />
      </div>
      <div className="bg-white text-center py-4 px-2 rounded-2xl mt-4 box-border flex flex-col w-full">
        <h2 className="mb-2 font-semibold text-xl">{item?.title}</h2>
        <p className="text-sm text-center word-wrap mb-4">
          {item?.desc.length > 100
            ? `${item?.desc.slice(0, 100)}...`
            : item?.desc}
        </p>
        <div className="flex justify-center gap-2">
          <button className="px-3 py-2 text-[10px] border-[#F98149] rounded-xl border flex gap-1 items-center">
            <Image className="w-3" src={monitor} alt="Monitor" />{" "}
            <span>Live Demo</span>
          </button>
          <Link
            href={`/payment/${item?._id}`}
            className="px-3 py-2 text-[10px] border-[#F98149] rounded-xl border flex gap-1 items-center"
          >
            <Image className="w-3" src={pin} alt="Pin" />
            <span>Enroll Now</span>
          </Link>
        </div>
        <button className="px-3 py-2 text-white text-xs bg-[#F98149] items-center gap-1 rounded-3xl flex justify-center w-full mb-[-30px] mt-3">
          <Image className="w-4" src={download} alt="Download" />
          <span>Download Curriculum</span>
        </button>
      </div>
    </div>
  );
};

export default PopularTemplate;
