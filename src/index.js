import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './container/App';

var http = require("http");
setInterval(function() {
    http.get("https://smartbrain-demographics.herokuapp.com/");
    http.get("https://robogenerator.herokuapp.com/");
    http.get("https://lemon-music.herokuapp.com/recommend");
}, 300000); // Pin the heroku apps every 5 minutes

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
 
