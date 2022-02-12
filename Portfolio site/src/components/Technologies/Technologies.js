import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <br />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I'm a full stack python developer that has worked with a range of technologies in the web development world.
   </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem" />
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Experience with <br />
           HTML, CSS, JavaScript, React.JS and BootStrap
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem" />
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>
           Experience with <br />
           Node and Databases
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiPython size="3rem" />
       <ListContainer>
         <ListTitle>Python</ListTitle>
         <ListParagraph>
           Experience with <br />
           Django and MongoDB
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
