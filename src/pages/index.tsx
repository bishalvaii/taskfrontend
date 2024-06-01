import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import MovieComponent from '@/components/MovieComponent';
import NewsComponent from '@/components/CricketMatchesComponent';
import MusicComponent from '@/components/MusicComponent';
import WeatherComponent from '@/components/WeatherComponent';

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    // Check if user is authenticated
    const token = Cookies.get('token');
    if (!token) {
      router.push('/login');
    }

   
  }, [router]);

  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <div>
        <h2>Weather Forecast</h2>
        <WeatherComponent />
      </div>
       <div>
        <h2>Movies</h2>
        <MovieComponent />
      </div>
      <div>
        <h2>News</h2>
        <NewsComponent />
      </div>
      {/* <div>
        <h2>Music</h2>
        <MusicComponent /> 
      </div> */}
    </div>
  );
};

export default DashboardPage;
