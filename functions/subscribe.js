require('dotenv').config()

const Mailchimp = require('mailchimp-api-v3')

const mailChimpAPI = process.env.MAILCHIMP_API_KEY
const mailChimpListID = process.env.MAILCHIMP_LIST_ID

const mailchimp = new Mailchimp(mailChimpAPI)

exports.handler = function(event, context, callback) {
  console.log(event)
  // mailchimp
  //   .post('/lists/' + mailChimpListID + '/members?skip_merge_validation=true', {
  //     email_address: 'test@coronatrace.org',
  //     state: 'Texas',
  //     status: 'subscribed'
  //   })
  //   .then(function(results) {
  //     console.log(results)
  //   })
  //   .catch(function(err) {
  //     console.log(err)
  //   })

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({ message: 'Hello World!' })
  }

  callback(null, response)
}
