import React from 'react';

// icons
import { HiPlus } from "react-icons/hi";
import { BiSearchAlt } from 'react-icons/bi';

const Header = ({searchText, setSearchText, sortType, setSortType, setShowForm, users}) => {
    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    }

    const handleSortType = (e) => {
        setSortType(e.target.value);
    }

    return (
        <div className="flex flex-col xl:flex-row items-center justify-between w-full">
            {/* title */}
            <h1 className="text-[#fff] text-[2.2rem] uppercase font-[700] bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 inline-block text-transparent bg-clip-text">Users.</h1>

            <div className="mt-[1rem] xl:mt-0 flex flex-wrap items-center justify-center xl:justify-end gap-[1rem] w-full">
                {/* users count */}
                <div className="px-[0.8rem] py-[0.55rem] flex items-center gap-[0.2rem] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg cursor-pointer">
                    <span className="text-[1.1rem] font-[500]">Users:</span>
                    <span className="text-[1.1rem] font-[500] flex items-center justify-center w-[1.4rem]">{`${users.length}`.padStart(2, '0')}</span>
                    <span className="text-[1.1rem] font-[500]">/ 100</span>
                </div>

                {/* add user */}
                <div onClick={() => setShowForm(true)} className="px-[0.8rem] py-[0.55rem] flex items-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg cursor-pointer">
                    <span className="text-[1.1rem] font-[500] me-[0.3rem]">Add User</span>
                    <HiPlus className="text-[1.2rem]"/>
                </div>
                
                {/* search users */}
                <div className="flex items-center justify-center w-full max-w-[400px] rounded-lg overflow-hidden">          
                    <input value={searchText} onChange={handleSearchText} name="searchText" className="pl-[1rem] text-[1.1rem] text-[#fff] h-[44px] w-[84%] bg-[#000] border-[2px] border-emerald-500 outline-none rounded-l-lg" type="text" placeholder="Search users..."/>
                    
                    <div className="text-[1.1rem] text-[#fff] flex items-center justify-center h-[44px] w-[16%] bg-gradient-to-r from-emerald-500 to-indigo-500 cursor-pointer rounded-r-lg">
                        <BiSearchAlt className="text-[1.6rem]"/>
                    </div>
                </div>

                {/* sort users */}
                <div className="flex items-center outline-none rounded-lg overflow-hidden">
                    <p className="px-[0.8rem] flex items-center justify-center h-[44px] text-[1.1rem] font-[500] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">Sort by</p>
                    <select value={sortType} onChange={handleSortType} name="sortType" className="px-[0.6rem] h-[44px] text-[#fff] text-[1.1rem] bg-[#000] border-[2px] border-emerald-500 rounded-r-lg outline-none">
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                        <option value="company">Company Name</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Header;