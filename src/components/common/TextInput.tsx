import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type TextInputProps = {
  placeholder?: string;
  type?: string;
  register: UseFormRegisterReturn;
  defaultValue?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  placeholder = "",
  type = "text",
  register,
  defaultValue = "",
}) => {
  return (
    <input
      {...register}
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="border p-3 rounded text-sm bg-white w-full"
    />
  );
};

export default TextInput;
