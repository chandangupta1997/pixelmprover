//const express = require('express')
import axios from'axios'
import express from 'express'
//const bodyParser = require('body-parser')
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import Replicate from 'replicate-js'
const replicate = new Replicate({token: 'f6b7e62f6dbb3bbec887813c48ed10b3cfc1900b'});

// If you set the REPLICATE_API_TOKEN environment variable, you do not need to provide a token to the constructor.
// const replicate = new Replicate();


//const replicate = require('replicate-js')

// const helloWorldModel = await replicate.models.get('replicate/hello-world');
// const helloWorldPrediction = await helloWorldModel.predict({ text: "test"});
// console.log(helloWorldPrediction);

console.log(__dirname + '/Screenshot_1.png')


const model = await replicate.models.get("tencentarc/gfpgan")
const output = await model.predict({img:`${__dirname}/Screenshot_1.png`})

console.log(model,output)


const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))




app.listen(3000,console.log('app is running on port 3000'))

app.get('/test',function(req,res){
    res.send('app is running on port 300 and testing endpoint is  /test')
})


app.post('/pixelImprover',function(req,res){



})

// https://api.replicate.com/v1/predictions

//https://api.replicate.com/v1/predictions

//axios.post('https://api.replicate.com/v1/predictions',)