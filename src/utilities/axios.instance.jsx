import axios from 'axios'

const baseURL = 'http://localhost:5000/';
// const baseURL = 'server url'
const headers =  {
    'Content-Type' : 'application/json' ,
    Accept: 'application/json'
}

const token = localStorage.getItem('token')

if (token) {
    headers.Authorization = `Bearer ${token}`
}
export const axiosInstance = axios.create({
    baseURL,
    headers
})