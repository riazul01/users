import React, { useState, useEffect, useContext} from 'react';

// layout
import AppLayout from '../layouts/AppLayout';

// components
import Users from '../components/Users';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

// context
import { UsersContext } from '../context/UsersContextProvider';

const Home = () => {
    const {data, loader} = useContext(UsersContext);
    const [sortType, setSortType] = useState('name');
    const [searchText, setSearchText] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        if (data) {
            // searching
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
            
            {/* fallbacks */}
            {searchText !== '' && filteredUsers.length === 0 && <p className="py-[2rem] text-[1.2rem]">No items found!</p>}
            {loader && <p className="py-[2rem] text-[1.2rem]">Please wait...</p>}
            {!loader && !data && <p className="py-[2rem] text-[1.2rem]">Something Wrong!</p>}
            
            {/* components */}
            {data && <Users users={filteredUsers}/>}
            {data && <Pagination/>}
        </AppLayout>
    );
}

export default Home;