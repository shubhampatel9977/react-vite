import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import MainRoutes from './routes/mainRoutes';
import AuthRoutes from './routes/authRoutes';
import AdminRoutes from './routes/adminRoutes';

function App() {

  return (
    <Routes>
      <Route path="/*" element={<MainLayout><MainRoutes /></MainLayout>} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/admin/*" element={<AdminLayout><AdminRoutes /></AdminLayout>} />
    </Routes>
  )
}

export default App;
