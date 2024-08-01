import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardHome from '../pages/Admin/DashboardHome';
import Settings from '../pages/Admin/Settings';

const adminRoutes = () => (
  <Routes>
    <Route path="/" element={<DashboardHome />} />
    <Route path="settings" element={<Settings />} />
    <Route path="*" element={<Navigate to="/admin" replace />} />
  </Routes>
);

export default adminRoutes;