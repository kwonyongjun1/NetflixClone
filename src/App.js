import './App.css';
import requests from './api/requests';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Row from './components/Row';
function App() {
  return (
    <div style={{backgroundColor : '#000000'}}>
      <Nav/>
      <Banner/>
      <Row
        title="NETFLIX_ORIGINALS"
        id="NO"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title="Trending Now"
        id="TN"
        fetchURL={requests.fetchTrending}
        isLargeRow
      />

      <Row    
        title="Top Rated"
        id="TR"
        fetchURL={requests.fetchTopRated}
        isLargeRow
      />
      
      <Row    
        title="Action Movies"
        id="AM"
        fetchURL={requests.fetchActionMovies}
        isLargeRow
      />

      <Row    
        title="Comedy Movies"
        id="CM"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow
      />
      <Footer/>
    </div>
  );
}

export default App;
