"use client"


import Cart_template from "./Cart_tamplate";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const UserPurchaseCourse = () => {
  const [products, setProducts] = useState([]);
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/user-orders`;
  const session  = useSession();

  const fetchProducts = async () => {
    try {
      const response = await fetch(url, {
        cache: "no-store",
        headers: {
          Authorization: session?.data?.token,
          "Content-type": "Application/json",
        },
      });
      console.log(response,"response");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const res = await response.json();
      console.log(res,"res")
      setProducts(res);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (session?.data?.token) {
      fetchProducts();
    }
  }, [session]);

  console.log(session, "session from user purchase");
  //console.log(products, "products from user purchase");

  return (
    <div className="h-[85vh] overflow-auto bg-white">
      <div className="w-full md:w-[70%] mx-auto">
        {products?.data?.length > 0 ? (
          products.data.map((item) => (
            <Cart_template product={item} key={item._id} />
          ))
        ) : (
          <h1 className="mt-5 text-center text-orange-500">
            Purchase information was not found!
          </h1>
        )}
      </div>
    </div>
  );
};

export default UserPurchaseCourse;