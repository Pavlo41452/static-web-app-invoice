module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = "Pavlo";
    context.res = {
        body: name
    };
}