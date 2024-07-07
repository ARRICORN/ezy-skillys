"use client";
import Image from "next/image";
import productCss from "./style.module.css";
import ReviewButton from "./ReviewButton";
import { motion } from "framer-motion";
// === cart component ===
const Cart_template = ({ product }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      transition={{
        duration: 0.78,
        ease: "easeInOut",
      }}
    >
      <div className={`${productCss.shadow} p-6 md:p-5 rounded-lg my-5`}>
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
              {product?.course?.desc.length >= 100
                ? product?.course?.desc.slice(0, 200) + " ...."
                : product?.course?.desc}
            </p>

            <div className="flex item-center gap-3">
              <h3 className="text-xl font-bold animate-fade-in-up">
                <span className="text-orange-500">$</span>{" "}
                {product.course.price}
              </h3>

              <ReviewButton productId={product.course._id} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart_template;
