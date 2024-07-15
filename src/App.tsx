import React, { useEffect, useState } from 'react';
import { getTokenFromUrl, getUserData, getUserTopTracks } from './api/spotify';
import './App.css';
import pauseIcon from './assets/pause.svg'; // Add a pause icon
import playIcon from './assets/play.svg';
import Login from './components/Login';
import { AcousticIcon, DanceIcon, SpeechIcon, TempoIcon } from './Icons';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [, setProfile] = useState<any>(null);
  const [topTracks, setTopTracks] = useState<any[]>([]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('spotifyToken');
    const tokenExpiration = localStorage.getItem('spotifyTokenExpiration');
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      const _expires_in = hash.expires_in;
      const expirationTime = new Date().getTime() + _expires_in * 1000;
      localStorage.setItem('spotifyToken', _token);
      localStorage.setItem('spotifyTokenExpiration', expirationTime.toString());
      setToken(_token);
    } else if (tokenFromStorage && tokenExpiration) {
      const expirationTime = parseInt(tokenExpiration);
      if (new Date().getTime() < expirationTime) {
        setToken(tokenFromStorage);
      } else {
        localStorage.removeItem('spotifyToken');
        localStorage.removeItem('spotifyTokenExpiration');
      }
    } else {
      console.log("No token found");
    }
  }, []);

  useEffect(() => {
    if (token) {
      getUserData(token).then(data => setProfile(data));
      getUserTopTracks(token).then(data => setTopTracks(data.items));
    }
  }, [token]);

  const playPreview = (track: any) => {
    if (audio) {
      audio.pause();
      setAudio(null);
      setPlayingTrackId(null);
      if (audio.src === track.preview_url) {
        return; // If the same track is clicked again, stop playing
      }
    }
    const newAudio = new Audio(track.preview_url);
    newAudio.play();
    setAudio(newAudio);
    setPlayingTrackId(track.id);

    newAudio.addEventListener('ended', () => {
      setPlayingTrackId(null);
    });
  };

  return (
    <div className="App">
      {!token ? (
        <Login />
      ) : (
        <div>
          <h1 className="welcome">Projection</h1>
          <div className="cardContainer">
            {topTracks.map((track, index) => (
              <div className="card" key={track.id}>
                <div className="image">
                  <img src={track.album.images[0].url} className="albumArt" alt={track.name} />
                  <div id={`pre${index}`} className="predict" onClick={() => predict(index)}>
                    Predict
                  </div>
                  {track.preview_url && (
                    <button className="playButton" onClick={() => playPreview(track)}>
                      <img src={playingTrackId === track.id ? pauseIcon : playIcon} alt="Play/Pause" />
                    </button>
                  )}
                </div>
                <div className="data">
                  <div className="trackInfo">
                    <h1 className="songTitle">{track.name}</h1>
                    <h3 className="artists">{track.artists[0].name}</h3>
                  </div>
                  <div className="rating" id={`rating${index}`}>{track.popularity}</div>
                </div>
                <div className="icons">
                  <div className="icon">
                    <AcousticIcon />
                  </div>
                  <div className="icon">
                    <DanceIcon />
                  </div>
                  <div className="icon">
                    <SpeechIcon />
                  </div>
                  <div className="icon">
                    <TempoIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const predict = (index: number) => {
  const predictedPop = [61, 75, 32, 65, 52, 7, 73, 90, 63, 55, 42, 56, 80, 68, 63, 71, 45, 53, 45, 56]; // replace with your data
  const netChange = predictedPop[index] - 50; // replace 50 with actual popularity
  animateValue(`pre${index}`, 0, netChange, 2000);
  animateValue(`rating${index}`, 50, predictedPop[index], 2000); // replace 50 with actual popularity
};

const animateValue = (id: string, start: number, end: number, duration: number) => {
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const obj = document.getElementById(id);
  let current = start;

  if (obj) {
    const timer = setInterval(() => {
      current += increment;
      obj.innerHTML = end > start ? `+${current}` : `${current}`;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
};

export default App;
