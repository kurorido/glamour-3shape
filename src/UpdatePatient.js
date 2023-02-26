#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const axios = require('axios');
const https = require('https');
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const env = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'env.json')))

const config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://localhost:5484/DentalDesktop/WebService/UpdatePatient',
  params: {
    ClientId: env.ClientId,
    IntegrationId: argv.IntegrationId,
    LastName: argv.LastName,
    // FirstName: argv.FirstName,
    DateOfBirth: argv.DateOfBirth,
    PatientId: argv.PatientId,
  },
  headers: {
    'User-Agent': 'glamour.pms/1',
    'Authorization': env.TOKEN
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
