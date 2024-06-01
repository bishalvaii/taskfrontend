import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../store/weatherSlice';
import styles from '../styles/WeatherComponent.module.css'; // Import CSS module for component-specific styles

const WeatherComponent: React.FC = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state: any) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div className={styles.weatherContainer}>
     
      {weather.status === 'loading' && <p>Loading...</p>}
      {weather.status === 'succeeded' && weather.data && (
        <div className={styles.forecastContainer}>
          {weather.data.forecast.map((day: any) => (
            <div key={day.date} className={styles.dayContainer}>
              <p className={styles.date}>{day.date}</p>
              <p className={styles.temp}>Max: {day.maxTemp}°C / Min: {day.minTemp}°C</p>
              <p className={styles.feelsLike}>Feels Like: {day.minFeelsLikeTemp}-{day.maxFeelsLikeTemp}°C</p>
              <p className={styles.precip}>Precipitation Probability: {day.precipProb}%</p>
              <p className={styles.condition}>Weather Condition: {day.symbolPhrase}</p>
            </div>
          ))}
        </div>
      )}
      {weather.status === 'failed' && <p className={styles.error}>Failed to fetch weather data</p>}
    </div>
  );
};

export default WeatherComponent;
