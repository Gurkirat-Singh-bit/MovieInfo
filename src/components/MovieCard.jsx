import "../css/MovieCard.css";

function onClickFav() {
    alert("Added to favorites!");
}


function MovieCard({movie}){
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onClickFav}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;