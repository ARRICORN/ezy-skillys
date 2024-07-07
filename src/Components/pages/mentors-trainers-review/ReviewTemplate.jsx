import Image from "next/image";
import star from "../../../assets/favorite.png";
import award from "../../../assets/trophy.png";
import styles from "./style.module.css";

const ReviewTemplate = ({ user }) => {
  return (
    <div className="max-w-[900px] m-auto font-poppins">
      {" "}
      <div
        className={`${styles.card_shadow} p-6 bg-[#ecbaba45]  mx-3  my-16 md:mx-4 relative`}
      >
        <div>
          <div className="flex justify-between  mb-2 gap-3">
            <strong className="flex  ">
              {[1, 2, 3, 4, 5].map((str) => (
                <Image
                  src={star}
                  style={{ width: "20px", height: "12", marginBottom: "7px" }}
                  alt="star"
                  priority={true}
                  key={str}
                />
              ))}
            </strong>
            <strong className="text-[15px] inline-block font-mono">
              {user.reviews} Reviews ({user.time})
            </strong>
          </div>
          <div>
            <span className="text-[14px] text-justify ">{user.pra}</span>
          </div>
          <div></div>
        </div>
        <div className="flex mt-3 items-center justify-start gap-2 md:gap-3">
          <Image
            width={120}
            height={0}
            src={user?.profile_url}
            alt="avatar"
            priority={true}
            className="p-1 rounded-full w-14  bg-white"
          />

          {/* === details === */}
          <div>
            <div>
              <strong className="text-[18px] block">{user.name}</strong>
              <strong className="text-[#52525be2] text-[14px] font-medium">
                {user.profession}
              </strong>
            </div>
          </div>
        </div>

        {/* trainer award */}
        {user.position && (
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
        )}
      </div>
    </div>
  );
};

export default ReviewTemplate;
