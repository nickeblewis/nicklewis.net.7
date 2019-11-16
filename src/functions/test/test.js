// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
export function handler(event, context, callback) {    
    callback(null, {
      statusCode: 200,
      body: 'looking good'
    })
  }