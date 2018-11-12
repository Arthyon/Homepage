import * as express from 'express';
import * as http from "http";
import * as path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import { App } from './App';
import { Main } from './Main';

const app = express();

app.set('port', process.env.PORT || 8080);

// const env = process.env.NODE_ENV || 'development';

app.use(express.static(path.join(__dirname)));
// console.log(__dirname);
app.use("/", (req, res) => {
    console.log(req.url);
    const content = ReactDOMServer.renderToString(<StaticRouter location={req.url} context={{}}>
        <Main />
    </StaticRouter>);
    console.log(content);
    const html = ReactDOMServer.renderToString(<App content={content} />)
    res.send('<!DOCTYPE html>\r\n' + html);
});

// app.listen(app.get('port'));
http.createServer(app).listen(app.get('port'), () => {
    console.log("Express server listening on port " + app.get('port'));
});