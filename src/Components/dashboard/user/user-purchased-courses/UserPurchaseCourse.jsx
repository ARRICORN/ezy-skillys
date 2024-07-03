import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";
import { getServerSession } from "next-auth";
import { authOptions } from "@/Components/Utils/AuthOptions";
import Cart_template from "./Cart_tamplate";

const UserPurchaseCourse = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/myPurchasedCourses?page`;
  const session = await getServerSession(authOptions);
  const products = await API_REQUEST_BY_URL(url, session.token);

  return (
    <div className="h-[85vh] overflow-auto bg-white">
      <div className="w-full md:w-[70%] mx-auto">
        {products.data ? (
          products?.data?.map((item) => (
            <Cart_template product={item} key={item._id} />
          ))
        ) : (
          <h1 className="mt-5 text-center text-orange-500">
            Product information was not found!
          </h1>
        )}
      </div>
    </div>
  );
};

export default UserPurchaseCourse;
