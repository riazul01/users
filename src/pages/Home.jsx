import React, { useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import Header from '../components/Header';
import { UsersContext } from '../context/UsersContextProvider';
import UserCard from '../components/UserCard';
import Pagination from '../components/Pagination';

const Home = () => {
    const {data, loader} = useContext(UsersContext);

    return (
        <AppLayout>
            <Header/>
            {data && <div className="py-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.2rem] place-items-center">
                {
                    data.users.map((user) => {
                        return <UserCard user={user} key={user.id}/>
                    })
                }
            </div>}
            {data && <Pagination/>}
        </AppLayout>
    );
}

export default Home;