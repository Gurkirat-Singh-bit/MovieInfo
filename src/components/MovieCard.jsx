
// import "../css/MovieCard.css";

function onClickFav() {
    alert("Added to favorites!");
}


function MovieCard({movie}){
    return(
        <div className="movie-card">
            <div className="movie-img">
                <img src={movie.url} alt={movie.title} />
                <button className="fav button" onClick={onClickFav}>
                    ❤️
                </button>
            </div>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>{movie.releaseDate}</p>
        </div>
    )
}

export default MovieCard;