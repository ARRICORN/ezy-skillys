import Image from "next/image";
import { Fragment } from "react";

const Card = (props) => {
  const { programType, price, perks } = props;
  return (
    <Fragment>
      <div className="flex flex-col z-50">
        <div>
          <span>{programType}</span>
        </div>
        <div>{price} + Taxes</div>
        <div>
          {Array.isArray(perks) && perks.map((each) => (
            <div key={each?.id}>
              <Image src={each?.img} alt={each?.text} />
              <span>{each?.text}</span>
            </div>
          ))}
        </div>
        <button>Choose Plan</button>
      </div>
    </Fragment>
  );
};

export default Card;
