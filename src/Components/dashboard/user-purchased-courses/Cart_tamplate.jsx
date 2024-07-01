import Image from "next/image";
import style from "./style.module.css";

// grid md:grid-cols-2
const Cart_template = ({ product }) => {
  return (
    <div className={`${style.shadow} p-2 rounded-lg my-2`}>
      <div className="grid md:grid-cols-2">
        <div className="grid items-center justify-center">
          <Image
            src={product.course.image}
            alt="Product Image"
            width={100}
            height={100}
            className="object-cover animate-pulse mix-blend-multiply bg-white"
          />
        </div>
        <div className="">
          <h2 className="text-xl md:text-xl font-bold mb-1 animate-fade-in">
            {product.course.title}
          </h2>
          <p className="text-sm md:text-base mb-2 text-muted-foreground animate-fade-in-up">
            {product.course.desc}
          </p>
          <div className="flex items-center mb-2 animate-fade-in-up">
            <div className="flex items-center gap-1 mr-2">
              <StarIcon className="w-5 h-5 fill-primary animate-bounce" />
              <StarIcon className="w-5 h-5 fill-primary animate-bounce" />
              <StarIcon className="w-5 h-5 fill-primary animate-bounce" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground animate-bounce" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground animate-bounce" />
            </div>
            <span className="text-sm text-muted-foreground">3.2 out of 5</span>
          </div>
          <h3 className="text-xl font-bold animate-fade-in-up">
            ${product.course.price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cart_template;

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
