import axios from 'axios';


const http = axios.create({
    baseURL: 'http://localhost:5000'
});

http.defaults.headers.common['x-auth-token'] = localStorage.getItem("token");



http.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    console.log("Error", error)
    if (!expectedError) {
        console.log("An Unexpected error occurs");
    }

    return Promise.reject(error);
})


export default http;