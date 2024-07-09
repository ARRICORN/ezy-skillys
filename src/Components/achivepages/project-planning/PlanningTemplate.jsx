import Image from "next/image";

const PlanningTemplate = ({ item }) => {
  return (
    <div className={`text-center text-white flex items-center justify-center `}>
      <div>
        <h6 className="font-bold py-1">{item?.count}</h6>
        <div className="">
          <span className="text-[#FB923C]">{item?.title}</span>

          <Image
            className="mx-auto w-full"
            src={item?.image}
            alt="logo"
            width={150}
            height={50}
            priority={true}
          />

          <span className="text-[12px] pt-[10px] inline-block">
            {item?.description}
          </span>
        </div>
      </div>
      {item.title !== "Employed" && (
        <span className="inline-block ml-2">&#11162;</span>
      )}
    </div>
  );
};

export default PlanningTemplate;
