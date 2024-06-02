
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMusicData } from '../slices/musicSlice';
import styles from '../styles/MusicComponent.module.css';

interface MusicTrack {
    name: string;
    artistName: string;
    releaseDate: string;
    genres: { name: string; url: string }[];
    
  }
  
  interface MusicState {
    data: MusicTrack[];
    status: 'loading' | 'succeeded' | 'failed';
    error: string;
  }
  
const MusicComponent: React.FC = () => {
  const dispatch = useDispatch();
  const musicData = useSelector((state: { music: MusicState }) => state.music.data);
  const musicStatus = useSelector((state: { music: MusicState }) => state.music.status);
  const musicError = useSelector((state: { music: MusicState }) => state.music.error);

  useEffect(() => {
    dispatch(fetchMusicData());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Music Information</h2>
      {musicStatus === 'loading' && <p>Loading...</p>}
      {musicStatus === 'failed' && <p>{musicError}</p>}
      {musicStatus === 'succeeded' && (
        <div>
          {musicData.map((track: MusicTrack, index: number) => (
            <div key={index} className={styles.trackCard}>
              <p><span>Track Name:</span> {track.name}</p>
              <p><span>Artist:</span> {track.artistName}</p>
              <p>
                <span>Genres:</span> 
                {track.genres.map((genre: { name: string; url: string }, genreIndex: number) => (
                  <span key={genreIndex}>
                    <a href={genre.url} target="_blank" rel="noopener noreferrer">{genre.name}</a>
                    {genreIndex < track.genres.length - 1 && ', '}
                  </span>
                ))}
              </p>
              <p><span>Release Date:</span> {track.releaseDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicComponent;
