export const fetchCricketMatches = async () => {
  // Check if data exists in localStorage and is not expired
  const cricketMatchesData = JSON.parse(localStorage.getItem('cricketMatchesData'));
  // set expiration time
  if (cricketMatchesData && Date.now() - cricketMatchesData.timestamp < 3600000) {
    return cricketMatchesData.data; // Return cached data if it's not expired
  }

  const url = 'https://free-cricket-live-score1.p.rapidapi.com/matches';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c421f0c785mshc879b5231180a6dp1d2e45jsn70ae171973af',
      'X-RapidAPI-Host': 'free-cricket-live-score1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Cache the fetched data in localStorage with a timestamp
    localStorage.setItem('cricketMatchesData', JSON.stringify({ data, timestamp: Date.now() }));

    return data;
  } catch (error) {
    console.error('Error fetching cricket matches:', error);
    throw error;
  }
};
