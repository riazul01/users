import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// context
import { UsersContext } from '../context/UsersContextProvider';

// icons
import { MdUpload } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUserForm = ({setShowForm}) => {
    const {addedUsers, setAddedUsers} = useContext(UsersContext);
    const [user, setUser] = useState({firstName: '', lastName: '', email: ''});
    const [company, setCompany] = useState({name: ''});
    const [address, setAddress] = useState({address: '', state: '', city: '', postalCode: ''});
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        if (selectedImage === null || selectedImage === undefined) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onload = () => setPreviewImage(reader.result);
    }, [selectedImage]);

    const handleInputChange = (e, type) => {
        if (type === 'user') {
            setUser({...user, [e.target.name]: e.target.value});
        } else if (type === 'company') {
            setCompany({...company, [e.target.name]: e.target.value});
        } else if (type === 'address') {
            setAddress({...address, [e.target.name]: e.target.value});
        } else if (type === 'avatar') {
            if (e.target.files[0] !== undefined) {
                setSelectedImage(e.target.files[0]);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userDetails = {...user, id: addedUsers.length + 101, company, address, image: previewImage};
        setAddedUsers([...addedUsers, userDetails]);
        const addTaks = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success!');
                setUser({firstName: '', lastName: '', email: ''});
                setCompany({name: ''});
                setAddress({address: '', state: '', city: '', postalCode: ''});
                setPreviewImage(null);
            }, 1000);
        })
        toast.promise(addTaks, {
            pending: 'Uploading...',
            success: 'User Added!',
            error: 'An error occured!'
        });
    }

    return ReactDOM.createPortal(
        <>
        <div className="fixed t-0 l-0 py-[3rem] flex items-start justify-center h-screen w-screen bg-[#111] bg-opacity-80 overflow-auto z-10">
            {/* close form */}
            <div onClick={() => setShowForm(false)} className="fixed top-[2rem] right-[2rem] cursor-pointer">
                <FaTimes className="text-[1.5rem]"/>
            </div>
            <div className="p-[1rem] w-[420px] bg-[#222] rounded-lg">
                {/* title */}
                <h1 className="text-[1.6rem] font-[600]">Add User</h1>
                <div className="h-[0.4rem] w-[4rem] bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></div>
                
                {/* form */}
                <form onSubmit={handleSubmit} className="mt-[1.4rem] w-full h-auto">
                    <div className="flex items-center justify-between gap-[1rem]">
                        <input value={user.firstName} onChange={(e) => handleInputChange(e, 'user')} type="text" name="firstName" className="ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="First name" required/>
                        <input value={user.lastName} onChange={(e) => handleInputChange(e, 'user')} type="text" name="lastName" className="ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Last name" required/>
                    </div>
                    
                    <input value={user.email} onChange={(e) => handleInputChange(e, 'user')} type="email" name="email" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Your email" required/>
                    <input value={company.name} onChange={(e) => handleInputChange(e, 'company')} type="text" name="name" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Company name" required/>
                    <input value={address.address} onChange={(e) => handleInputChange(e, 'address')} type="text" name="address" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Address" required/>
                    <input value={address.state} onChange={(e) => handleInputChange(e, 'address')} type="text" name="state" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="State" required/>
                    <input value={address.city} onChange={(e) => handleInputChange(e, 'address')} type="text" name="city" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="City" required/>
                    <input value={address.postalCode} onChange={(e) => handleInputChange(e, 'address')} type="text" name="postalCode" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Postcode" required/>
                    
                    <div className="mt-[1rem] text-[1.1rem] flex items-center justify-center h-[120px] w-full bg-[#111] rounded-lg">
                        {previewImage === null ? <p>Image preview</p> :
                        <img src={previewImage} className="w-full h-full object-contain" alt="preview"/>}
                    </div>

                    <div className="mt-[1rem]">
                        <label htmlFor="avatar" className="flex items-center justify-center h-[44px] bg-[#111] cursor-pointer rounded-lg">
                            <MdUpload className="text-[1.2rem]"/>
                            <span className="text-[1.1rem]">Upload an Image</span>
                        </label>
                        <input onChange={(e) => handleInputChange(e, 'avatar')} onClick={(e) => e.target.value=null}  type="file" accept="image/*" id="avatar" className="h-0 w-0" required/>
                    </div>

                    <button type="submit" className="text-[1.1rem] font-[500] h-[44px] w-full rounded-lg bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600">Submit</button>
                </form>
            </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        /></>,
        document.getElementById('form')
    );
}

export default AddUserForm;