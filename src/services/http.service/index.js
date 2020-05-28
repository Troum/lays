import axios from 'axios';
import HandlerService from "../handler.service";
import Vue from "vue";
import JWT from "../jwt-token.service";

Vue.use(HandlerService);
Vue.use(JWT);

let $http = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}`,
    headers: {
        'X-Requested-With' : 'XMLHttpRequest'
    },
    withCredentials: false,
    crossDomain: false,
    params: {}
});

$http.interceptors.request.use(request => {
    if(request.url.includes('auth')) {
        request.headers.Authorization = `Bearer ${Vue.prototype.$jwt.bearer()}`;
    }
    return request;
}, error => {
    Vue.prototype.$handler.error(error);
});

$http.interceptors.response.use(response => {
    return response;
}, error => {
        switch (error.response.status) {
            case 401:
            case 404:
            case 409:
                Vue.prototype.$handler.error(error.response.data.error);
                break;
            case 403:
                Vue.prototype.$handler.warning(error.response.data.error);
                break;
        }
});

const HttpService = {
    install(Vue) {
        Vue.prototype.$httpService = $http;
    }
};

export default (HttpService);
