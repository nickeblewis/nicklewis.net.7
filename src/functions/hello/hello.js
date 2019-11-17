exports.handler = async (event, context) => {
  try {
    const { email } = JSON.parse(event.body);
    console.log("test", JSON.stringify(event))
    return { statusCode: 200, body: `Hello from a serverless function!` };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
