import axios from 'axios'

const developmentURL = 'http://localhost:3000/api/'
// const productionURL = Production URL
let baseURL;

// if (__DEV__) {
  baseURL = developmentURL
// } else {
//   baseURL = productionURL
// }

const headers = {
  "Content-Type": 'application/json',
}

const api = axios.create({
    baseURL,
    headers
  })

export default api;
