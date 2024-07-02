import React from "react";

const Modal = ({
  modalTitle,
  modalStatus,
  setModalStatus,
  handleCourseCurriculumDownload,
}) => {
  return (
    <dialog
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
      open={modalStatus}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-fit flex flex-col items-center justify-center gap-4 py-6 px-5 bg-gray-300 rounded-lg">
          <p className="text-center font-semibold text-xl">{modalTitle}</p>
          <form
            method="dialog"
            className="flex items-center justify-center gap-3 w-full"
          >
            <button
              onClick={() => {
                setModalStatus(false);
                handleCourseCurriculumDownload();
              }}
              className="w-full p-2 font-semibold bg-blue-400 uppercase rounded-lg"
            >
              yes
            </button>
            <button
              onClick={() => setModalStatus(false)}
              className="w-full p-2 font-semibold bg-red-400 uppercase rounded-lg"
            >
              no
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
