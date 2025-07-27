import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react"
import { getPopularMovies,searchMovies } from "../services/api";
import "../css/Home.css";


function Home() {

    const [searchquery, setsearchquery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const getpopularmovies = await getPopularMovies();
                console.log("Fetched movies:", getpopularmovies);
                setMovies(getpopularmovies);
            } catch (err) {
                console.error("Failed to fetch popular movies:", err);
                setError("Failed to fetch popular movies");
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    const handlesearch = async (e) => {
        e.preventDefault();
        if (!searchquery.trim()) return;
        if (loading) return;

        try {
            setLoading(true);
            setError(null);
            const searchResults = await searchMovies(searchquery); // <-- await here
            console.log("Search results:", searchResults);
            setMovies(searchResults);
        } catch (err) {
            console.error("Failed to search movies:", err);
            setError("Failed to search movies");
        } finally {
            setLoading(false);
        }
    }


    return (

        <div className="home">
            
            <form onSubmit={handlesearch} className="search-form">

                <input type="text"
                    placeholder="Search for a movie..."
                    className="search-input"
                    value={searchquery}
                    onChange={(e) => setsearchquery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (<div className="loading">Loading...</div>) :(
                     <div className="movies-grid">
                {movies.map((movie) => 
                (
                    <MovieCard key={movie.id} movie={movie} />
                )
                )}
            </div>
            )}
        </div>
    )
}

export default Home;