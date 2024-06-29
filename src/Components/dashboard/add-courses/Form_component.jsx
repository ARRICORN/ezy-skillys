"use client";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import UPLOAD_IMAGE from "@/utility/request_data/upload_image";
import toast from "react-hot-toast";
import LoadingButton from "@/Components/Shared/LoadingButton";
import POST_REQUEST_BY_DATA from "@/utility/request_data/post_request";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { colourOptions, colourStyles } from "./data";
import Select from "react-select";

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
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/myCourses/createCourse`;

// === form component here === //
const Form_component = () => {
  const [isLoading, setIsLoading] = useState(false);

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
    const filterCtg = [];
    data.category.filter((element) => filterCtg.push(element.value));

    const imageUrl = await UPLOAD_IMAGE(data);

    if (!imageUrl) {
      toast.error("invalid image upload");
      setIsLoading(false);
      return;
    }

    const createCourse = {
      title: data?.title,
      desc: data?.description,
      price: data?.price,
      tag: data?.tag?.value,
      categories: [...filterCtg],
      addedBy: data?.email,
      liveDemo: data?.liveDemo,
      image: imageUrl?.url,
    };
    // create a post with form data by admin
    const response = await POST_REQUEST_BY_DATA(url, createCourse);

    if (!response.statusText === "OK") {
      toast.error("Course create is failed");
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    toast.success("Course is created successfully");
    reset();
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onsubmitHandler)}>
        <div className="max-w-2xl mx-auto">
          {/* === course name === */}
          <div>
            <div className="bg-[#FFFFFF] rounded-xl">
              <Controller
                name="title"
                control={control}
                defaultValue={"title"}
                rules={{ required: "Course name field is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Course name"
                    variant=""
                    name="title"
                    className="w-full mb-1"
                  />
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
                  <Textarea
                    {...field}
                    label="Description"
                    variant="bordered"
                    name="description"
                    placeholder="Enter your description"
                    classNames="w-full my-1 block"
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
                <Input
                  {...field}
                  type="number"
                  label="Price"
                  placeholder="0.00"
                  className="py-2 block text-[25px]"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                />
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
                  <Input
                    {...field}
                    type="text"
                    label="Author name"
                    variant="bordered"
                  />
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
                  <Input
                    {...field}
                    type="email"
                    placeholder="you@example.com"
                    variant=""
                    className="py-1 bg-[#FFFFFF] rounded-xl"
                  />
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
                  <Input
                    {...field}
                    type="text"
                    label="Live link"
                    variant="bordered"
                  />
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
            {isLoading ? <LoadingButton /> : "Upload image"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form_component;
