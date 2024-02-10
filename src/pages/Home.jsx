import React, { useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import Header from '../components/Header';
import { UsersContext } from '../context/UsersContextProvider';
import UserCard from '../components/UserCard';

const Home = () => {
    const {data, loader} = useContext(UsersContext);

    // console.log(data);

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
        </AppLayout>
    );
}

export default Home;