import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import MovieComponent from '@/components/MovieComponent';
import NewsComponent from '@/components/CricketMatchesComponent';
import MusicComponent from '@/components/MusicComponent';
import WeatherComponent from '@/components/WeatherComponent';

const DashboardPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated or not
    const token = Cookies.get('token');
    if (!token) {
      router.push('/login');
    }

   
  }, [router]);

  return (
    <div>
      <h1>Welcome to API Collections</h1>
      <h2 style={{marginTop: 3}}>Scroll down to see the weather, , cricket and music data</h2>
      <div>
        <h2 style={{ backgroundColor: 'green', marginTop: 10}}>Weather Forecast</h2>
        <WeatherComponent />
      </div>
       <div>
        <h2  style={{ backgroundColor: 'green',marginTop: 10}}>Movies</h2>
        <MovieComponent />
      </div>
      <div>
        <h2  style={{ backgroundColor: 'green',marginTop: 10}}>Cricket News</h2>
        <NewsComponent />
      </div>
      <div>
        <h2  style={{ backgroundColor: 'green',marginTop: 10}}>Music</h2>
        <MusicComponent /> 
      </div>
    </div>
  );
};

export default DashboardPage;
