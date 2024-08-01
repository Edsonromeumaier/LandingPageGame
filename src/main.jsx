import React from 'react'
import ReactDOM from 'react-dom/client'
import SectionHero from './Sessoes/sectionHero/SectionHero'
import SectionDepo from './Sessoes/SectionDepo/SectionDepo'
import SectionGames from './Sessoes/SectionGames/SectionGames'
import SectionFooter from './Sessoes/SectionFooter/SectionFooter'
import './global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SectionHero/>     
    <SectionDepo/> 
    <SectionGames/>   
    <SectionFooter/>
  </React.StrictMode>,
)
