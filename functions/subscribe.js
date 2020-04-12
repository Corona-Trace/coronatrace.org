require('dotenv').config()

const Mailchimp = require('mailchimp-api-v3')

const mailChimpAPI = process.env.MAILCHIMP_API_KEY
const mailChimpListID = process.env.MAILCHIMP_LIST_ID

const mailchimp = new Mailchimp(mailChimpAPI)

exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body)

  console.log(data)

  if (data.email && data.selectedState) {
    mailchimp
      .post(
        '/lists/' + mailChimpListID + '/members?skip_merge_validation=true',
        {
          email_address: data.email,
          state: data.selectedState,
          status: 'subscribed'
        }
      )
      .then(function(results) {
        console.log(results)
      })
      .catch(function(err) {
        console.log(err)
      })

    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ message: 'Hello World!' })
    }
    callback(null, response)
  } else {
    const response = {
      statusCode: 400,
      headers: {
        'Access-Control -Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({
        message: 'Error. Looks like one or more fields are missing'
      })
    }
    callback(null, response)
  }
}
