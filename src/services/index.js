import axios from 'axios'

const devUrl = 'http://localhost:3001'
const prodUrl = process.env.REACT_APP_DEV_URL

export default axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? devUrl : prodUrl,
})
