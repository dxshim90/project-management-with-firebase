import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedinLinks'
import SignedOutLinks from './SignedoutLinks'
import { connect } from 'react-redux'



const Navbar = (props) => {
    const { auth, profile } = props
    return (
        <nav className ="nav_wrapper green darken-3">
            <div className="container" >
                <Link to='/' className='brand-logo'>Project Management</Link>
                {auth.uid ? <SignedInLinks profile={profile}/> :  <SignedOutLinks/>}
                
               
            </div>
        </nav>    
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}


export default connect(mapStateToProps) (Navbar)