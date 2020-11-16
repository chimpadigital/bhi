import axios from 'axios'
const headers = (token) => { return { headers: { 'x-access-token': token } } }
const api = process.env.NODE_ENV === 'development' ? 'http://localhost:7000/api' : 'HOST-NODE'

export const signup = async data => await axios.post(`${api}/auth/signup`, data)

export const signin = async (email, password) => await axios.post(`${api}/auth/signin`, { email, password })

export const usersPending = async token => await axios.post(`${api}/users/pending`, null, headers(token))

export const usersVerify = async (id, token) => await axios.post(`${api}/users/verify`, id, headers(token))

export const usersCancel = async (id, token) => {
  await axios.post(`${api}/users/cancel`, id, headers(token))
}
