import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedinLinks'
import SignedOutLinks from './SignedoutLinks'


const Navbar = () => {
    return (
        <nav className ="nav_wrapper green darken-3">
            <div className="container" >
                <Link to='/' className='brand-logo'>Project Management</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>    
    )
}


export default Navbar