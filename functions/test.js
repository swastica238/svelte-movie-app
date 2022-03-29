exports.handler = async function(event, context) {
    return {
        statusCode = 200,
        body: JSON.stringify({
            name: 'richway',
            age: 85
        })
    }
}