import React, {useState, useEffect} from 'react';
import requests from './requests.js';
import '../static/Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
function Row({ title, url, isLarge}){
    const[movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const [trailerUrl, setTrailerUrl] = useState('');
    const opts = {
        height : '414',
        width : '100%',
        playerVars : {
            autoplay : 1,
        }
    }
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
    let handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || '')
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch(error => console.log(error));
        }
    }
    return(
        <div className="row-container">
            <h1>{title}</h1> 
            <div className={`${isLarge ? 'movie-row' : 'movie-small'}`}>
                {movies.map(movie => (
                    <img className={`${isLarge ? 'poster-large' : 'poster' }`} onClick={() => handleClick(movie)} 
                    src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt="movie-banner" />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    );
}
export default Row;
