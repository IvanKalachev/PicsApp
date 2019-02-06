import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 74873cf783db8a5453ea210fff42fe6314c02e5e8a36b447f286e56e781c6d5c'
    }
});