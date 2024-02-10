import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="h-auto w-full bg-[#222] rounded-lg overflow-hidden">
            <div className="p-[0.6rem] pb-0 w-full h-[320px]">
                <img src={user.image} alt={user.firstName} className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full h-[0.35rem] bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></div>
            
            <div className="py-[1rem] flex flex-col items-center w-full h-[260px]">
                <p className="text-[1.5rem] text-center font-[700] bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 inline-block text-transparent bg-clip-text">{user.firstName} {user.lastName}</p>
                <p className="text-[#ddd] text-[1.2rem] text-center font-[500]">{user.email}</p>
                <p className="text-[#ddd] text-[1.2rem] text-center font-[500]">🏬{user.company.name}</p>
                <div className="mt-[1rem]">
                    <p className="text-[1.2rem] text-center font-[600] underline">Address</p>
                    <p className="text-[#ddd] text-[1.2rem] text-center font-[500]">{user.address.address},</p>
                    <p className="text-[#ddd] text-[1.2rem] text-center font-[500]">{user.address.state}-{user.address.postalCode}, {user.address.city}</p>
                </div>
            </div>
        </div>
    );
}

export default UserCard;