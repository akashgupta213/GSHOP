import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://g-shop-backend.onrender.com', // Adjust if your backend uses a different base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
