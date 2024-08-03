import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardHome from '../pages/Admin/DashboardHome';
import Products from '../pages/Admin/E-Commerce/Product';
import Billing from '../pages/Admin/E-Commerce/Billing';
import Invoice from '../pages/Admin/E-Commerce/Invoice';
import Settings from '../pages/Admin/Settings';

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<DashboardHome />} />
    <Route path="/ecommerce/products" element={<Products />} />
    <Route path="/ecommerce/billing" element={<Billing />} />
    <Route path="/ecommerce/invoice" element={<Invoice />} />
    <Route path="settings" element={<Settings />} />
    <Route path="*" element={<Navigate to="/admin" replace />} />
  </Routes>
);

export default AdminRoutes;