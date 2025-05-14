import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const UpdateUser = () => {
    const user = useLoaderData();
    const navigate = useNavigate()

    const handleUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = {name,email}
        console.log(updatedUser)

        // update user info send to database

        fetch(`http://localhost:3000/users/${user._id}`, {
            method:"PUT",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                toast.success("User Update Successfully")
                navigate('/usersnno')
            }
        })
        .catch(error => {
            toast.error(error)
        })
    }

    return (
        <div>
            <form className='max-w-md mx-auto mt-10 py-20 border flex justify-center flex-col p-5' onSubmit={handleUpdateUser}>
                <div className='flex gap-4 flex-col items-center'>
                    <img className='w-24 h-24 rounded-full' src={user.photo} alt={`user-img${user.name}`} />
                    <h2 className='font-bold text-xl text-center'>{user.name}</h2>
                    <h2 className='text-center font-bold py-4 text-primary text-3xl'>Edit User</h2>
                </div>
                <input type="text" name='name' className='h-10' defaultValue={user.name} /> <br />
                <input className='h-10' type="email" name='email' defaultValue={user.email} />
                <br />
                <input className='btn btn-primary' type="submit" value="Update User" />
                <Link className='btn btn-active mt-5' to='/users'>Back To User</Link>
            </form>
        </div>
    );
};

export default UpdateUser;