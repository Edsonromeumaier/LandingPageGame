import React from 'react';
import './global.scss';
import SectionHero from './Pages/sectionHero/SectionHero';
import SectionDepo from './Pages/SectionDepo/SectionDepo';
import SectionCursos from './Pages/SectionCursos/SectionCursos';
import SectionApp from './Pages/SectionApp/SerctionApp';
import SectionFooter from './Pages/SectionFooter/SectionFooter';

function App() {
  return (
    <>
    <SectionHero/>     
    <SectionDepo/>    
    <SectionCursos/>
    <SectionApp/>
    <SectionFooter/>   
    </>    
  );
}

export default App
