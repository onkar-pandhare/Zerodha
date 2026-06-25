import React,{useEffect} from 'react';

import Hero from './Hero';
import CreateTicket from './CreateTicket';

function SupportPage() {
     useEffect(() => {
         window.scrollTo(0, 0);
       }, []);
     
    return (
        <>
        <Hero />
        <CreateTicket />
        </>
      );
}

export default SupportPage;