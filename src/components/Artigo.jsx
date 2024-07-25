import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { HiPencilAlt } from "react-icons/hi";


function Artigo() {
  return(
    <>
    <div className="px-3 px-sm-4 md-4 py-3 py-sm-5">
        <h1 className="display-4">Aprenda a arte de 
        Desenvolvedor de jogos</h1>
        <p className="lead">
        Este é um curso abrangente sobre Desenvolvimento de Jogos. Você aprenderá tudo, desde gerar uma ideia até publicar seus jogos em diferentes plataformas.
        </p>        
        <Button color="secondary"><HiPencilAlt className='mt-0' />Enrol Now</Button>          
    </div>    
    </>  
);
}

export default Artigo;