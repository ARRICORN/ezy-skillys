"use client"


import Image from "next/image";

const CardTemplate = ({ user }) => {
  return (
    <div
      className={`${styles.card_shadow} p-6 mx-3 my-16 md:mx-4 bg-[#ffffff] relative`}
    >
      <div className="flex items-center justify-start gap-2 md:gap-3">
        <Image
          width={120}
          height={0}
          src={user?.profile_url}
          alt="avatar"
          priority={true}
          className="p-1"
        />

        {/* === details === */}
        <div>
          <div>
            <strong className="text-[25px] block">{user.name}</strong>
            <strong className="text-[#FF8B36]">{user.profession}</strong>
          </div>

          <div className="mt-3">
            <div className="flex items-center justify-start gap-3">
              <strong className="flex items-center justify-start">
                {[1, 2, 3, 4, 5].map((str) => (
                  <Image
                    src={star}
                    style={{ width: "20px", height: "auto" }}
                    alt="star"
                    priority={true}
                    key={str}
                  />
                ))}
              </strong>
              <strong className="text-[15px] inline-block">
                {user.reviews} Reviews
              </strong>
            </div>

            <div className="flex items-center justify-start gap-3 py-2">
              <div className="flex items-center justify-start gap-2">
                <Image
                  style={{ width: "20px", height: "auto" }}
                  src={downloads}
                  alt="avatar"
                  priority={true}
                  className="text-center mx-auto"
                />
                <span className="text-[14px] inline-block">
                  {user.modules} Modules
                </span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <Image
                  style={{ width: "20px", height: "auto" }}
                  src={logo}
                  alt="avatar"
                  priority={true}
                />

                <span className="text-[14px] inline-block">
                  {user.students} Students
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === description === */}
      <div>
        <span className="text-balance mt-4 block">
          Sandeep is a Software Developer who expertised in .NET & Azure for
          more than 24 years and training 100’s of students to accompolish their
          goals & dreams.
        </span>
      </div>

      {/* trainer award */}

      <div className="p-1 text-center text-white bg-[#FF8B36] absolute top-[-20px] left-[29%] right-[29%] mx-auto rounded-md flex items-center justify-center gap-2">
        <Image src={award} width={18} height={18} alt="award" priority={true} />
        Web Developer
      </div>
    </div>
  );
};

export default CardTemplate;
