import MovieCard from "../components/MovieCard";
import { useState } from "react"
// import "../css/Home.css";


function Home() {

    const [searchquery, setsearchquery] = useState("");

    const handlesearch = (e) => {
        e.preventDefault()
        alert(searchquery)
    }

    const movies = [
        {
            id: 1,
            title: "terminator",
            description: "a fucking good movie",
            realeaseDate: "1996"
        },
        {
            id: 2,
            title: "koi mil gya",
            description: "a jaddu",
            realeaseDate: "1996"
        },
        {
            id: 3,
            title: "saiyara",
            description: "chutiya film",
            realeaseDate: "1996"
        }
    ]


    return (

        <div className="home">
            <form onSubmit={handlesearch} className="search-form">

                <input type="text"
                    placeholder="Search for a movie..."
                    className="search-movie"
                    value={searchquery}
                    onChange={(e) => setsearchquery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>


            <div className="movie-grid">
                {movies.map((movie) => 
                (
                    <MovieCard key={movie.id} movie={movie} />
                )
                )}
            </div>
        </div>
    )
}

export default Home;