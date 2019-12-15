import axios from './axios'
export {
  axios
}
export default {
  install(Vue) {
    Vue.prototype.$axios = axios
  }
}