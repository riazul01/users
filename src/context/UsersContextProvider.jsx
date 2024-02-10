import React, { createContext, useState } from 'react';

export const UsersContext = createContext();

const UsersContextProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    return (
        <UsersContext.Provider value={{users}}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;