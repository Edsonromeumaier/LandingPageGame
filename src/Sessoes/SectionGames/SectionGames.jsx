import marioGame from '../../assets/images/mario-game.svg'
import game from '../../assets/images/stick-game.svg'
function SectionGames () {
    return(
<>
<div className="">
    <div className="card text-center">
      <div className="card-header">
        <h5> Nossos Cursos </h5>
      </div>      
      <div className="card-body">
        <img className="img-fluid" src={marioGame} alt="foto dos personagens do jogos mario"/>
        <div className="row">
                <div className="z-1 d-grid col align-items-center">
                <h5 className="card-title">Fundamentos do design de jogos</h5>                
                </div>
                <div className="z-0 col-6 text-end">
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
      </div>
      <div className="card-footer text-muted bg-dark round-lg mx-2">
      </div>
    </div>

    <div className="card text-center">      
      <div className="card-body">
        <img className="img-fluid" src={game} alt="foto dos personagens do jogos mario"/>
        <div className="row">
                <div className="z-1 d-grid col align-items-center">
                <h5 className="card-title">Fundamentos do Inity Game Engine</h5>                
                </div>
                <div className="z-0 col-6 text-end">
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
      </div>
      <div className="card-footer text-muted bg-dark round-lg mx-2">
      </div>
    </div>

</div>  
</>
    );
}
export default SectionGames;