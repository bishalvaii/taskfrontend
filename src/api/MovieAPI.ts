export const fetchMovieData = async () => {
  // Check if data exists in localStorage and is not expired
  const movieData = JSON.parse(localStorage.getItem('movieData'));
  // set expiration time
  if (movieData && Date.now() - movieData.timestamp < 3600000) {
      return movieData.data; // Return cached data if it's not expired
  }

  // If data is expired or not present in localStorage, fetch it from the API
  const url = 'https://actor-movie-api1.p.rapidapi.com/getid/Tom%20Holland?apiKey=62ffac58c57333a136053150eaa1b587';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'c421f0c785mshc879b5231180a6dp1d2e45jsn70ae171973af',
          'X-RapidAPI-Host': 'actor-movie-api1.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(url, options);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();

      // Cache the fetched data in localStorage with a timestamp
      localStorage.setItem('movieData', JSON.stringify({ data, timestamp: Date.now() }));

      return data;
  } catch (error) {
      console.error('Error fetching movie data:', error);
      throw error;
  }
};

