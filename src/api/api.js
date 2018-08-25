import axios from "axios"

// 这个接口刚开始访问不到数据，重启下服务好了
export const queryCategorygoods = params => {
    return axios.get('/queryCategorygoods')
}

// 获取商品列表
export const getGoods = params => {
    return axios.get('/goods', {params: params})
}