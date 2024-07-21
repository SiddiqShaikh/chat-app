import React from "react";
import { Controller } from "react-hook-form";
import { Input as BaseInput  } from "./ui/input";

const FormInput = ({ control, name, rules, type, placeholder }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({
      field: { onChange, onBlur, value, ref },
      fieldState: { error },
    }) => (
      <GenericInput
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        ref={ref}
        type={type}
        placeholder={placeholder}
        error={error}
        name={name}
      />
    )}
  />
);

export default FormInput;



const GenericInput = ({ onChange, onBlur, value, ref, type, placeholder, error, name, className }) => (
  <div>
    <BaseInput
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      ref={ref}
      type={type}
      placeholder={placeholder}
      className={error ? `ring-2 ring-red-500 ${className}` : className}
      aria-invalid={!!error}
      aria-describedby={`${name}-error`}
    />
    {error && <p id={`${name}-error`} className="text-red-500 text-xs mt-2">{error.message}</p>}
  </div>
);


