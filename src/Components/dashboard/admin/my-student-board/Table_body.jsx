"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import style from "./student.module.css";

const Table_body = ({ studentData }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      transition={{
        duration: 0.78,
        ease: "easeInOut",
      }}
    >
      <div
        className={`h-[86vh] no-scrollbar overflow-y-auto border border-gray-200`}
      >
        <table className="min-w-full divide-y divide-gray-200 ">
          {/* === table body === */}
          <tbody className={`divide-y divide-white`}>
            {studentData &&
              studentData?.map((std) => (
                <tr
                  key={std._id}
                  className={`${style.shadows} w-[100%] block my-3 mx-1`}
                >
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                      <div className="flex items-center gap-x-2">
                        <Image
                          width={50}
                          height={50}
                          alt="avatar"
                          priority={true}
                          className="object-cover rounded-full"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        />
                        <div>
                          <h2 className="font-medium">{std.student.name}</h2>
                          <h2 className="font-medium">{std.student.email}</h2>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                      <h2 className="text-sm font-normal text-emerald-500">
                        Active
                      </h2>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-semibold whitespace-nowrap">
                    <h1>Design Director</h1>
                  </td>
                  <td className="px-4 py-4 text-sm  whitespace-nowrap font-semibold">
                    <h1>{std?.student?.email}</h1>
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-x-2">
                      <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-200 bg-indigo-100/60">
                        Design
                      </p>
                      <p className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-200 bg-blue-100/60">
                        Product
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap ">
                    <div className="flex items-center gap-x-4">
                      <button className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-orange-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>

                      <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-blue-800"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Table_body;
