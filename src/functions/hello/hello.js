exports.handler = async (event, context) => {
  try {
    console.log("test")
    return { statusCode: 200, body: `Hello from a serverless function!` };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
