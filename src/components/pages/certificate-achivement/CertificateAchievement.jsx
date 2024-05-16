import Image from "next/image";
import certificate from "../../../../public/assets/group1.png";
import certificate2 from "../../../../public/assets/group2.png";
import certificate3 from "../../../../public/assets/group3.png";
import certificate4 from "../../../../public/assets/group4.png";
import brandImage from "../../../../public/assets/brand.png";
import styles from "./certificate.module.css";

const CertificateAchievement = () => {
  return (
    <div className="container bg-white py-10">
      <div>
        <h1 className="text-center font-semibold text-[30px] md:text-[50px] text-[#003F7D] mb-8">
          Our <span className="text-orange-500">Achievements</span>
        </h1>

        {/* certificate achievement */}
        <div className={`${styles.certificates} md:mx-24`}>
          <Image
            src={certificate}
            width={190}
            height={190}
            alt="certificate"
            priority={true}
          />
          <Image
            src={certificate2}
            width={190}
            height={190}
            alt="certificate"
            priority={true}
          />
          <Image
            src={certificate3}
            width={190}
            height={190}
            alt="certificate"
            priority={true}
          />
          <Image
            src={certificate4}
            width={190}
            height={190}
            alt="certificate"
            priority={true}
          />
        </div>

        {/* === branding image === */}
        <div>
          <h1 className="mt-14 text-center font-semibold text-[30px] md:text-[50px] text-[#003F7D]">
            Our <span className="text-orange-500">Collaborations</span>
          </h1>
          <Image
            src={brandImage}
            width={600}
            height={190}
            alt="certificate"
            priority={true}
            className="mx-auto my-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateAchievement;
