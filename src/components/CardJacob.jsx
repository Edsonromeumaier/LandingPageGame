import React from "react";
import { CardBody, CardSubtitle  } from "reactstrap";
import photoHis from '../../src/assets/images/proto-his.svg';
function CardJacob () {
    return(
        <>
        <CardBody>
               <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >Todos os alunos têm acesso a todos os vídeos e também ao código-fonte dos projetos. Você também terá acesso a um canal privado do Discord onde poderá discutir suas dúvidas.
               </CardSubtitle>
                <img              
                className="rounded float-end"
                src={photoHis}
                width="30%"
              />
            </CardBody>
        </>
    );
}
 export default CardJacob;