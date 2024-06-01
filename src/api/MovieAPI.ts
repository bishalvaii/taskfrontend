// api/MovieAPI.js
export const fetchMovieData = async () => {
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
      return data;
    } catch (error) {
      console.error('Error fetching movie data:', error);
      throw error;
    }
  };
  