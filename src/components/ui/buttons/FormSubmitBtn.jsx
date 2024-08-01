import React from "react";
import IsLoadingIcon from "../../../assets/SVGs/IsLoadingIcon";

function FormSubmitBtn({ name, type = "button", isLoading, onClick, className }) {
  return (
    <button
      className={`text-white bg-primary-500 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
      type={type}
      onClick={onClick}
      disabled={isLoading}
    >
      { isLoading ? <IsLoadingIcon /> : name }
    </button>
  );
}

export default FormSubmitBtn;
