// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store} from './store/configureStore';
import { HelmetProvider } from 'react-helmet-async';
import axios from 'axios';
import * as utils from './store/actions/utils'


const refreshToken = localStorage.getItem('FMLTRefresh')

async function REFRESHTOKEN(){
    try{
        const response = await axios({
            url: `${process.env.REACT_APP_BASE_URL}/api/auth/refresh-token`,
            method: 'post',
            data: { refreshToken },
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: 'Bearer ' + process.env.REACT_APP_SECRET_TOKEN,
            }
        })
        if(response.status === 200){
            utils.header()
            return response.data.data.accessToken;
        }
        return;
    }catch(error){
        // lotout
    }
    
}

axios
.interceptors.request.use(
    config => {
        const controller = new AbortController();
        const cfg = {
            ...config,
            signal: controller.signal
        }
        controller.abort()
        return cfg
    }
    ,error => Promise.reject(error)
);

axios
.interceptors.response.use(
    async (response: any) => {
        const {status, config} = response || {}
        if(status === 403){
            const newAccessToken = await REFRESHTOKEN();
            if(!!!newAccessToken) return;
            if(config && config.headers && config.headers.Authorization)
              config.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(config)
        }
        return response
    },
    async error => {
        const prevRequest = error && error.config;
        if(error.response.status !== 403) return;
        if(prevRequest && prevRequest.sent) return;
        prevRequest.sent = true;
        const newAccessToken = await REFRESHTOKEN();
        prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axios(prevRequest)
    }
);

// const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
