import { Link } from 'react-router-dom';
import Navbar from './UI/navbar'
import { useState } from 'react';

export default function Nav() {
    return (
        <Navbar className="navbarNew"
          links={[
            <Link key={1} className="nav-link text-light newNavHead" to="/" >
              Home
            </Link>,
            <Link key={2} className="nav-link text-light newNavHead" to="/Login" >
            Login
          </Link>,
            <Link key={3} className="nav-link text-light newNavHead" to="/profile">
              Profile
            </Link>,
          ]}  
        />
      )
}