import React from 'react';

import Hero from '../signup/Hero';

import Investment from "../signup/Investment";
import Account from "../signup/Account";
import Benefits from "../signup/Benefits";
import AccountTypes from "../signup/AccountTypes";

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
import LeftSection from "./LeftSection";



function LoginPage() {
    return (
        <>
       <Hero />
      
       <LeftSection />
       <Investment />
       < Account />
       < Benefits />
       <AccountTypes />
       <OpenAccount />
        
        </>
      );
}

export default LoginPage;