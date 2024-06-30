import Image from "next/image";
import icon from "../../../assets/file.png";

const ChartTemplate = ({ item }) => {

  return (
    <div
      className={`${item.label === "Total Sales" ? "bg-[#FFE2E5]" : ""}
        ${item.label === "Total Order" ? "bg-[#FFF4DE]" : ""}
        ${item.label === "Product Sold" ? "bg-[#DCFCE7]" : ""}
        ${item.label === "New Customers" ? "bg-[#F3E8FF]" : ""}
       rounded-md p-4`}
    >
      <div>
        <div className="rounded-full w-[70px] h-[70px] bg-teal-600 flex items-center justify-center">
          <Image
            src={item.icon}
            width={40}
            height={40}
            alt="brand logo"
            priority={true}
            className="p-[2px] "
          />
        </div>

        <div>
          <strong className="block text-[25px] mt-2">$ {item.sales}</strong>
          <span>
            <strong className="block">{item.label}</strong>
            <span>{item.title}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChartTemplate;
