import React, { useState } from "react";
import { faqItems } from "../../data/staticData";

function AccordionFAQs() {

    const [openId, setOpenId] = useState(null);

    const handleClick = (id) => {
        setOpenId(openId === id ? null : id);
    };
    return (
        <>
            <div className="w-full xl:w-[80%] mx-auto shadow-xl rounded-md mt-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl p-4 font-bold mb-6 text-center md:text-left">
                    Frequently Asked Questions
                </h1>
                <div className="list-decimal">
                    {faqItems &&
                        faqItems.map((item) => (
                            <FAQsItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                content={item.content}
                                isOpen={openId === item.id}
                                onClick={handleClick}
                            />
                        ))}
                </div>
            </div>
        </>
    )
};

const FAQsItem = ({ id, title, content, isOpen, onClick }) => (
    <div
        className={`accordion py-5 border-b border-dotted transition-all duration-500 ${isOpen ? "bg-indigo-50" : "hover:bg-gray"
            }`}
        id={`heading-${id}`}
    >
        <button
            className={`accordion-toggle group inline-flex items-center justify-between px-8 leading-8 text-gray-900 w-full transition duration-500 text-left ${isOpen ? "text-indigo-600 font-medium" : "hover:text-indigo-600"
                }`}
            aria-controls={`collapse-${id}`}
            aria-expanded={isOpen}
            onClick={() => onClick(id)} // Pass id to handleClick
        >
            <h5 className="text-base md:text-lg lg:text-[18px]">
                {id}.  {title}
            </h5>

            <svg
                className={`text-black transition duration-500 ${isOpen ? "text-indigo-600 rotate-180" : "group-hover:text-indigo-600"
                    }`}
                width="13"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        </button>

        <div
            id={`collapse-${id}`}
            className="accordion-content pl-5 w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out"
            aria-labelledby={`heading-${id}`}
            style={{ maxHeight: isOpen ? "200px" : "0" }}
        >
            <p className="w-[80%] pl-8 md:pl-8 mt-2 text-gray leading-6 text-sm md:text-base lg:text-sm">
                {content}
            </p>
        </div>
    </div>
);

export default AccordionFAQs;