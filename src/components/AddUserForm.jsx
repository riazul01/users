import React from 'react';
import ReactDOM from 'react-dom';

const AddUserForm = ({setShowForm}) => {
    return ReactDOM.createPortal(
        <div className="fixed t-0 l-0 flex items-center justify-center h-screen w-screen bg-[#111] bg-opacity-80 z-10">
            <h1>Hello!</h1>
        </div>,
        document.getElementById('form')
    );
}

export default AddUserForm;