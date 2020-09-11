import React, {useState, useEffect} from 'react';
import '../static/banner.css';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';
function Banner({ url }){
    const[banner, setBanner] = useState([]); 
    useEffect(() => {
        async function fetchBanner(){
            const xhr = new XMLHttpRequest();
            xhr.open('GET',url,true);
            xhr.responseType = 'json';
            xhr.addEventListener('load',() => {
                if(xhr.status === 200){
                    setBanner(xhr.response.results[
                        Math.floor(Math.random() * xhr.response.results.length)
                    ]);
                }
            })
            xhr.send();
        }
        fetchBanner();
    },[url])
    function descriptionShortener(value, n){
        return value?.length > n ? value.substr(0,n-1) + "..." : value;
    }
    return(
        <div className="container-fluid banner"
            style= {{'backgroundImage':`url("https://image.tmdb.org/t/p/original${banner?.backdrop_path}")` }} >
            <div className="banner-content col-xs-5">
                <h3 className="movie-title">{banner.name}</h3>
                <div className="ratings">
                    <img className="imdb-logo" src={require('../static/imdb.png')} alt="imdb-logo" />
                    <img className="imdb-star" src={require('../static/icons8-star-48.png')} alt="imdb-star" />
                    <p className="rating-content">{banner.vote_average}</p>
                </div>
                <div className="banner-btn">
                    <button class="btn btn-secondary play-btn"><BsFillCaretRightFill className="play-icon"/>Play</button>
                    <button class="btn btn-secondary more-btn"><FaListUl className="mylist-icon" />My List</button>
                </div>
                <div className="movie-desc">{descriptionShortener(banner.overview,100)}</div>
            </div>
            <div className="banner-footer"> </div>
        </div>
    );
}
export default Banner;
