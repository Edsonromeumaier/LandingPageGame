import React from "react";
import {  Card, CardBody, CardTitle, CardText, } from "reactstrap";
import Clock from '../../src/assets/images/clock.svg'
import Mario from '../../src/assets/images/mario-game.svg'
function NossosCursos () {
    return(
        <>
        <Card>        
        <img src={Mario} className="figure-img img-fluid rounded" alt="personagens do jogo"/>
        <CardBody>
          <CardText>
            <figure className="figure">                
                <figcaption className="figure-caption text-center ">
                    <h3> Fundamentos de design de jogos </h3>
                    <img src={Clock} alt="icon clock" className="" />
                </figcaption>
            </figure>
          </CardText>
        </CardBody>

        <CardBody>
        <CardHeader>
            <header><canvas></canvas></header>
        </CardHeader>
        <figure className="figure">
        <img src={Mario} className="figure-img img-fluid rounded" alt="personagens do jogo"/>
        <figcaption className="figure-caption text-center ">
            <CardTitle><h3> Fundamentos de design de jogos </h3>
            <img src={Clock} alt="icon clock" className="" />
            </CardTitle>                
        </figcaption>
        </figure>
        </CardBody>

        </Card>
        </>
    );
}

export default NossosCursos;