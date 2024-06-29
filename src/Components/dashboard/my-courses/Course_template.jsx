import Image from "next/image";
import Delete_edit_component from "./Delete_edit_component";
import style from "./style.module.css";

// === course template component
const Course_template = ({ courses }) => {
  return (
    <section className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200 ">
        <tbody className="bg-white divide-white dark:divide-white divide-y-8 w-full">
          {courses.map((el) => (
            <tr
              className={`${style.shadows} w-[100%]  my-3 rounded-md flex items-center justify-between`}
            >
              <div className="flex items-center">
                {/* course image */}
                <td className="p-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                  <Image
                    width={300}
                    height={300}
                    priority={true}
                    className="w-20 h-20 ml-1"
                    src={el?.image}
                    alt="course image"
                  />
                </td>

                {/* course name & email */}
                <td className="px-4 py-4 text-sm font-semibold whitespace-nowrap">
                  {el?.title}
                </td>
                <td className="px-4 py-4 text-sm font-semibold whitespace-nowrap">
                  {el?.addedBy}
                </td>

                {/* course category */}
                <td className="px-3 text-sm whitespace-nowrap font-semibold">
                  <div className="flex items-center gap-x-2">
                    {el?.categories?.map((ct) => (
                      <p className="px-3 py-1 text-xs rounded-full bg-indigo-100/60">
                        {ct}
                      </p>
                    ))}
                  </div>
                </td>
              </div>

              <td className="p-3 text-sm whitespace-nowrap">
                <Delete_edit_component element={el} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Course_template;
