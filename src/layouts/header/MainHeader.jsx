import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ImageView from '../../components/ui/ImageView';
import { clearUserInfo } from '../../store/slice/userSlice';
import DownArrowIcon from "../../assets/SVGs/DownArrowIcon";
import defaultStudentIMG from '../../assets/images/default_student_img.png';
import useLogOut from '../../hooks/auth/useLogOut';

function MainHeader() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { mutate: userLogOut } = useLogOut();
    const [isOpen, setIsOpen] = useState(false);
    const loginInfo = useSelector((state) => state?.loginUserData?.loginInfo);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const logOutHandler = async () => {
        try {
            await userLogOut({
                onSuccess: (data) => {
                    if (data?.success === true) {
                        dispatch(clearUserInfo());
                        navigate('/auth/login');
                    } else {
                        toast.error(data?.message);
                    }
                },
                onError: (err) => {
                    toast.error(err?.message);
                    console.log("onError userLogOut:", err);
                },
            });
        } catch (err) {
            console.error("Error user logout:", err);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <nav className="bg-primary-400 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">Flowbite</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <div>
                            {loginInfo?.userLogin ? (
                                <div className="hidden md:block relative" ref={dropdownRef}>
                                    <button
                                        className="flex items-center text-sm rounded-full focus:outline-none"
                                        onClick={toggleDropdown}
                                    >
                                        <ImageView
                                            src={defaultStudentIMG}
                                            alt="user profile"
                                            className="rounded-full"
                                            height={40}
                                            width={40}
                                        />
                                        <span className="hidden md:inline-block ml-2 text-white">
                                            Hi, Guest
                                        </span>
                                        <div className="ml-2">
                                            <DownArrowIcon height={18} width={18} />
                                        </div>
                                    </button>
                                    {isOpen && (
                                        <div className="absolute right-0 top-8 mt-2 w-48 bg-primary-500 shadow-lg rounded-lg overflow-hidden z-10">
                                            <div onClick={logOutHandler}>
                                                <Link className="block px-4 py-3 text-sm text-white hover:bg-primary-700">
                                                    <span className="font-bold flex items-start mb-[-3px]">
                                                        <span className=""> Logout</span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Link to="/auth/login" className="text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Log in</Link>
                                    <Link to="/auth/register" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Register</Link>
                                </>
                            )}
                        </div>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/" className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 ${location.pathname === '/' ? 'text-primary-700' : 'text-black lg:hover:text-primary-700'}`}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 ${location.pathname === '/about' ? 'text-primary-700' : 'text-black lg:hover:text-primary-700'}`}>About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 ${location.pathname === '/contact' ? 'text-primary-700' : 'text-black lg:hover:text-primary-700'}`}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default MainHeader;
