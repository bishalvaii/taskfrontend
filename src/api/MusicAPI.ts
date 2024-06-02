export const fetchMusicDataApi = async () => {
    // Check if data exists in localStorage and is not expired
    const musicData = JSON.parse(localStorage.getItem('musicData'));
    // Set expiration time
    if (musicData && Date.now() - musicData.timestamp < 3600000) {
      return musicData.data; // Return cached data if it's not expired
    }
  
    const url = 'https://apple-marketing-tools.p.rapidapi.com/gh/music/most-played/10/songs.json';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c421f0c785mshc879b5231180a6dp1d2e45jsn70ae171973af',
        'X-RapidAPI-Host': 'apple-marketing-tools.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch music data');
      }
      const data = await response.json();
  
      localStorage.setItem('musicData', JSON.stringify({ data, timestamp: Date.now() }));
  
      return data;
    } catch (error) {
      console.error('Error fetching music data:', error);
      throw error;
    }
  };
  