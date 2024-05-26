import Image from "next/image";

const PlanningTemplate = ({ item }) => {
  return (
    <div className={` text-center text-white flex items-center`}>
      <div>
        <h6 className="font-bold py-1">{item?.count}</h6>
        <div className="">
          <span className="text-[#FB923C]">{item?.title}</span>

          <Image
            priority={true}
            className=" mx-auto"
            src={item?.image}
            width={121}
            height={134}
            alt="logo"
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
