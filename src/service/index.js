import axios from 'axios'

export default {
    get: url => axios
        .get(url)
        .then(d => d.data)
        .catch(e => {}) 
}