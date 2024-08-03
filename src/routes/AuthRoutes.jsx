import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/Login';
import AdminLogin from '../pages/auth/AdminLogin';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';

const AuthRoutes = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route path="adminLogin" element={<AdminLogin />} />
    <Route path="register" element={<Register />} />
    <Route path="forgotPassword" element={<ForgotPassword />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AuthRoutes;