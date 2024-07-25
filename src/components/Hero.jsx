import React from "react";
import heroimage from '../../src/assets/img/hero-image.png';

function Hero() {
    return (
     <>
        <div className="container-sm d-grid d-md-none">   
            <div className="row">
                <div className="d-grid bg-secondary col align-items-center">

                    <div className="row-6 align-self-center badge bg-primary text-wrap " >
                        30k magic.
                    </div>


                    <div className="col-4 align-self-start badge bg-primary text-wrap" style={{ width: '6rem' }}>
                        10k magic.
                    </div>
                

                    
                    


                </div>







                <div className="col-6 text-end">
                    <img src={heroimage} className="rounded"  style={{ width: '130%' }}  alt="imagem do herói" />
                </div>
            </div>
        </div>    
        
        <div className="container-md d-none d-md-block d-lg-none">            
            <div className="row">
                <div className="col-6">         
                    <div className="badge bg-primary text-wrap" style={{ width: '6rem' }}>
                        30k magic.
                    </div>
                    <div className="badge bg-primary text-wrap" style={{ width: '6rem' }}>
                        10k magic.
                    </div>
                </div>
                <div className="col-6 text-end">
                    <img src={heroimage} className="rounded" style={{ width: '60%' }} alt="imagem do herói" />
                </div>
            </div>
        </div>    

        <div className="container-lg d-none d-lg-block">            
            <div className="row">
                <div className="col-6">         
                    <div className="badge bg-primary text-wrap" style={{ width: '6rem' }}>
                        30k magic.
                    </div>
                    <div className="badge bg-primary text-wrap" style={{ width: '6rem' }}>
                        10k magic.
                    </div>
                </div>
                <div className="col-6 text-end">
                    <img src={heroimage} className="rounded" style={{ width: '60%' }} alt="imagem do herói" />
                </div>
            </div>
        </div>    

     </>
    );
}

export default Hero;
