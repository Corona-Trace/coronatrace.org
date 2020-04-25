require('dotenv').config()

const Mailchimp = require('mailchimp-api-v3')

const mailChimpAPI = process.env.MAILCHIMP_API_KEY
const mailChimpListID = process.env.MAILCHIMP_LIST_ID

const mailchimp = new Mailchimp(mailChimpAPI)

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true'
}

exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body)

  console.log(data)

  if (data.email && data.selectedState) {
    mailchimp
      .post(
        '/lists/' + mailChimpListID + '/members?skip_merge_validation=true',
        {
          email_address: data.email,
          merge_fields: {
            STATE: data.selectedState
          },
          status: 'subscribed'
        }
      )
      .then(function(results) {
        console.log(results)
        const response = {
          statusCode: 200,
          headers: header,
          body: JSON.stringify({ status: 'Success!' })
        }
        callback(null, response)
      })
      .catch(function(err) {
        console.log(err)

        if (err.title == 'Member Exists') {
          err.detail = 'This email address is already subscribed.'
        }

        const response = {
          statusCode: 200,
          headers: header,
          body: JSON.stringify({
            status: 'Error',
            title: err.title,
            detail: err.detail
          })
        }
        callback(null, response)
      })
  } else {
    const response = {
      statusCode: 400,
      headers: header,
      body: JSON.stringify({
        status: 'Error',
        message: 'One or more fields are missing'
      })
    }
    callback(null, response)
  }
}
