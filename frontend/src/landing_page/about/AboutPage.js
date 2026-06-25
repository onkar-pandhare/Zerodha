import React,{useEffect} from 'react';

import Hero from './Hero';
import Team from './Team';

function AboutPage() {
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

    return (  <><Hero />
                <Team /></>);
}

export default AboutPage;