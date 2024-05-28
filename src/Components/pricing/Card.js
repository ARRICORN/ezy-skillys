import { Fragment } from "react";

const Card = ({programType, price, perks}) => {
    return (
        <Fragment>
            <div className="flex flex-col">
                <div>
                    <span>{programType}</span>
                </div>
                <div>
                    {price} + Taxes
                </div>
                <div>
                    <p>{perks.first}</p>
                    <p>{perks.second}</p>
                </div>
                <button>Choose Plan</button>
            </div>
        </Fragment>
    );
};

export default Card;