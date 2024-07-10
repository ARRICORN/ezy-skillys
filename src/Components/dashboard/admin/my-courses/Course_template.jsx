"use client";
import Image from "next/image";
import Delete_edit_component from "./Delete_edit_component";
import courseCss from "./style.module.css";
import { motion } from "framer-motion";

// === course template component
const Course_template = ({ courses }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      transition={{
        duration: 0.78,
        ease: "easeInOut",
      }}
    >
      <section className="container mx-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-white dark:divide-white divide-y-8 w-full">
            {courses.map((el) => (
              <tr
                key={el._id} // Ensure each child in a list has a unique "key" prop
                className={`${courseCss.shadows} my-3 rounded-md flex items-center justify-between`}
              >
                <td className="p-2 text-sm font-medium text-gray-700 whitespace-nowrap flex items-center">
                  <Image
                    width={300}
                    height={300}
                    priority={true}
                    className="w-20 h-20 ml-1"
                    src={el?.image}
                    alt="course image"
                  />
                </td>

                <td className="px-4 py-4 text-sm font-semibold whitespace-nowrap">
                  {el?.title}
                </td>
                <td className="px-4 py-4 text-sm font-semibold whitespace-nowrap">
                  {el?.addedBy}
                </td>

                <td className="px-3 text-sm whitespace-nowrap font-semibold">
                  <div className="flex items-center gap-x-2">
                    {el?.categories?.map((ct, index) => (
                      <p
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-indigo-100/60"
                      >
                        {ct}
                      </p>
                    ))}
                  </div>
                </td>

                <td className="p-3 text-sm whitespace-nowrap">
                  <Delete_edit_component element={el} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </motion.div>
  );
};

export default Course_template;
