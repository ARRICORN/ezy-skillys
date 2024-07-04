"use client";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import toast from "react-hot-toast";
import LoadingButton from "@/Components/Shared/LoadingButton";
import Select from "react-select";
import UPDATE_DATA_BY_ID from "@/utility/request_data/patch_request";
import { colourOptions, colourStyles } from "../add-courses/data";
import styles from "./style.module.css";
import { useSession } from "next-auth/react";
// initial value
let defaultValues = {
  title: "",
  description: "",
  price: "",
  authorName: "",
  email: "",
  liveDemo: "link not available",
  tag: "",
  image: "",
  category: "",
  category: [],
};

// === form component here === //
const Update_single_course = ({ params_id }) => {
  const [isLoading, setIsLoading] = useState();
  const session = useSession();
  const token = session?.data?.user?.token;

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  // form submit handler as well as create course
  const onsubmitHandler = async (data) => {
    setIsLoading(true);

    // === get only selected value from array of object
    const filterCtg = [];
    data.category.filter((element) => filterCtg.push(element.value));

    // === create new data to send server ===
    const createCourse = {
      title: data?.title,
      desc: data?.description,
      price: data?.price,
      tag: data?.tag?.value,
      categories: [...filterCtg],
      liveDemo: data?.liveDemo,
    };

    // === create a post with form data by admin ===
    const response = await UPDATE_DATA_BY_ID(params_id, createCourse, token);

    if (response.success !== true) {
      toast.error("Course update is failed");
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    toast.success("Course update is successfully");
    // reset();
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onsubmitHandler)}>
        <div className="max-w-2xl mx-auto mt-1 md:mt-3 space-y-4">
          {/* === course name === */}
          <div>
            <div className="bg-[#FFFFFF] rounded-xl">
              <Controller
                name="title"
                control={control}
                defaultValue={"title"}
                rules={{ required: "Course name field is required" }}
                render={({ field }) => (
                  <div>
                    <label className={`${styles.labels}`} htmlFor="">
                      Title
                    </label>
                    <input
                      {...field}
                      name="title"
                      type="text"
                      placeholder="course title"
                      className={`${styles.inputs}`}
                    />
                  </div>
                )}
              />
            </div>
            <span className="mb-1 block text-red-400 font-semibold text-[13px]">
              <ErrorMessage name={"title"} errors={errors} />
            </span>
          </div>

          {/* === description === */}
          <div>
            <div className="bg-[#FFFFFF] rounded-xl">
              <Controller
                name="description"
                control={control}
                defaultValue={"description"}
                rules={{
                  required: "Description field is required",
                  maxLength: 1000,
                }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    name="description"
                    placeholder="Enter your description"
                    className={`${styles.inputs}`}
                  />
                )}
              />
            </div>
            <span className="block text-red-400 font-semibold text-[13px] my-1">
              <ErrorMessage name={"description"} errors={errors} />
            </span>
          </div>

          {/* === price === */}
          <div>
            <Controller
              name="price"
              control={control}
              defaultValue={"price"}
              rules={{
                required: "Price field is required",
              }}
              render={({ field }) => (
                <div>
                  <label className={`${styles.labels} bg-white`} htmlFor="">
                    Price
                  </label>
                  <input
                    {...field}
                    type="number"
                    name="Price"
                    className={`${styles.inputs}`}
                  />
                </div>
              )}
            />
            <span className="my-2 block text-red-400 font-semibold text-[13px]">
              <ErrorMessage name={"price"} errors={errors} />
            </span>
          </div>

          {/* === live demo === */}
          <div>
            <div className="bg-[#FFFFFF] rounded-xl mt-2">
              <Controller
                name="liveDemo"
                control={control}
                rules={{ required: false }}
                defaultValue={"liveDemo"}
                render={({ field }) => (
                  <div>
                    <label
                      className={`${styles.labels} bg-white py-1`}
                      htmlFor=""
                    >
                      Live link
                    </label>
                    <input
                      {...field}
                      type="text"
                      placeholder="Link"
                      className={`${styles.inputs}`}
                    />
                  </div>
                )}
              />
            </div>
            <span className="block text-red-400 font-semibold text-[13px]">
              <ErrorMessage name={"liveDemo"} errors={errors} />
            </span>
          </div>

          {/* === tag === */}
          <div>
            <Controller
              name="tag"
              control={control}
              rules={{ required: "Tag field is required" }}
              defaultValue={"tag"}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "opened", label: "Opened" },
                    { value: "closed", label: "Closed" },
                  ]}
                  className="my-2 block"
                />
              )}
            />
            <span className="block text-red-400 font-semibold text-[13px] my-1">
              <ErrorMessage name={"tag"} errors={errors} />
            </span>
          </div>

          {/* === category === */}
          <div>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Category field is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  className="block pt-2"
                  closeMenuOnSelect={false}
                  defaultValue={[colourOptions[0], colourOptions[1]]}
                  isMulti
                  options={colourOptions}
                  styles={colourStyles}
                />
              )}
            />
            <span className="block text-red-400 font-semibold text-[13px] my-2">
              <ErrorMessage name={"category"} errors={errors} />
            </span>
          </div>

          {/* === submit button === */}
          <button
            className="bg-teal-500 block  px-5 py-2 w-44 mx-auto rounded-md border-none text-white mt-4"
            type="submit"
          >
            {isLoading ? <LoadingButton /> : "Update now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update_single_course;
