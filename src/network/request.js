import axios from 'axios'

export function request(config){
    //创建axios实列
    const instance = axios.create({
        baseURL:'http://106.54.54.237:8000/api/wh',
        timeout:3000
    })

    //axios拦截器
    instance.interceptors.request.use(config => {
        return config
    },err => {
        return err
    })
    instance.interceptors.response.use(res => {
        
        return res
    },err => {
        return err
    })

    return instance(config)
}