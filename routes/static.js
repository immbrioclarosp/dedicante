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
    app.use('/static', express.static('static'));
    console.log("/static");
    app.use('/bootstrap', express.static('node_modules/bootstrap'));
    console.log("/bootstrap");

    console.log("................................./staics");


}