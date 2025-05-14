import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user)
    const {name,email,id} = user;
    return (
        <div>
            <h2>name: {name}</h2>
        </div>
    );
};

export default UserDetails;