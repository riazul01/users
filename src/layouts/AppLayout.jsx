import React from 'react';

const AppLayout = ({ children }) => {
    return (
        <div className="mx-auto w-full h-full max-w-[1420px] min-h-screen">
            {children}
        </div>
    );
}

export default AppLayout;