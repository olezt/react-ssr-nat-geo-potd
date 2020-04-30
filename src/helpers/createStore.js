import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducers from '../client/behavior/index';
import { API_ROOT } from "../constants";



export default (req) => {
    const axiosInstance = axios.create({
        baseURL: API_ROOT, // no proxy on server side
        headers: { cookie : req.get('cookie') || '' } // if cookie exists pass it to api
    });

    const store = createStore(
        reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
}