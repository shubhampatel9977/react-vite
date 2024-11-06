import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserInfo } from './store/slice/userSlice';
import MainRoutes from './routes/MainRoutes';
import AuthRoutes from './routes/AuthRoutes';
import AdminRoutes from './routes/AdminRoutes';
import AuthProtRoute from './routes/protectedRoutes/AuthProtRoute';
import UserProtRoute from './routes/protectedRoutes/UserProtRoute';
import AdminProtRoute from './routes/protectedRoutes/AdminProtRoute';
import useCheckAuth from "./hooks/auth/useCheckAuth";


function App() {

  const dispatch = useDispatch();
  const { data: authData } = useCheckAuth();

  useEffect(() => {
    if(authData?.success){
      dispatch(setUserInfo(authData.data));
    }

  },[authData])

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthProtRoute><AuthRoutes /></AuthProtRoute>} />
      <Route path="/*" element={<UserProtRoute><MainRoutes /></UserProtRoute>} />
      <Route path="/admin/*" element={<AdminProtRoute><AdminRoutes /></AdminProtRoute>} />
    </Routes>
  )
}

export default App;
