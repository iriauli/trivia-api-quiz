import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <p class="text-xl font-normal">
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <button
          className="btn border border-gray-200 w-2/4 px-12 py-2 rounded-lg border border-green-500 text-md text-gray-50 mt-7 bg-gradient-to-tl from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 shadow-sm"
          onClick={closeModal}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
