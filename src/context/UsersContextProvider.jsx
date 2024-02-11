import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const UsersContext = createContext();

const UsersContextProvider = ({children}) => {
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    
    const [data, loader] = useFetch(`https://dummyjson.com/users?skip=${skip}&limit=${limit}`);

    return (
        <UsersContext.Provider value={{data, loader, skip, setSkip, limit, setLimit, currentPage, setCurrentPage}}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;