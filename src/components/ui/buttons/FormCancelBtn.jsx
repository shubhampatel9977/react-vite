import React from "react";
import IsLoadingIcon from "../../../assets/SVGs/IsLoadingIcon";

function FormCancelBtn({ name, type = "button", isLoading, onClick, className }) {
  return (
    <button
      className={`border text-primary-500 bg-white hover:border-primary-700 hover:text-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
      type={type}
      onClick={onClick}
      disabled={isLoading}
    >
      { isLoading ? <IsLoadingIcon /> : name }
    </button>
  );
}

export default FormCancelBtn;
