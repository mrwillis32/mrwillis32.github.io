import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle manin center>
       Hello there, <br />
       Welcome to my portfolio 
     </SectionTitle>
     <SectionText>
       I'm a full stack  developer ready to help you design a better web.
     </SectionText>
     <Button onClick={() => window.location = 'https://github.com/mrwillis32/mrwillis32.github.io.git'}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;