import React from 'react';
import Vector from '../../src/assets/images/Vector.svg'
import Group from '../../src/assets/images/Group.svg'
function Baixe(){
    return(
        <>
        <h2>Baixe nosso App</h2>
        <p>Você pode usar nosso aplicativo para uma melhor experiência em smartphones</p>
        
        <frame>
        <img src={Vector}/>
        <h3>App Store</h3>
        </frame>

        <frame>
        <img src={Group}/>
        <h3>Google Play</h3>
        </frame>
        
        </>
    );
}
export default Baixe