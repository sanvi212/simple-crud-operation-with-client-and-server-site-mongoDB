import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Components/Home/Home";
import Users from "../Components/Users/Users";
import UserDetails from "../Components/Users/UserDetails";
import UpdateUser from "../Components/Users/UpdateUser";
// import Login from "../Components/Login/Login";
// import Register from "../Components/Register/Register";



  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'/users',
          element:<Users></Users>,
          loader:() => fetch('http://localhost:3000/users')
          
        },
        {
          path:"/users/:id",
          loader:({params}) => fetch(`http://localhost:3000/users/${params.id}`),
          element:<UserDetails></UserDetails>
        },
        {
          path:"/update/:id",
          loader:({params}) => fetch(`http://localhost:3000/users/${params.id}`),
          element:<UpdateUser></UpdateUser>
        }
      ]
    },
  ]);
  