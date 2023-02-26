#!/usr/bin/env node
require('dotenv').config()

const axios = require('axios');
const https = require('https');
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://localhost:5484/DentalDesktop/WebService/SelectPatient',
  params: {
    IntegrationId: argv.IntegrationId,
  },
  headers: { 
    'User-Agent': 'glamour.pms/1',
    'Authorization': process.env.TOKEN
  },
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
