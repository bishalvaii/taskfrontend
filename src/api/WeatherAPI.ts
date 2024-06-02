const url = 'https://foreca-weather.p.rapidapi.com/forecast/daily/102643743?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c421f0c785mshc879b5231180a6dp1d2e45jsn70ae171973af',
    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
  }
};

const fetchWeatherData = async () => {
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  if (weatherData && Date.now() - weatherData.timestamp < 3600000) {
    return weatherData.data; // Return cached data if it's not expired
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    // Cache the data in localStorage with a timestamp
    localStorage.setItem('weatherData', JSON.stringify({ data, timestamp: Date.now() }));

    return data;
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    throw error;
  }
};

export default fetchWeatherData;
