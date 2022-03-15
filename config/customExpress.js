const express = require('express')
const res = require('express/lib/response')
const consign = require('consign')
const bodyParser = require('body-parser')
const { json } = require('express/lib/response')

module.exports = () =>{

    const app = express()
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app)
    
    return app
}
