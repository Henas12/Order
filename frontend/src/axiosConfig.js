import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production' ? 'https://dawit-light-backend.onrender.com' : 'https://dawit-light-backend.onrender.com';
