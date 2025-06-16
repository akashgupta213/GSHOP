import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gshop-backend.onrender.com', // Adjust if your backend uses a different base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
