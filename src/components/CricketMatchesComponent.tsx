import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCricketMatchesData } from '../slices/cricketSlice';
import { format } from 'date-fns';
import styles from '../styles/CricketComponent.module.css';

//interfaces for data structure within the component
interface CricketTeam {
  name: string;
  
}

interface CricketMatch {
  key: string;
  format: string;
  matchStatus: string;
  venue: string;
  teams: {
    t1: CricketTeam;
    t2: CricketTeam;
  };
  time: number;
  
}

interface CricketMatchesResponse {
  matches: CricketMatch[];
  
}

const CricketComponent: React.FC = () => {
  const dispatch = useDispatch();
  const cricketMatches = useSelector((state: { cricket: { data?: { res?: CricketMatchesResponse } } }) => state.cricket.data?.res?.matches);

  useEffect(() => {
    dispatch(fetchCricketMatchesData());
  }, [dispatch]);

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000); 
    return format(date, 'PPPpp'); // Format the date and time acc to localized format
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cricket Matches</h2>
      {Array.isArray(cricketMatches) ? (
        cricketMatches.map((match: CricketMatch) => (
          <div key={match.key} className={styles.matchCard}>
            <p><span>Format:</span> {match.format}</p>
            <p><span>Match Status:</span> {match.matchStatus}</p>
            <p><span>Venue:</span> {match.venue}</p>
            <p><span>Teams:</span> {match.teams.t1.name} vs {match.teams.t2.name}</p>
            <p><span>Time:</span> {formatTime(match.time)}</p>
          </div>
        ))
      ) : (
        <p>No matches available</p>
      )}
    </div>
  );
};

export default CricketComponent;
