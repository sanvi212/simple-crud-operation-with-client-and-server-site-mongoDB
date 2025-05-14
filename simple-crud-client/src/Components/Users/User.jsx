import React from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const User = ({ user, onDelete }) => {
    const { name, email, photo, _id } = user;

    const handleDelete = () => {
        toast.success(`Deleted user: ${name}`);
        onDelete(_id);
    };

    return (
        <div className='border flex flex-col gap-5 justify-center items-center p-5 rounded-lg bg-base-300'>
            <img className='w-24 h-24 rounded-full border border-gray-500' src={photo} alt="" />
            <h2 className='text-xl font-bold'>Name: <span className='font-normal text-teal-400'>{name}</span></h2>
            <p className='text-sm font-bold'>User Email : {email}</p>
            <div className='flex justify-between gap-4 mb-4'>
                <Link className='btn btn-secondary' to={`/users/${_id}`}>Detail</Link>
            <Link className='btn btn-secondary' to={`/update/${_id}`}>Edit</Link>
            </div>
            <button onClick={handleDelete} className='btn btn-primary'>Delete User</button>
        </div>
    );
};

export default User;
