import React, { useState } from "react";


function Tabs({ tabs }) {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="flex border-b border-gray-200 dark:border-gray-700 mt-4">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 text-sm font-medium focus:outline-none ${activeTab === index
                            ? "text-primary-dark border-b-2  border-primary-dark dark:text-blue-500 dark:border-blue-500"
                            : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`${activeTab === index ? "block" : "hidden"}`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Tabs;