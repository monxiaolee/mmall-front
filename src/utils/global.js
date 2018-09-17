import api from "@/api/api";
import http from "@/api/fetch"

export default {
    install(Vue, options) {
        Vue.prototype.$api = api; //api地址全局方法
        Vue.prototype.$http = http; 
    }
}