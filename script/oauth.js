const Express = require('express');
const { URLSearchParams } = require('url');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const cliend_id = '';
const client_secret = '';

const app = Express();
const port = 64386

function make_config(authorization_token) {
    data = {
        headers: {
            "authorization": `Bearer ${authorization_token}`
        }
    };
    return data;
};

app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());
app.use(bodyParser.text());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/user', (req, res) => {
    const data_1 = new URLSearchParams();
    data_1.append('client_id', client_id);
    data_1.append('client_secret', client_secret);
    data_1.append('grant_type', 'authorization_code');
    data_1.append('redirect_uri', `http://localhost:${port}/index.html`);
    data_1.append('scope', 'identify');
    data_1.append('code', req.body);
    fetch('https://discord.com/api/oauth2/token', { method: "POST", body: data_1 }).then(response => response.json()).then(data => {

    });
});
axios.get("https://discord.com/api/users/@me", make_config(data.access_token)).then(response => {
    res.status(200).send(response.data.username);
}).catch(err => {
    console.log(err);
    res.sendStatus(500);
});

app.listen(port, function () {
    console.log(`App listening! Link: http://localhost:${port}/`);
});