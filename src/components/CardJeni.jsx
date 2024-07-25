import React from "react";
import { CardBody, CardSubtitle } from "reactstrap";
import photoHer from '../../src/assets/images/photo-her.svg';
function CardJeni () {
    return(
        <>
         <CardBody>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >Todos os alunos têm acesso a todos os vídeos e também ao código-fonte dos projetos. Você também terá acesso a um canal privado do Discord onde poderá discutir suas dúvidas.
            </CardSubtitle> 
            <img
              alt="Usuário"
              src={photoHer}
              className="rounded float-end"
              width="30%"/>
            </CardBody>
        </>
    );
}
export default CardJeni