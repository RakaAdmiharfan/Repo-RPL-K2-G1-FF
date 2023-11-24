// InputField.js

import React from "react";
import { Field, ErrorMessage } from "formik";

interface InputBoxProps {
  name: string;
  label: string;
  placeholder?: string;
  onChange?: any;
  as?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  name,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div className="relative mb-4 h-full">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-[#fff] flex w-full h-full focus:outline-none text-black text-[10px] lg:text-[20px] rounded-[5px] px-[10px] py-[6px] lg:rounded-[10px] lg:py-[10px] lg:px-[20px]"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default InputBox;
