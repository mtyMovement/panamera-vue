import Axios from 'axios'
import { Loading, Message, MessageBox } from 'element-ui'
import router from './router'

// 超时时间
Axios.defaults.timeout = 5000
// http请求拦截器
var loadingInstace
Axios.interceptors.request.use(config => {
   // element ui Loading方法
       loadingInstace = Loading.service({ fullscreen: true })
   return config
}, error => {
   loadingInstace.close();
   Message.error({
         message: '网络不给力,请稍后再试'
     })
   return Promise.reject(error)
})
//   http响应拦截器
Axios.interceptors.response.use(data => {
    // 响应成功关闭loading
    loadingInstace.close();
    const code = data.data.code;
    if(code == 500) { //未登录
        MessageBox.alert('请先登录', '提示', {
            confirmButtonText: '确定',
            callback: action => {
                router.replace({path: '/login'})
            }
        });
    }
    return data
}, error => {
    loadingInstace.close();
    if(error.response.status == 500){
        MessageBox({
            title: '提示',
            message: '当前未登录，请先登录',
            confirmButtonText: '确定'
        }).then(action => {
            console.log("登录拦截，页面跳转")
            router.replace({path: '/login'})
        });
    }else{
        Message.error({
            message: '服务器错误,请稍后再试'
        })
    }
    return Promise.reject(error)
})