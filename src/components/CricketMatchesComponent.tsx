// CricketComponent.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCricketMatchesData } from '../store/cricketSlice';

const CricketComponent: React.FC = () => {
  const dispatch = useDispatch();
  const cricketMatches = useSelector((state: any) => state.cricket.data.res);
console.log(cricketMatches)
  useEffect(() => {
    dispatch(fetchCricketMatchesData());
  }, [dispatch]);

  return (
    <div>
      <h2>Cricket Matches</h2>
      {cricketMatches?.map((match: any) => (
        <div key={match.key}>
          <p>Format: {match.format}</p>
          <p>Match Status: {match.matchStatus}</p>
          <p>Venue: {match.venue}</p>
          <p>Teams: {match.teams.t1} vs {match.teams.t2}</p>
        </div>
      ))}
    </div>
  );
};

export default CricketComponent;
