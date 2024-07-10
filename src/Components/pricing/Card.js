import Image from "next/image";
import { Fragment } from "react";

const Card = (props) => {
  const { programType, price, perks } = props;
  return (
    <Fragment>
      <div className="flex flex-col z-50 items-center w-[15.5rem] relative rounded-xl">
        <div className="w-3/5 text-center bg-white absolute -top-5 py-2 px-3 rounded-md leading-none text-sm font-semibold">
          <span className="text-[#FF8B36] text-center">{programType}</span>
        </div>
        <div className="bg-[#FF8B36] text-white w-full h-28 text-center p-6 flex items-end rounded-t-xl">
          <p>
            <span className=" text-4xl font-bold">{price}</span> + Taxes
          </p>
        </div>
        <div className="w-full flex flex-col text-sm p-6 bg-white h-32 gap-2">
          {Array.isArray(perks) &&
            perks.map((each) => (
              <div
                key={each?.id}
                className="flex bg-white justify-center items-center text-xs gap-3"
              >
                <div className="w-1/5">
                  <Image src={each?.img} alt={each?.text} className="w-full" />
                </div>
                <span className="w-5/6">{each?.text}</span>
              </div>
            ))}
        </div>
        <div className="w-full bg-white flex justify-center rounded-b-xl shadow-md pt-4 pb-10">
          <button className="w-1/2 border-[1.5px] py-2 px-3 border-[#FF8B36] rounded-md text-sm text-[#FF8B36]">
            Choose Plan
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
