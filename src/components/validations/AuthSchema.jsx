import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const LoginSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const AdminLoginSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const OtpSchema = yup.object().shape({
    otp: yup.string().matches(/^\d{6}$/, 'OTP must be a 6-digit number').required('OTP is required'),
});

export const ForgotPasswordSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
});

export const SetPasswordSchema = yup.object().shape({
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});
