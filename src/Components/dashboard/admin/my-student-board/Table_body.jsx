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
                
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Table_body;
