import $http from '@/api/fetch'
import api from '@/api/api'
const user = {
    state: {
        userName: 'none'
    },
    mutations: {

    },
    actions: {
        userLogin({ commit }, params) {
            let userName = params.userName
            let passWord = params.passWord

            return new Promise((resolve, reject) => {
                $http.post(api.userLogin, {username: userName, password: passWord}).then(res => {
                    if(res.code == '200') {
                        console.log('返回成功')
                    }
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}
export default user