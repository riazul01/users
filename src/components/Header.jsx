import React from 'react';

// icons
import { HiPlus } from "react-icons/hi";
import { BiSearchAlt } from 'react-icons/bi';

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="px-[0.8rem] py-[0.55rem] flex items-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg cursor-pointer">
                <span className="text-[1.1rem] font-[500] me-[0.3rem]">Add User</span>
                <HiPlus className="text-[1.2rem]"/>
            </div>

            <div className="flex items-center gap-[1rem]">
                <div className="px-[0.8rem] py-[0.55rem] flex items-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg cursor-pointer">
                    <span className="text-[1.1rem] font-[500] me-[0.3rem]">Users: 100 / 100</span>
                </div>
                
                <div className="flex items-center justify-center rounded-lg overflow-hidden">          
                    <input name="searchText" className="pl-[1rem] text-[1.1rem] text-[#fff] h-[44px] w-[360px] bg-[#000] border-[2px] border-emerald-500 outline-none rounded-l-lg" type="text" placeholder="Search users..."/>
                    
                    <div className="text-[1.1rem] text-[#fff] flex items-center justify-center h-[44px] w-[52px] bg-gradient-to-r from-emerald-500 to-indigo-500 cursor-pointer">
                        <BiSearchAlt className="text-[1.6rem]"/>
                    </div>
                </div>

                <div className="flex items-center outline-none rounded-lg overflow-hidden">
                    <p className="px-[0.8rem] flex items-center justify-center h-[44px] text-[1.1rem] font-[500] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">Sort by</p>
                    <select name="searchCategory" className="px-[0.6rem] h-[44px] text-[#fff] text-[1.1rem] bg-[#000] border-[2px] border-emerald-500 rounded-r-lg outline-none">
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