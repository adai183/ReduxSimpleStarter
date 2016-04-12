import axios from 'axios';
export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=182736';

export function fetchLocations() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_LOCATIONS,
    payload: request
  };
}
