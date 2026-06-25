import React from 'react';
import { useEffect } from "react";
import Hero from './Hero';
import Signup from './Signup';
import Investment from "./Investment";
import Account from "./Account";
import Benefits from "./Benefits";
import AccountTypes from "./AccountTypes";

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
import LeftSection from "./LeftSection";



function SignupPage() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <>
       <Hero />
       {/* <Signup /> */}
       <LeftSection />
       <Investment />
       < Account />
       < Benefits />
       <AccountTypes />
       <OpenAccount />
        
        </>
      );
}

export default SignupPage;