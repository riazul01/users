import React from 'react';
import UserCard from './UserCard';

const Users = ({ users }) => {
    return (
        <div className="py-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.2rem] place-items-center">
            {users.map((user) => {
                return <UserCard user={user} key={user.id}/>
            })}
        </div>
    );
}

export default Users;