import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = (props) => {
   const { handleLogout, user } = props;
   const { id, name, email, exp } = user;
   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();

   // make a condition that compares exp and current time
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   }

   const userData = user ?
   (<div>
       <h1 className="welcomeUser">Welcome to your GenProfile {name.toUpperCase()}</h1>
       <h2 className="contactInfo">Contact Information</h2>
       <p className="contactInfo">Email: {email}</p>
       <h2><em>My Non-Profits</em></h2>
       {/* Display user non-profits here */}
   </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div className="text-center pt-4">
            {user ? userData : errorDiv()}
        </div>
    );

}

export default Profile;