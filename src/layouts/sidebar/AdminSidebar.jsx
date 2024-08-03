import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ConfirmModal from '../../components/modals/ConfirmModal';
import { clearAdminUserInfo } from '../../store/slice/adminUserSlice';
import DashboardIcon from '../../assets/SVGs/DashboardIcon';
import EcommerceIcon from "../../assets/SVGs/EcommerceIcon";
import RightArowIcon from "../../assets/SVGs/RightArowIcon";
import DownArrowIcon from "../../assets/SVGs/DownArrowIcon";
import SettingIcon from "../../assets/SVGs/SettingIcon";
import SignOutIcon from "../../assets/SVGs/SignOutIcon";


function AdminSidebar() {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);
    const [eCommerceOptions, setECommerceOptions] = useState(false);

    const ecommerceOptions= ['/admin/ecommerce/products', '/admin/ecommerce/billing', '/admin/ecommerce/invoice'];

    useEffect(() => {
        if(ecommerceOptions.includes(location.pathname)) {
            setECommerceOptions(true);
        }
    },[])

    function handleEcommerceClick() {
        setECommerceOptions((pre) => !pre);
    }

    function signOutHandler() {
        setModalShow(true);
    }

    function closeModalHandler() {
        setModalShow(false);
    }

    function confirmSignOut() {
        localStorage.removeItem("adminAccessToken");
        localStorage.removeItem("adminRefreshToken");
        dispatch(clearAdminUserInfo());
        navigate("/auth/adminlogin");
    }

    return (
        <>
            <aside className=" bg-primary-400 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="flex justify-center py-2 mt-5">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="size-20" alt="Flowbite Logo" />
                </div>
                <div className="px-3 py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/admin" className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ${location.pathname === '/admin' ? 'bg-gray-100' : ''}`}>
                                <DashboardIcon />
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleEcommerceClick} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100">
                                <EcommerceIcon />
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                                {eCommerceOptions ? (<DownArrowIcon fill={'black'} height={18} width={18} />) : (<RightArowIcon height={18} width={18}/>)}
                            </button>
                            <ul className={`ml-5 py-2 space-y-2 ${eCommerceOptions ? '' : 'hidden'}`}>
                                <li>
                                    <Link to="/admin/ecommerce/products" className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ${location.pathname === '/admin/ecommerce/products' ? 'bg-gray-100' : ''}`}>Products</Link>
                                </li>
                                <li>
                                    <Link to="/admin/ecommerce/billing" className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ${location.pathname === '/admin/ecommerce/billing' ? 'bg-gray-100' : ''}`}>Billing</Link>
                                </li>
                                <li>
                                    <Link to="/admin/ecommerce/invoice" className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ${location.pathname === '/admin/ecommerce/invoice' ? 'bg-gray-100' : ''}`}>Invoice</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/admin/settings" className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${location.pathname === '/admin/settings' ? 'bg-gray-100' : ''}`}>
                                <SettingIcon />
                                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">Pro</span>
                            </Link>
                        </li>
                        <li>
                            <p onClick={signOutHandler} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <SignOutIcon />
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </aside>
            <ConfirmModal
                heading="Sign Out"
                subHeading="Are you sure you want to Admin Sign Out?"
                btnName="Sign Out"
                isOpen={modalShow}
                onClose={closeModalHandler}
                onConfirm={confirmSignOut}
            />
        </>
    )
};

export default AdminSidebar;