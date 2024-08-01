import React from "react";
import IsLoadingIcon from "../../../assets/SVGs/IsLoadingIcon";

function AuthButton({ name, type = "button", isLoading, onClick, className }) {
  return (
    <button
      className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
      type={type}
      onClick={onClick}
      disabled={isLoading}
    >
      { isLoading ? <IsLoadingIcon /> : name }
    </button>
  );
}

export default AuthButton;