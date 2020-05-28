const JWT = {
    install(Vue) {
        Vue.prototype.$jwt = {
            store: (token) => {
                localStorage.setItem('_token', token);
            },
            remove: () => {
                localStorage.removeItem('_token');
                localStorage.removeItem('_refresh');
            },
            token: () => {
                return '_token' in localStorage;
            },
            bearer: () => {
                return localStorage.getItem('_token')
            },
            refresh: () => {
                return localStorage.getItem('_refresh')
            }
        }
    }

};

export default (JWT);
