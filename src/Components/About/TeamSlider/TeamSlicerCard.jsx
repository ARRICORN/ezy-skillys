import Image from "next/image";
const TeamSlicerCard = ({image, name, title}) => {
  return (
    <div className="text-center space-y-5">
      <Image alt={`${image}`} src={image} className="md:w-6/12 w-4/12 mx-auto" />
      <div>
        <h2 className="md:text-xl sm:text-lg text-base font-bold text-[#3B4C68]">
         {name}
        </h2>
        <p className="text-[#3B4C68] md:text-base text-sm text-balance w-8/12 mx-auto">{title}</p>
      </div>
    </div>
  );
};

export default TeamSlicerCard;
