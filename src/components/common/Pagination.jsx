import React from "react";
import LeftArowIcon from '../../assets/SVGs/LeftArowIcon';
import RightArowIcon from '../../assets/SVGs/RightArowIcon';

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    entriesPerPage,
    totalEntries,
    setPageLimit,
    paginationOptions = [5, 10, 20, 50]
}) => {

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    let renderPageNumbers = [];

    if (totalPages <= 2) {
        renderPageNumbers = pageNumbers;
    } else {
        if (currentPage === 1) {
            renderPageNumbers = [1, 2, "..."];
        } else if (currentPage === totalPages) {
            renderPageNumbers = ["...", totalPages - 1, totalPages];
        } else {
            renderPageNumbers = [currentPage - 1, currentPage, "..."];
        }
    }

    const startIndex = (currentPage - 1) * entriesPerPage + 1;
    let endIndex = currentPage * entriesPerPage;
    if (endIndex > totalEntries) {
        endIndex = totalEntries;
    }

    const handleEllipsisClick = (index) => {
        if (index === 0) {
            onPageChange(1);
        } else {
            onPageChange(totalPages);
        }
    };

    return (
        <div className="flex justify-between items-center border-t-2 p-2 border-primary-500">
            <p>
                Showing {startIndex} - {endIndex} of {totalEntries}
            </p>
            <div className="flex justify-between items-center gap-10">
                <div className="flex justify-between items-center gap-2">
                    <p>Page:</p>
                    <select
                        onChange={(e) => setPageLimit(e.target.value)}
                        defaultValue={paginationOptions[0]}
                    >
                        {paginationOptions && paginationOptions?.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-5">
                    {currentPage !== 1 && (
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                        >
                            <LeftArowIcon width={20} height={20} />
                        </button>
                    )}
                    <div className="">
                        {renderPageNumbers.map((number, index) => (
                            <button
                                key={index}
                                className={
                                    currentPage === number
                                        ? "bg-primary-500 rounded text-white py-1 px-3  mx-2"
                                        : "px-2 mx-2"
                                }
                                onClick={() =>
                                    number === "..."
                                        ? handleEllipsisClick(index)
                                        : onPageChange(number)
                                }
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                    {currentPage !== totalPages && totalPages !== 0 && (
                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                        >
                            <RightArowIcon width={20} height={20} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pagination;