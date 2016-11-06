//import { install } from 'source-map-support';
//import 'source-map-support/register';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { IndexRoute, Route } from 'react-router';
import createHistory from 'react-router/lib/createMemoryHistory';
//install();
const App = () => (
    <div>
        {this.props.children}
    </div>
);

const Hello = () => (
    <h1>Hello world!</h1>
);

const Routes = (
    <Route path="/" component="App">
        <IndexRoute component="Hello" />
    </Route>
);

const app = express();
app.get('/hello', (req, res) => {
    res.send('Hello world!')
});
app.use((req, res) => {
    const history = createHistory(req.originalUrl);
    match({ history, routes: Routes, location: req.originalUrl },
    (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (error) {
            console.error('ROUTER ERROR:', error);
            res.status(500);
        } else if (renderProps) {
            const component = (
                <RouterContext {...renderProps} />
            );
            res.status(200);
            res.send(`
            <!doctype html>
            <html>
                <body>
                ${ReactDOM.renderToString(component)}
                </body>
            </html>
            `);
        } else {
            res.status(404).send('Not found');
        }
    });
});
app.listen(3000, () => console.log('listening on http://localhost:3000'));