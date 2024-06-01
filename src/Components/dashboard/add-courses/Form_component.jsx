"use client";
import { Controller, useForm } from "react-hook-form";

const Form_component = () => {
  const { control, handleSubmit } = useForm();

  const onsubmitHandler = (event) => {
    console.log(event);
  };

  return (
    <div className="p-2 bg-white">
      <form onSubmit={handleSubmit(onsubmitHandler)}>
        <div className="max-w-2xl mx-auto">
          {/* === title === */}
          <div>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="author"
                  className="block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full"
                />
              )}
            />
          </div>

          {/* === description === */}
          <div>
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <textarea
                  name="description"
                  rows="4"
                  cols="50"
                  maxlength="200"
                  {...field}
                  type="text"
                  placeholder="description"
                  className="block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full my-3"
                >
                  A nice day is a nice day. Lao Tseu
                </textarea>
              )}
            />
          </div>
          {/* === price === */}
          <div>
            <Controller
              name="price"
              control={control}
              rules={{ required: true, minLength: 0 }}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  placeholder="price"
                  className="mb-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              )}
            />
          </div>
          {/* === price === */}
          <div>
            <Controller
              name="authorName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="author"
                  className="mb-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full"
                />
              )}
            />
          </div>
          {/* === email === */}
          <div>
            <Controller
              name="authorName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="author"
                  className="mb-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full"
                />
              )}
            />
          </div>
          {/* === live demo === */}
          <div>
            <Controller
              name="authorName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="author"
                  className="mb-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full"
                />
              )}
            />
          </div>
          {/* === image === */}
          <div>
            <Controller
              name="authorName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="author"
                  className="mb-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full"
                />
              )}
            />
          </div>
          {/* === tag  === */}
          <div>
            <Controller
              name="tag"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="author"
                  className="mb-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full"
                />
              )}
            />
          </div>
          {/* === category === */}
          <div>
            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  type="text"
                  placeholder="author"
                  className="mb-3 block outline-none p-3 font-bold text-gray-600 bg-[#E8F0FE] rounded-md w-full"
                >
                  <option value={"opened"}>Opened</option>
                  <option value={"close"}>Close</option>
                </select>
              )}
            />
          </div>

          {/* === submit button === */}
          <button
            className="bg-teal-500 block px-5 py-2 w-44 mx-auto rounded-md border-none text-white mt-4"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form_component;

//

// "tag": "opened",
// "categories": [
//   "Web Development",
//   "Frontend",
//   "Coding"
// ],
