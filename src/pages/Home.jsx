import React, { useContext, useEffect, useState } from 'react';
import AppLayout from '../layouts/AppLayout';
import Header from '../components/Header';
import { UsersContext } from '../context/UsersContextProvider';
import UserCard from '../components/UserCard';
import Pagination from '../components/Pagination';

const Home = () => {
    const {data, loader} = useContext(UsersContext);
    const [searchText, setSearchText] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        // search
        if (data) {
            const filteredData = data.users.filter((user) => {
                let mainTxt = ''.concat(user.firstName, user.lastName).replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
                let srchTxt = searchText.replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
                if (mainTxt.includes(srchTxt)) return user;
                return null;
            });

            setFilteredUsers(filteredData);
        }
    }, [data, searchText]);

    return (
        <AppLayout>
            <Header searchText={searchText} setSearchText={setSearchText}/>
            {data && <div className="py-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.2rem] place-items-center">
                {
                    filteredUsers.map((user) => {
                        return <UserCard user={user} key={user.id}/>
                    })
                }
            </div>}
            {data && <Pagination/>}
        </AppLayout>
    );
}

export default Home;