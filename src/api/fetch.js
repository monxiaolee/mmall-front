import axios from 'axios'
import { setBaseUrl } from '@/config.js'

axios.defaults.baseURL = setBaseUrl();
axios.defaults.timeout = 15000;

export default axios;