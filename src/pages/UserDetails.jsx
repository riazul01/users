import React from 'react';
import useFetch from '../hooks/useFetch';
import AppLayout from '../layouts/AppLayout';
import { Link, useLocation } from 'react-router-dom';

// icons
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

const UserDetails = () => {
    const location = useLocation();
    const userId = location.pathname.split('/').pop();
    const [user, loader] = useFetch(`https://dummyjson.com/users/${userId}`);

    return (
        <AppLayout>
            {/* header */}
            <div className="flex items-center justify-between">
                <h1 className="text-[#fff] text-[2.2rem] uppercase font-[700] bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 inline-block text-transparent bg-clip-text">User Details.</h1>
                
                {/* navigate users */}
                <div className="flex items-center justify-end gap-[1rem]">
                    <Link to={`/users/${userId === '1' ? '100' : (parseInt(userId) + 99) % 100}`} className="px-[0.8rem] py-[0.55rem] flex items-center gap-[0.2rem] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg cursor-pointer">
                        <IoArrowBack className="text-[1.2rem]"/>
                        <span className="text-[1.1rem] font-[500]">Prev</span>
                    </Link>
                    <Link to={`/users/${userId === '99' ? '100' : (parseInt(userId) + 1) % 100}`} className="px-[0.8rem] py-[0.55rem] flex items-center gap-[0.2rem] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg cursor-pointer">
                        <span className="text-[1.1rem] font-[500]">Next</span>
                        <IoArrowForward className="text-[1.2rem]"/>
                    </Link>
                </div>
            </div>

            {/* fallbacks */}
            {loader && <p className="py-[2rem] text-[1.2rem]">Please wait...</p>}
            {!user && !loader && <p className="py-[2rem] text-[1.2rem]">Something Wrong!</p>}

            {/* details */}
            {user && <div className="py-[2rem] flex justify-start gap-[3rem] h-[calc(100vh-200px)]">
                <div className="w-[320px] h-[320px]">
                    <img src={user.image} className="w-full h-full object-cover" alt={user.firstName} />
                    <p className="py-[0.8rem] text-[#ccc] text-[1.2rem] text-center font-[500]">@{user.maidenName}</p>
                </div>

                <div className="">
                    <div className="flex items-center justify-start gap-[0.8rem]">
                        <p className="text-[1.4rem] font-[700]">Name</p>
                        <span className="h-[0.9rem] w-[0.9rem] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></span>
                        <p className="text-[#ccc] text-[1.4rem] font-[500]">{user.firstName} {user.lastName}</p>
                    </div>

                    <div className="flex items-center justify-start gap-[0.8rem]">
                        <p className="text-[1.4rem] font-[700]">Email</p>
                        <span className="h-[0.9rem] w-[0.9rem] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></span>
                        <p className="text-[#ccc] text-[1.4rem] font-[500]">{user.email}</p>
                    </div>

                    <div className="flex items-center justify-start gap-[0.8rem]">
                        <p className="text-[1.4rem] font-[700]">Phone</p>
                        <span className="h-[0.9rem] w-[0.9rem] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></span>
                        <p className="text-[#ccc] text-[1.4rem] font-[500]">{user.phone}</p>
                    </div>

                    <div className="flex items-center justify-start gap-[0.8rem]">
                        <p className="text-[1.4rem] font-[700]">Age</p>
                        <span className="h-[0.9rem] w-[0.9rem] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></span>
                        <p className="text-[#ccc] text-[1.4rem] font-[500]">{user.age} years</p>
                    </div>

                    <div className="flex items-center justify-start gap-[0.8rem]">
                        <p className="text-[1.4rem] font-[700]">Gender</p>
                        <span className="h-[0.9rem] w-[0.9rem] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></span>
                        <p className="text-[#ccc] text-[1.4rem] font-[500]">{user.gender}</p>
                    </div>

                    <div className="flex items-center justify-start gap-[0.8rem]">
                        <p className="text-[1.4rem] font-[700]">Birth date</p>
                        <span className="h-[0.9rem] w-[0.9rem] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></span>
                        <p className="text-[#ccc] text-[1.4rem] font-[500]">{user.birthDate}</p>
                    </div>

                    <div className="flex items-center justify-start gap-[0.8rem]">
                        <p className="text-[1.4rem] font-[700]">University</p>
                        <span className="h-[0.9rem] w-[0.9rem] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></span>
                        <p className="text-[#ccc] text-[1.4rem] font-[500]">{user.university}</p>
                    </div>

                    <div className="flex items-center justify-start gap-[0.8rem]">
                        <p className="text-[1.4rem] font-[700]">Address</p>
                        <span className="h-[0.9rem] w-[0.9rem] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></span>
                        <p className="text-[#ccc] text-[1.4rem] font-[500]">{user.address.address}, {user.address.state}-{user.address.postalCode}, {user.address.city}</p>
                    </div>

                    <div className="flex items-center justify-start gap-[0.8rem]">
                        <p className="text-[1.4rem] font-[700]">Company Name</p>
                        <span className="h-[0.9rem] w-[0.9rem] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></span>
                        <p className="text-[#ccc] text-[1.4rem] font-[500]">{user.company.name}</p>
                    </div>

                    <div className="flex items-center justify-start gap-[0.8rem]">
                        <p className="text-[1.4rem] font-[700]">Domain</p>
                        <span className="h-[0.9rem] w-[0.9rem] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></span>
                        <a href={'#null'} className="flex items-center">
                            <span className="text-[#ccc] text-[1.4rem] font-[500]">{user.domain}</span> 
                            <HiOutlineExternalLink className="text-[#ccc] text-[1.4rem] font-[500]"/>
                        </a>
                    </div>
                </div>
            </div>}

            <Link to={"/"} className="text-[#ccc] text-[1.3rem] font-[500] underline">Users</Link>
        </AppLayout>
    );
}

export default UserDetails;