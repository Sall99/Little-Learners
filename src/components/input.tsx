import { FC } from "react";
import clsx from "clsx";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

export interface InputProps {
  classname?: string;
  name: string;
  type: "text" | "email" | "tel" | "number";
  variant?: "input" | "select" | "textarea";
  placeholder: string;
  options?: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  required?: boolean;
  errors: FieldErrors;
  autoFocus?: boolean;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
  id?: string;
}

export const Input: FC<InputProps> = ({
  classname,
  type,
  placeholder,
  required,
  name,
  register,
  errors,
  autoComplete,
  value,
  defaultValue,
  disabled,
  autoFocus,
  minLength,
  maxLength,
  min = 5,
  max = 20,
  step,
  pattern,
  id,
  variant = "input",
  options,
}) => {
  const hasError = errors && errors[name];
  const errorMessage =
    hasError && errors[name]
      ? typeof errors[name]?.message === "string"
        ? errors[name]?.message
        : "An error occurred"
      : undefined;
  const inputClass = clsx(
    "border-2 border-gray-700 mt-4 text-sm font-outfit w-full px-4 py-4 2xl:p-5 rounded-xl 2xl:mt-5 2xl:text-xl 2xl:text-lg",
    {
      "border-red-400 border-opacity-90": hasError,
      "bg-gray-100 cursor-not-allowed": disabled,
    },
    classname,
  );

  return (
    <div className="mb-4 font-outfit">
      <div className="inputField relative">
        <label htmlFor={id || name} className="text-sm 2xl:text-2xl">
          {placeholder}
        </label>
        {variant === "select" && options ? (
          <select
            id={id || name}
            {...register(name)}
            className={inputClass}
            defaultValue={defaultValue || ""}
            disabled={disabled}
            aria-invalid={hasError ? "true" : "false"}
            aria-describedby={hasError ? `${name}-error` : undefined}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : variant === "textarea" ? (
          <textarea
            id={id || name}
            {...register(name)}
            className={inputClass}
            placeholder={placeholder}
            defaultValue={defaultValue}
            required={required}
            disabled={disabled}
            autoFocus={autoFocus}
            minLength={minLength}
            maxLength={maxLength}
            aria-invalid={hasError ? "true" : "false"}
            aria-describedby={hasError ? `${name}-error` : undefined}
            cols={10}
            rows={10}
          />
        ) : (
          <input
            id={id || name}
            type={type}
            {...register(name)}
            className={clsx(inputClass)}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={value}
            defaultValue={defaultValue}
            required={required}
            disabled={disabled}
            autoFocus={autoFocus}
            minLength={minLength}
            maxLength={maxLength}
            min={min}
            max={max}
            step={step}
            pattern={pattern}
            aria-invalid={hasError ? "true" : "false"}
            aria-describedby={hasError ? `${name}-error` : undefined}
          />
        )}
      </div>
      {hasError && errorMessage && (
        <span id={`${name}-error`} className="text-xs text-red-400 opacity-90">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
