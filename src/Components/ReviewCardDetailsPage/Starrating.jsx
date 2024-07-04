'use client'
import ReactStars from "react-rating-stars-component";

const Starrating = ({rate}) => {
    return (
        <>
            <ReactStars
                count={5}
                size={24}
                isHalf={true}
                edit={false}
                activeColor="#ffd700"
                value={rate}
            />
        </>
    );
};

export default Starrating;