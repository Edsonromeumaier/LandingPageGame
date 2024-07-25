import React from "react";
import Navegador from "../../components/Navegador";
import Artigo from "../../components/Artigo";
import Hero from "../../components/Hero";
import "./SectionHero.css";

const SectionHero = () => {
    return(
        <div className="HeroBackground">
            <Navegador />
            <Artigo />
            <Hero />            
        </div>
    );
}
export default SectionHero


