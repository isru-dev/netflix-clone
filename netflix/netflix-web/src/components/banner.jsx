import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import requests from '../utils/request';
import './banner.css';
import Button from '@mui/material/Button';
export function Banner() {
  const [movie, setmovie] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const results = request.data.results;
        console.log(results.length);
         const randomMovie = results[Math.floor(Math.random() * results.length)];
        setmovie(randomMovie);
      } catch (err) {
        console.log("error", err);

      }
    }
    )()
  }, []);
  if (!movie) {
    return <div style={{ height: "448px", background: "#111" }}></div>;
  }
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '....' : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }
      }
    >
      <div className="banner_container">
        <div className="banner_name">
          {movie?.name || movie?.title || movie?.original_name}
        </div>
        <div className="button_container">
          <Button className='banner_button'>Play</Button>
          <Button className='banner_mylist'>My List</Button>
        </div>
        <h1 className='banner_descrition'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="bottom_fade"> </div>
    </div>
  );
}