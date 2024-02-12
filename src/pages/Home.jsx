import React, { useState, useEffect, useContext} from 'react';

// layout
import AppLayout from '../layouts/AppLayout';

// components
import Users from '../components/Users';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import AddUserForm from '../components/AddUserForm';

// context
import { UsersContext } from '../context/UsersContextProvider';

// handle fallbacks
const Fallbacks = ({searchText, usersLength, loader, users}) => {
    let fallbackElem = null;

    if (searchText !== '' && usersLength === 0) {
        fallbackElem = <p className="py-[2rem] text-[1.2rem]">No items found!</p>;
    } else if (loader) {
        fallbackElem = <p className="py-[2rem] text-[1.2rem]">Please wait...</p>;
    } else if (!loader && !users) {
        fallbackElem = <p className="py-[2rem] text-[1.2rem]">Something Wrong!</p>;
    }

    return fallbackElem;
}

const Home = () => {
    const {users, loader} = useContext(UsersContext);
    const [sortType, setSortType] = useState('name');
    const [searchText, setSearchText] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (users) {
            // searching
            const filteredData = users.filter((user) => {
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
    }, [users, searchText, sortType]);

    useEffect(() => {
        const body = document.querySelector('body');
        if (showForm) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }, [showForm]);

    return (
        <AppLayout>
            <Header searchText={searchText} setSearchText={setSearchText} sortType={sortType} setSortType={setSortType} setShowForm={setShowForm} users={filteredUsers}/>
            
            {/* fallbacks */}
            <Fallbacks searchText={searchText} usersLength={filteredUsers.length} loader={loader} users={users}/>
            
            {/* users list */}
            {users && <Users users={filteredUsers}/>}
            {users && <Pagination/>}

            {/* add user */}
            {showForm && <AddUserForm setShowForm={setShowForm}/>}
        </AppLayout>
    );
}

export default Home;