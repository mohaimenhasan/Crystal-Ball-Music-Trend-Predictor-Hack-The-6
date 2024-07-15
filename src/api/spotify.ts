import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const SCOPES = 'user-top-read user-read-recently-played user-modify-playback-state';

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial: any, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const getUserData = async (token: string) => {
  const { data } = await axios.get('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getUserTopTracks = async (token: string, time_range: string = 'medium_term') => {
  const { data } = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getUserTopArtists = async (token: string, time_range: string = 'medium_term') => {
  const { data } = await axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${time_range}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};