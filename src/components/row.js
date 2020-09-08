import React, {useState, useEffect} from 'react';
import requests from './requests.js';
import '../static/Row.css';
function Row({ title, url, isLarge}){
    const[movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        function fetchData() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET',url,true);
            xhr.responseType = 'json';
            xhr.addEventListener('load', () => {
                if(xhr.status === 200){
                    setMovies(xhr.response.results);
                }
            });
            xhr.send();
        }
        fetchData();
    },[url]);
    return(
        <div className="row-container">
            <h1>{title}</h1> 
            <div className={`${isLarge ? 'movie-row' : 'movie-small'}`}>
                {movies.map(movie => (
                    <img className={`${isLarge ? 'poster-large' : 'poster' }`} 
                    src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt="movie-banner" />
                ))}
            </div>
        </div>
    );
}
export default Row;
