import * as sapper from '@sapper/server';
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
// import https from 'https';
import sirv from 'sirv';

// import { readFileSync } from 'fs';

require('dotenv').config();

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();
app.use(sirv('static', { dev }));
app.use(compression({ threshold: 0 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(sapper.middleware());

app.listen(PORT);

// const server = https.createServer({
// 	key: readFileSync('/Users/kvdhaute/dev/localhost.key'),
// 	cert: readFileSync('/Users/kvdhaute/dev/localhost.crt')
// }, app);
//
// server.listen(PORT);
