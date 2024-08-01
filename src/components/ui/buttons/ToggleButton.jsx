import React, { useEffect, useState } from 'react'

function ToggleButton({ defaultValue, onChangeHandler, id }) {

    const [isChecked, setIsChecked] = useState(defaultValue);

    useEffect(() => {
        setIsChecked(defaultValue);
    }, [defaultValue]);

    function handleChange(status) {
        setIsChecked(status);
        onChangeHandler(status, id)
    }

    return (
        <>
            <label className="inline-flex items-center me-5 cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={(e) => handleChange(e.target.checked)}
                />
                <div className="relative w-11 h-6 bg-grey-darker rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-dark peer-checked:bg-primary-dark"></div>
            </label>
        </>
    )
};

export default React.memo(ToggleButton);