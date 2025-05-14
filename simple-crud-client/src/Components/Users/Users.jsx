import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import User from "./User";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users,setUsers] = useState(loadedUser);
//   console.log(loadedUser);

  const handleAddUser = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const photo = from.photoUrl.value;
    const newUser = { name, email,photo };
    console.log(newUser);


    // creating user db

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding data to db", data);
        if (data.insertedId) {
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);
          toast.success("User Added Succesfully");
          e.target.reset();
        }
      });
  };

   // deleting user

     const handleDeleteUser = (id) => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);
            }
        });
    };


  return (
    <div>
      <form
        className="max-w-md mx-auto mb-20 mt-28 flex flex-col justify-center"
        onSubmit={handleAddUser}
      >
        <h2 className="text-white text-4xl font-bold text-center my-4">
          Add User
        </h2>
        <input
          className="w-full h-10 rounded-md placeholder:pl-4"
          placeholder="Enter Your Name"
          name="name"
          type="text"
        />
        <br />
        <input
          placeholder="Enter Your Image URL"
          className=" rounded-md w-full h-10 placeholder:pl-4"
          name="photoUrl"
          type="text"
        />
        <br />
        <input
          placeholder="Enter Your Email"
          className="mb-4 rounded-md w-full h-10 placeholder:pl-4"
          name="email"
          type="email"
        />
        <input
          className="btn mt-4 btn-accent text-center"
          type="submit"
          value="Add User"
        />
      </form>
              <h2 className="text-4xl text-center text-bold text-cyan-300 mb-8">All Users Here Total: {users.length}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
        {
            users.map(user =>  <User key={user._id} 
              user={user} onDelete={handleDeleteUser} ></User>)
        }
      </div>
    </div>
  );
};

export default Users;
