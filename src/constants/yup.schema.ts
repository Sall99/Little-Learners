import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  parentName: yup.string().required("Parent Name is required"),
  emailAddress: yup
    .string()
    .email("Invalid email format")
    .required("Email Address is required"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
  studentName: yup.string().required("Student Name is required"),
  studentAge: yup
    .number()
    .nullable()
    .min(0, "Age must be at least 0")
    .max(100, "Age must be at most 100")
    .typeError("Student Age must be a number"),
  programOfInterest: yup
    .string()
    .required("Please select a program of interest"),
  message: yup.string().optional(),
});
