import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
    
    <div className='my-60 max-h-screen w-11/12 gap-4 mx-auto justify-center flex flex-col'>
      <h1 className="mb-5 text-5xl text-center font-bold">Simple Crud Oparation</h1>
      <p className="mb-5 text-center">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link to='/users' className="btn btn-primary">Get Started</Link>
    </div>
    );
};

export default Home;