import React ,{useEffect}from 'react';

import Hero from './Hero';
import Education from './Education';
import Stats from './Stats';
import Pricing from './Pricing';
import Awards from './Awards';

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';



function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <>
       
        <Hero />
        <Awards />
         <Stats />
        <Pricing />
         <Education />
         <OpenAccount />
        
        </>
      );
}

export default HomePage;