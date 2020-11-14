import axios from 'axios'
const api = process.env.NODE_ENV === 'development' ? 'http://localhost:7000/api' : 'HOST-NODE'

export const signup = async data => await axios.post(`${api}/auth/signup`, data)

export const signin = async (email, password) => await axios.post(`${api}/auth/signin`, { email, password })
