"use client";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import UPLOAD_IMAGE from "@/utility/request_data/upload_image";
import toast from "react-hot-toast";
import LoadingButton from "@/Components/Shared/LoadingButton";
import POST_REQUEST_BY_DATA from "@/utility/request_data/post_request";
import Select from "react-select";
import indexCss from "./index.module.css";
import { colourOptions, colourStyles } from "./data";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

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
  upload_image: {},
  category: [],
};
// create course api for admin
const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/courses/myCourses/createCourse`;

// === form component here === //
const Form_component = () => {
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const token = session?.data?.user?.token;

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const onsubmitHandler = async (data) => {
    // Extract and transform the categories from the form data
    setIsLoading(true);
    let filterCtg = data.category.map((element) => element.value);

    // Upload the image and get the URL
    const imageUrl = await UPLOAD_IMAGE(data);

    // Check if the image upload wasn't successful
    if (!imageUrl) {
      toast.error("Invalid image upload");
      setIsLoading(false); // Reset the loading state
      return;
    }

    // Create the course object with the form data and the uploaded image URL
    const createCourse = {
      title: data.title,
      desc: data.description,
      price: data.price,
      tag: data.tag?.value,
      categories: filterCtg,
      addedBy: data.email,
      liveDemo: data.liveDemo,
      image: imageUrl.url,
    };

    // Make a POST request to create the course
    const response = await POST_REQUEST_BY_DATA(url, createCourse, token);

    // Check if the response is not OK
    if (!response.success) {
      toast.error(response.message);
      setIsLoading(false); // Reset the loading state
      return;
    }

    // Reset the loading state and display a success message
    setIsLoading(false);
    toast.success("Course created successfully");
    reset(); // Reset the form
  };

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      transition={{
        duration: 0.78,
        ease: "easeInOut",
      }}
    >
      <div className="p-2">
        <form onSubmit={handleSubmit(onsubmitHandler)}>
          <div className="max-w-2xl mx-auto space-y-3">
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
                      <label className={`${indexCss.labels}`} htmlFor="">
                        Title
                      </label>
                      <input
                        {...field}
                        name="title"
                        type="text"
                        placeholder="course title"
                        className={`${indexCss.inputs}`}
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
                    <div>
                      <label className={`${indexCss.labels}`} htmlFor="">
                        Description
                      </label>

                      <textarea
                        {...field}
                        name="description"
                        placeholder="Enter your description"
                        className={`${indexCss.inputs}`}
                        rows={4}
                      />
                    </div>
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
                    <label className={`${indexCss.labels} bg-white`} htmlFor="">
                      Price
                    </label>
                    <input
                      {...field}
                      type="number"
                      name="Price"
                      placeholder="0.00"
                      className={`${indexCss.inputs}`}
                    />
                  </div>
                )}
              />
              <span className="my-2 block text-red-400 font-semibold text-[13px]">
                <ErrorMessage name={"price"} errors={errors} />
              </span>
            </div>

            {/* === authorName === */}
            <div>
              <div className="bg-[#FFFFFF] rounded-xl">
                <Controller
                  name="authorName"
                  control={control}
                  defaultValue={"authorName"}
                  rules={{ required: "Author name is required" }}
                  render={({ field }) => (
                    <div>
                      <label className={`${indexCss.labels}`} htmlFor="">
                        Author name
                      </label>
                      <input
                        {...field}
                        placeholder="name"
                        type="text"
                        name="author name"
                        className={`${indexCss.inputs}`}
                      />
                    </div>
                  )}
                />
              </div>
              <span className="my-2 block text-red-400 font-semibold text-[13px]">
                <ErrorMessage name={"authorName"} errors={errors} />
              </span>
            </div>

            {/* === email === */}
            <div>
              <div className="bg-[#FFFFFF] rounded-xl">
                <Controller
                  name="email"
                  control={control}
                  defaultValue={"email"}
                  rules={{ required: "Email field is required" }}
                  render={({ field }) => (
                    <div>
                      <label className={`${indexCss.labels}`} htmlFor="">
                        Enter email
                      </label>

                      <input
                        {...field}
                        type="email"
                        placeholder="you@example.com"
                        className={`${indexCss.inputs}`}
                      />
                    </div>
                  )}
                />
              </div>
              <span className="py-2 block text-red-400 font-semibold text-[13px]">
                <ErrorMessage name={"email"} errors={errors} />
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
                  <div>
                    <label className={`${indexCss.labels} bg-white`} htmlFor="">
                      Tag
                    </label>

                    <Select
                      {...field}
                      options={[
                        { value: "opened", label: "Opened" },
                        { value: "archived", label: "Archived" },
                        { value: "comingSoon", label: "Coming Soon" },
                      ]}
                    />
                  </div>
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
                  <div>
                    <label
                      className={`${indexCss.labels} bg-white py-1 mt-2`}
                      htmlFor=""
                    >
                      Select
                    </label>
                    <Select
                      {...field}
                      closeMenuOnSelect={false}
                      defaultValue={[colourOptions[0], colourOptions[1]]}
                      isMulti
                      options={colourOptions}
                      styles={colourStyles}
                    />
                  </div>
                )}
              />
              <span className="block text-red-400 font-semibold text-[13px] my-2">
                <ErrorMessage name={"category"} errors={errors} />
              </span>
            </div>

            {/* === image === */}
            <div>
              <input
                {...register("upload_image", {
                  required: "Image field is required",
                })}
                placeholder="upload image"
                alt="upload image"
                className="my-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full"
                type="file"
                accept="image/*"
              />

              <span className="block text-red-400 font-semibold text-[13px]">
                <ErrorMessage name={"upload_image"} errors={errors} />
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
                        className={`${indexCss.labels} bg-white py-1`}
                        htmlFor=""
                      >
                        Live link
                      </label>
                      <input
                        {...field}
                        type="text"
                        placeholder="Link"
                        className={`${indexCss.inputs}`}
                      />
                    </div>
                  )}
                />
              </div>
              <span className="block text-red-400 font-semibold text-[13px]">
                <ErrorMessage name={"liveDemo"} errors={errors} />
              </span>
            </div>

            {/* === submit button === */}
            <button
              className="bg-teal-500 block  px-5 py-2 w-44 mx-auto rounded-md border-none text-white mt-4"
              type="submit"
            >
              {isLoading ? <LoadingButton /> : "Add course"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Form_component;
