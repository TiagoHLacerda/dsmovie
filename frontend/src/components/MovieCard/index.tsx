import './styles.css';

import MovieScore from 'components/MovieScore';


function MovieCard() {
    const movie = {

        id: 1,
        image: "https://br.web.img3.acsta.net/c_310_420/pictures/22/02/14/18/29/1382589.png",
        title: "Doutor Estranho",
        count: 2,
        score: 5,

    }



    return (

        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </div>
        </div>

    );

}
export default MovieCard;


