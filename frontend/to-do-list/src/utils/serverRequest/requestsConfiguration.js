import axios from 'axios';

export const requestsConfiguration = axios.create({
  baseURL: "http://localhost:8090",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${accessToken}`
  }
})
export default requestsConfiguration 



