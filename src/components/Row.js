import axios from '../api/axios';
import React,{useEffect, useState} from 'react';
import './Row.css'
import MovieModal from './MovieModal';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Row({title,id,fetchURL,isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  useEffect(()=>{
    fetchMovieData();
  },[])

  const fetchMovieData = async () =>{
    const request = await axios.get(fetchURL);
    setMovies(request.data.results);
  }

  const handleClick = (movie) =>{
    setModalOpen(true);
    setMovieSelected(movie);
  }
  return (
    <section>
      <h2 className='row'>{title}</h2>
      <div className='slider'>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          1378:{
            slidesPerView: 6,
            slidesPerView: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerView: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerView: 3,
          }
        }}
      >

        <div id = {id} className='row__posters'>
          {movies.map(movie =>(
            <SwiperSlide key={movie.id}>
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src = {`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              } `}
              alt = {movie.name}
              onClick={()=>{ handleClick(movie)}}
            />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      </div>
          {
            modalOpen && (
            <MovieModal {...movieSelected} setModalOpen = {setModalOpen}/>
            )
          }

    </section>
  )
}
