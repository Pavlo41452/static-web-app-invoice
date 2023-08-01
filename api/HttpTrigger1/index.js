module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const configValue = process.env.TEST;
    context.res = {
        body: configValue
    };
}