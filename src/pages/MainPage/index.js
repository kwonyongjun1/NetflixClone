import React from 'react'
import Banner from '../../components/Banner'
import Row from '../../components/Row'
import requests from '../../api/requests'

export default function MainPage() {
  return (
    <div>
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
    </div>
  )
}
