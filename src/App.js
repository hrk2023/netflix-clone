import React from 'react';
import './App.css';
import Row from './components/row.js';
import requests from './components/requests.js';
import Banner from './components/banner.js';
import Navbar from './components/navbar.js';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner url = {requests.fetchNetflixOriginals}/>
        <Row title="Netflix Originals" url = {requests.fetchNetflixOriginals} isLarge/>
        <Row title="Trending Now" url = {requests.fetchTrending} />
        <Row title="Top Rated" url = {requests.fetchTopRated} />
        <Row title="Action Movies" url = {requests.fetchActionMovies} />
        <Row title="Comedy Movies" url = {requests.fetchComedyMovies} />
        <Row title="Horror Movies" url = {requests.fetchHorrorMovies} />
        <Row title="Romantic Movies" url = {requests.fetchRomanticMovies} />
        <Row title="Documentaries" url = {requests.fetchDocumentaries} />
        
    </div>
  );
}

export default App;
