import React from "react";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />

      <Banner />

      <Row
        title="NEXFLIX ORIGINALS"
        fetchUrl={requests.fetchNexflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovie} />
      <Row title="HorrorMovie" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
