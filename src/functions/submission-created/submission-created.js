const dotenv = require('dotenv')
const fetch = require('node-fetch')
const { EMAIL_TOKEN } = process.env
exports.handler = async function(event, context) { 
  const email = JSON.parse(event.body).payload.data.email
  
  return fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: email,
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Buttondown:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}