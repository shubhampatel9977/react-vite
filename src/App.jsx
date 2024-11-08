import { Routes, Route } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import AuthRoutes from './routes/AuthRoutes';
import AdminRoutes from './routes/AdminRoutes';
import AuthProtRoute from './routes/protectedRoutes/AuthProtRoute';
import UserProtRoute from './routes/protectedRoutes/UserProtRoute';
import AdminProtRoute from './routes/protectedRoutes/AdminProtRoute';


function App() {

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthProtRoute><AuthRoutes /></AuthProtRoute>} />
      <Route path="/*" element={<UserProtRoute><MainRoutes /></UserProtRoute>} />
      <Route path="/admin/*" element={<AdminProtRoute><AdminRoutes /></AdminProtRoute>} />
    </Routes>
  )
}

export default App;
