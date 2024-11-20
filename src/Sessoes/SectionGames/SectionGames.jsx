import marioGame from '../../assets/images/mario-game.svg'
import game from '../../assets/images/stick-game.svg'
import clock from '../../assets/images/clock.svg'

function SectionGames () {
    return(
<div className='wrapper' style={{
  background:'linear-gradient( #6f7dfb, #26308c )',
  fontFamily: 'poppins',
}}>
  <div className="container">  
      <div className="row text-center mb-5 pt-5">
              <h1 className='display-4 fs-1 fw-bold lh-lg text-white'>Nossos Cursos</h1>
      </div>
    <div className='sm-row gap-3 d-md-flex flex-nowrap'>

        <div className="card text-center mb-3 col-md-6" style={{'border-radius':'0.8em'}}>
          <div className="card-body">
            <img className="img-fluid rounded-3" src={marioGame} alt="foto dos personagens do jogos mario" style={{'margin-top':'-1em'}} />
            <div className="d-flex justify-content-between text-start mt-4 mb-2">
                    <h5 className="fs-2 fw-bold">Fundamentos do design de jogos</h5>
                    <p className="text-center"><i className='far fa-clockl'></i> <img src={clock} alt="icone relógio" /><small> 8 mim </small></p>
            </div>        
          </div>
          <div className="card-footer bg-dark rounded-pill mx-2" style={{}}>
          </div>             
        </div>

        <div className="card text-center mb-3 col-md-6" style={{'border-radius':'0.8em'}}>      
          <div className="card-body" >
            <img className="img-fluid rounded-3" src={game} alt="foto dos personagens do jogos mario" style={{'margin-top':'-1em'}}/>
            <div className="d-flex justify-content-between text-start mt-4 mb-2">          
              <h5 className="fs-2 fw-bold">Fundamentos do Inity Game Engine</h5>          
              <p className=''><img src={clock} alt="icone do relógio"/>6 min</p>
            </div>
          </div>
          <div className="card-footer bg-dark rounded-pill mx-2" style={{'margin-bottom':'-0.1rem'}} >
          </div>
        </div>        
         
    </div>  
    <div className="d-flex justify-content-end my-5 pb-5">
    <a href="#" className="text-white btn rounded-5 mx-5 px-4" style={{ backgroundColor: '#da722c', fontSize: '1.2em', fontWeight: 700 }}>
        Saiba mais2
    </a>
</div>

  </div>  
</div>
    );
}
export default SectionGames;