import Image from "next/image";
import style from "./style.module.css";
import ReviewButton from "./ReviewButton";

// grid md:grid-cols-2
const Cart_template = ({ product }) => {
  return (
    <div className={`${style.shadow} p-6 md:p-5 rounded-lg my-5`}>
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

          <div className="flex item-center gap-3">
            <h3 className="text-xl font-bold animate-fade-in-up">
              <span className="text-orange-500">$</span> {product.course.price}
            </h3>

            <ReviewButton productId={product?.course?._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart_template;
