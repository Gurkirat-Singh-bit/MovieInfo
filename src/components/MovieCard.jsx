import "../css/MovieCard.css";

function onClickFav() {
    alert("Added to favorites!");
}


function MovieCard({movie}){
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onClickFav}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )
}

export default MovieCard;