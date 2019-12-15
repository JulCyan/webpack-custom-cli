import axios from 'axios'

let instance = axios.create({
    baseURL: 'api/',
    timeout: 10 * 1000,
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    },
    // post json 转 表单 
    // transformRequest: [function (data) {
    //   let ret = ''
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   return ret
    // }],
})

export default instance