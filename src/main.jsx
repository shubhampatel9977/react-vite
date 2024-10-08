import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from "react-toastify";
import App from './App.jsx';
import { store, persistor } from './store/store.js'
import './index.css';
import "react-toastify/dist/ReactToastify.css";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
            theme="light"
          />
        </PersistGate>
      </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
