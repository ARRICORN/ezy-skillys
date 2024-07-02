"use client";
import DELETE_POST_WITH_ID from "@/utility/request_data/delete_post";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";

//== delete the course data from database ===
const Delete_edit_component = ({ element }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const token = Cookies.get("user-cookie");

  // === delete post handler by id ===
  const deleteHandler = async (id) => {
    const check = confirm("Are you sure to delete");

    if (!check) {
      return;
    }
    const response = await DELETE_POST_WITH_ID(id, token);

    if (!response.ok) {
      toast.error("Course delete is failed");
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    toast.success("Course is deleted successfully");

    // it will works for reload the window after delete operation
    startTransition(() => {
      router.refresh();
    });
  };

  // === Edit handler by id ===
  const editHandler = async (id) => {
    router.push(`/dashboard/update-single-course/${id}`);
  };

  return (
    <div className="flex items-center justify-center gap-x-5">
      <button
        className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
        onClick={() => deleteHandler(element?._id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-orange-400 hover:text-red-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>

      <button
        className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none inline-block"
        onClick={() => editHandler(element?._id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-blue-500 hover:text-orange-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
    </div>
  );
};

export default Delete_edit_component;
