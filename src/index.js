import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import Routes  from './client/Routes';
import {API_ROOT} from "./constants";

const app = express();
app.set('port', (process.env.PORT || 3000));

//proxy set up
app.use('/api', proxy(API_ROOT));

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore(req);

    //init and load data to store
    const promises = matchRoutes(Routes, req.path).map(({route, match}) => {
        return route.loadData ? route.loadData(store) : Promise.resolve(null);
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        // if (context.notFound) res.status(404);
        res.send(content);
    });
});

app.listen(app.get('port'), ()=>{
    console.log('Listening to port', app.get('port'));
});