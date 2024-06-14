"use client";
import { Controller, useForm } from "react-hook-form";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import UPLOAD_IMAGE from "@/utility/request_data/upload_image";
import toast from "react-hot-toast";
import LoadingButton from "@/Components/Shared/LoadingButton";
import POST_REQUEST_BY_DATA from "@/utility/request_data/post_request";
import { useSession } from "next-auth/react";
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
  const [isLoading, setIsLoading] = useState();
  const { data, status, update } = useSession();

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
      categories: data?.category,
      addedBy: data?.email,
      liveDemo: data?.liveDemo,
      image: imageUrl?.url,
    };
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
    <div className="p-2 bg-white">
      <form onSubmit={handleSubmit(onsubmitHandler)}>
        <div className="max-w-2xl mx-auto">
          {/* === course name === */}
          <div>
            <Controller
              name="title"
              control={control}
              defaultValue={"title"}
              rules={{ required: "Course name field is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="course name"
                  className="block outline-none p-3 font-bold text-gray-600 mb-3 bg-[#E8F0FE] rounded-md w-full"
                />
              )}
            />
            <span className="block text-red-400 font-semibold text-[13px]">
              <ErrorMessage name={"title"} errors={errors} />
            </span>
          </div>

          {/* === description === */}
          <div>
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
                  name="description"
                  rows="4"
                  cols="50"
                  {...field}
                  type="text"
                  placeholder="Type something about course"
                  className="block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full my-3"
                />
              )}
            />
            <span className="block text-red-400 font-semibold text-[13px]">
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
                <input
                  {...field}
                  type="number"
                  placeholder="price"
                  className="my-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              )}
            />
            <span className="block text-red-400 font-semibold text-[13px]">
              <ErrorMessage name={"price"} errors={errors} />
            </span>
          </div>

          {/* === authorName === */}
          <div>
            <Controller
              name="authorName"
              control={control}
              defaultValue={"authorName"}
              rules={{ required: "Author name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="author name"
                  className="my-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full"
                />
              )}
            />
            <span className="block text-red-400 font-semibold text-[13px]">
              <ErrorMessage name={"authorName"} errors={errors} />
            </span>
          </div>

          {/* === email === */}
          <div>
            <Controller
              name="email"
              control={control}
              defaultValue={"email"}
              rules={{ required: "Email field is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="author email"
                  className="my-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full"
                />
              )}
            />
            <span className="block text-red-400 font-semibold text-[13px]">
              <ErrorMessage name={"email"} errors={errors} />
            </span>
          </div>

          {/* === live demo === */}
          <div>
            <Controller
              name="liveDemo"
              control={control}
              rules={{ required: false }}
              defaultValue={"liveDemo"}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="live demo link"
                  className="my-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full"
                />
              )}
            />
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
                />
              )}
            />
            <span className="block text-red-400 font-semibold text-[13px] my-1">
              <ErrorMessage name={"tag"} errors={errors} />
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

          {/* === category === */}
          <div>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Category field is required" }}
              render={({ field }) => (
                <CheckboxGroup
                  label="Select category"
                  orientation="horizontal"
                  defaultValue={["designer", "programming", "content creator"]}
                  {...field}
                >
                  <Checkbox value={"designer"} color="success">
                    Designer
                  </Checkbox>
                  <Checkbox value={"programming"} color="warning">
                    Programmer
                  </Checkbox>

                  <Checkbox value={"content creator"} color="danger">
                    Content creator
                  </Checkbox>
                </CheckboxGroup>
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
            {isLoading ? <LoadingButton /> : "Upload image"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form_component;

//

{
  /* <div className="flex gap-4">
                  <Checkbox {...field} value={"designer"} color="success">
                    Designer
                  </Checkbox>
                  <Checkbox {...field} value={"programming"} color="warning">
                    Programmer
                  </Checkbox>

                  <Checkbox {...field} value={"content creator"} color="danger">
                    Content creator
                  </Checkbox>
                </div> */
}
