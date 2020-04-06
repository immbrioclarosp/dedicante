/**
 * @ Author: Aailson Barbosa Ribeiro
 * @ Create Time: 2019-05-15 12:23:46
 * @ Modified by: ribeiro@alailson.com.br
 * @ Modified time: 2020-03-29 14:47:10
 * @ Description: +info: https://alailson.com.br/barbosa-ribeiro-about-sobre
 */
const express = require('express')
module.exports.static = (app) => {

    console.log("\n  STATIC URI MAPPING");
    console.log("/.................................");

    app.use('/www', express.static('www'));
    console.log("/www");
    app.use('/static', express.static('www/static'));
    console.log("/static");
    app.use('/service-worker.js', express.static('www/service-worker.js'));
    console.log("/service-worker.js");
    app.use('/service-worker.js.map', express.static('www/service-worker.js.map'));
    console.log("/service-worker.js.map");
    app.use('/manifest.json', express.static('www/manifest.json'));
    console.log("/manifest.json");
    app.use('/index.html', express.static('www/index.html'));
    console.log("/index.html");
    app.use('/fonts', express.static('www/fonts'));
    console.log("/fonts");
    app.use('/css', express.static('www/css'));
    console.log("/css");
    app.use('/js', express.static('www/js'));
    console.log("/js");
    app.use('/bootstrap', express.static('node_modules/bootstrap'));
    console.log("/bootstrap");

    console.log("................................./staics");


}