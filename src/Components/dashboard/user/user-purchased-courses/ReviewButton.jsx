"use client";
import { useState } from "react";
import style from "./style.module.css";
import Modal from "./Modal_template";
import Modal_template from "./Modal_template";

const ReviewButton = ({ productId }) => {
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);
  const reviewModalHandler = () => setOpen(true);

  return (
    <div>
      <button
        onClick={() => reviewModalHandler()}
        className={`${style.reviews}`}
      >
        Give review
      </button>
      <Modal_template
        onCloseModal={onCloseModal}
        isModal={open}
        productId={productId}
        setOpen={setOpen}
      />
    </div>
  );
};

export default ReviewButton;
