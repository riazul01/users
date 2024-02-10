import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const UsersContext = createContext();

const UsersContextProvider = ({children}) => {
    const [users, loader] = useFetch('https://dummyjson.com/users?skip=0&limit=10');

    console.log(loader);

    return (
        <UsersContext.Provider value={{users}}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;