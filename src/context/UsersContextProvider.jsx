import React, { createContext, useRef, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const UsersContext = createContext();

const UsersContextProvider = ({children}) => {
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [addedUsers, setAddedUsers] = useState([]);
    const [data, loader] = useFetch(`https://dummyjson.com/users?skip=${skip}&limit=${limit}`);
    const users = useRef(null);
    const totalPages = useRef(0);

    if (data) {
        totalPages.current = Math.ceil(data.total / limit);
        if (totalPages.current === currentPage) {
            users.current = [...data.users, ...addedUsers];
        } else {
            users.current = data.users;
        }
    }

    return (
        <UsersContext.Provider value={{data, loader, users: users.current, totalPages: totalPages.current, skip, setSkip, limit, setLimit, currentPage, setCurrentPage, addedUsers, setAddedUsers}}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;