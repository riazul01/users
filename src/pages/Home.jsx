import React, { useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import Header from '../components/Header';
import { UsersContext } from '../context/UsersContextProvider';

const Home = () => {
    const data = useContext(UsersContext);

    console.log(data);
    
    return (
        <AppLayout>
            <Header/>
        </AppLayout>
    );
}

export default Home;