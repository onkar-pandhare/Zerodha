import React,{useEffect} from 'react';

import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
     useEffect(() => {
                window.scrollTo(0, 0);
              }, []);
    return (
        <>
        <Hero />
        <OpenAccount />
        <Brokerage />
        </>
      );
}

export default PricingPage;