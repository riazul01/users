import React, { useContext, useEffect } from 'react';

// context
import { UsersContext } from '../context/UsersContextProvider';

// icons
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Pagination = () => {
    const { data, setSkip, limit, setLimit, currentPage, setCurrentPage } = useContext(UsersContext);
    const totalPages = Math.ceil(data.total / limit);

    useEffect(() => {
        setSkip(limit * (currentPage - 1));
    }, [currentPage]);

    const nextPage = () => {
        if (currentPage === totalPages) {
            return null;
        } else {
            setCurrentPage((prev) => prev + 1);
        }
    }

    const prevPage = () => {
        if (currentPage === 1) {
            return null;
        } else {
            setCurrentPage((prev) => prev - 1);
        }
    }

    const multiNextPage = () => {
        if (currentPage + 3 >= totalPages) {
            setCurrentPage(totalPages - 1);
        } else {
            setCurrentPage(currentPage + 3);
        }
    }

    const multiPrevPage = () => {
        if (currentPage - 3 <= 1) {
            setCurrentPage(1);
        } else {
            setCurrentPage(currentPage - 2);
        }
    }

    const handleLimitChange = (e) => {
        setLimit(e.target.value);
    }

    return (
        <div className="flex items-center justify-between w-full h-auto">
            <ul className="flex items-center justify-start gap-[1rem]">
                <button className="flex items-center justify-center h-[2.6rem] w-[3rem] bg-[#222] rounded-lg" onClick={prevPage}><MdKeyboardDoubleArrowLeft className="text-[1.3rem]"/></button>
                {(currentPage > 2) && <button className="text-[1.1rem] h-[2.6rem] w-[3rem] bg-[#222] rounded-lg" onClick={() => setCurrentPage(1)}>1</button>}
                {(currentPage > 3) && <button className="text-[1.1rem] h-[2.6rem] w-[3rem] bg-[#222] rounded-lg" onClick={multiPrevPage}>...</button>}
                {(currentPage > 1) && <button className="text-[1.1rem] h-[2.6rem] w-[3rem] bg-[#222] rounded-lg" onClick={prevPage}>{currentPage - 1}</button>}
                <button className="text-[1.1rem] h-[2.6rem] w-[3rem] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg" disabled>{currentPage}</button>
                {(currentPage < totalPages) && <button className="text-[1.1rem] h-[2.6rem] w-[3rem] bg-[#222] rounded-lg" onClick={nextPage}>{currentPage + 1}</button>}
                {(currentPage + 2 < totalPages) && <button className="text-[1.1rem] h-[2.6rem] w-[3rem] bg-[#222] rounded-lg" onClick={multiNextPage}>...</button>}
                {(currentPage + 1 < totalPages) && <button className="text-[1.1rem] h-[2.6rem] w-[3rem] bg-[#222] rounded-lg" onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>}                
                <button className="flex items-center justify-center h-[2.6rem] w-[3rem] bg-[#222] rounded-lg" onClick={nextPage}><MdKeyboardDoubleArrowRight className="text-[1.3rem]"/></button>
            </ul>

            <div className="flex items-center outline-none rounded-lg overflow-hidden">
                <p className="px-[0.8rem] flex items-center justify-center h-[44px] text-[1.1rem] font-[500] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">Limit</p>
                <select value={limit} onChange={handleLimitChange} name="searchCategory" className="px-[0.6rem] h-[44px] text-[#fff] text-[1.1rem] bg-[#000] border-[2px] border-emerald-500 rounded-r-lg outline-none">
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                </select>
            </div>
        </div>
    );
}

export default Pagination;