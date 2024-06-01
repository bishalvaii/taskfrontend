// fetchCricketMatches.ts
export const fetchCricketMatches = async () => {
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
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching cricket matches:', error);
    throw error;
  }
};


