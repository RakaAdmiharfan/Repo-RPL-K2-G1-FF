// InputField.js

import React from "react";
import { Field, ErrorMessage } from "Formik";

interface InputBoxProps {
  name: string;
  label: string;
  placeholder?: string;
  value?: any;
  onChange?: any;
  as?: any;
}

const InputBox: React.FC<InputBoxProps> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  as,
}) => {
  return (
    <div className="relative mb-4 h-full">
      <Field
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        as={as}
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
