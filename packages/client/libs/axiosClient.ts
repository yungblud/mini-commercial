// eslint-disable-next-line import/no-extraneous-dependencies
import Axios from 'axios'

const axiosClient = Axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  timeout: 5000,
})

export default axiosClient
