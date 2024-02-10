import React, { useContext, useEffect, useState } from 'react';
import AppLayout from '../layouts/AppLayout';
import Header from '../components/Header';
import { UsersContext } from '../context/UsersContextProvider';
import UserCard from '../components/UserCard';
import Pagination from '../components/Pagination';

const Home = () => {
    const {data, loader} = useContext(UsersContext);
    const [sortType, setSortType] = useState('name');
    const [searchText, setSearchText] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        if (data) {
            // search
            const filteredData = data.users.filter((user) => {
                let mainTxt = ''.concat(user.firstName, user.lastName).replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
                let srchTxt = searchText.replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
                if (mainTxt.includes(srchTxt)) return user;
                return null;
            });

            // sorting
            if (sortType === 'name') {
                filteredData.sort((a, b) => {
                    let x = a.firstName.toLowerCase();
                    let y = b.firstName.toLowerCase();
                    if (x < y) return -1;
                    if (x > y) return 1;
                    return 0;
                });
            } else if (sortType === 'email') {
                filteredData.sort((a, b) => {
                    let x = a.email.toLowerCase();
                    let y = b.email.toLowerCase();
                    if (x < y) return -1;
                    if (x > y) return 1;
                    return 0;
                });
            } else if (sortType === 'company') {
                filteredData.sort((a, b) => {
                    let x = a.company.name.toLowerCase();
                    let y = b.company.name.toLowerCase();
                    if (x < y) return -1;
                    if (x > y) return 1;
                    return 0;
                });
            }

            setFilteredUsers(filteredData);
        }
    }, [data, searchText, sortType]);

    return (
        <AppLayout>
            <Header searchText={searchText} setSearchText={setSearchText} sortType={sortType} setSortType={setSortType} users={filteredUsers}/>
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