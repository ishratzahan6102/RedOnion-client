import axios from 'axios'

const baseURL = 'https://red-onion-server-tau.vercel.app/';
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