var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();
app.use('/upload', proxy({
    target: "https://sm.ms",
    changeOrigin: true,
    pathRewrite: {
        '^/upload': '/api/upload'
    }
}));

app.use('/', proxy({
    target: "http://localhost:3000"
}));


app.listen(8888);