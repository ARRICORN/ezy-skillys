"use client";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { ErrorMessage } from "@hookform/error-message";
import buttons from "./style.module.css";
import Cookies from "js-cookie";
import POST_REQUEST_BY_DATA from "@/utility/request_data/post_request";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews/add-review`;

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

// === modal component template for review ===
const Modal_template = ({ onCloseModal, isModal, setOpen, productId }) => {
  const [rating, setRating] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const token = session?.data?.user?.token;

  // === hook form function ===
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // === Asynchronous function to handle form submission for review ===
  const onSubmit = async (data) => {
    // Create an object to hold the rating details
    setIsLoading(true);
    const rateObj = {
      courseId: productId,
      rating: rating,
      review: data.review,
    };

    // Make an asynchronous POST request to submit the rating details
    const response = await POST_REQUEST_BY_DATA(url, rateObj, token);

    // Check if the response indicates failure
    // Exit the function early since the submission failed
    if (response.success !== true) {
      setIsLoading(false);
      toast.error(response.message);
      return;
    }

    // Set loading state to false to indicate the submission process has ended
    setIsLoading(false);
    toast.success(response.message);
    setOpen(false);
    reset();
  };

  // === rating handler ===
  const ratingChanged = (rate) => setRating(rate);

  return (
    <div style={styles}>
      <Modal open={isModal} onClose={onCloseModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="review"
            control={control}
            rules={{
              required: "Review field is empty",
            }}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="Write a good comment."
                rows="4"
                cols="50"
                maxLength="500"
                className="block mt-8 p-3 border-teal-500 border-[2px] outline-none rounded-lg"
              ></textarea>
            )}
          />
          <div className="text-red-600">
            <ErrorMessage
              errors={errors}
              name="review"
              render={({ message }) => <p>{message}</p>}
            />
          </div>

          {/* === rating === */}
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={30}
            value={1}
            activeColor="#ffd700"
          />
          <button
            className={`${buttons.reviews} text-center mt-1 mx-auto block`}
            type="submit"
          >
            {isLoading ? "Loading..." : "Add review"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Modal_template;
