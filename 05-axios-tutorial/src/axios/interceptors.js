import axios from 'axios';

const authFetch = axios.create({
    baseURL: 'https://course-api-com',
});

authFetch.interceptors.request.use((request) => {
    request.headers['Accept'] = 'application/json';
},
(error) => {
    return Promise.reject(error)
})

authFetch.interceptors.response.use((response) => {
    console.log('got response');
    return response;
}, (error) => {
    console.log(error.response);
})

export default authFetch;
