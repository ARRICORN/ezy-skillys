import Image from "next/image";
import logo from "../../../assets/boy.png";
import star from "../../../assets/favorite.png";
import downloads from "../../../assets/file.png";
import award from "../../../assets/trophy.png";
import styles from "./mentors.module.css";
import Starrating from "@/Components/ReviewCardDetailsPage/Starrating";
import moment from 'moment';


const ReviewTemplate = ({ review }) => {
  return (
    <div className="max-w-[900px] m-auto font-poppins"> <div
      className={`${styles.card_shadow} p-6 bg-[#ecbaba45]  mx-3  my-16 md:mx-4 relative min-h-60`}
    >
      <div className="flex flex-col">

        <div className="flex justify-between items-center mb-2 gap-3 grow-0">
          <Starrating rate={review?.rating} />
          <strong className="text-[15px] inline-block font-mono">
            Reviews ({moment(review?.createdAt).format('DD-MM-YY')})
          </strong>
        </div>

        <div className=" grow">
          <p className="text-[14px] text-justify font-poppins line-clamp-4">
            {review?.review}
          </p>
        </div>

        <div className="flex mt-3 items-center justify-start gap-2 md:gap-3 grow-0">
          <Image
            width={120}
            height={0}
            src={'https://i.ibb.co/cbTDm4g/Frame-1.png'}
            alt="avatar"
            priority={true}
            className="p-1 rounded-full w-14  bg-white"
          />

          {/* === details === */}
          <div>
            <div>
              <strong className="text-[18px] block">{review?.user}</strong>
              {/* <strong className="text-[#52525be2] text-[14px] font-medium">{user.profession}</strong> */}
            </div>


          </div>
        </div>

      </div>

      {/* trainer award */}
      {/* {user.position && (
        <div className="p-1 text-center text-white bg-[#FF8B36] absolute top-[-20px] left-[29%] right-[29%] mx-auto rounded-md flex items-center justify-center gap-2">
          <Image
            src={award}
            width={18}
            height={18}
            alt="award"
            priority={true}
          />
          {user.position}
        </div>
      )} */}
    </div>
    </div>

  );
};

export default ReviewTemplate;
