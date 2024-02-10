import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const UsersContext = createContext();

const UsersContextProvider = ({children}) => {
    const [data, loader] = useFetch('https://dummyjson.com/users?skip=0&limit=10');

    return (
        <UsersContext.Provider value={{data, loader}}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;