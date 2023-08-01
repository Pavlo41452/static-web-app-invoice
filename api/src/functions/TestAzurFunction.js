const { app } = require('@azure/functions');

app.http('TestAzurFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = "Pavlo";

        return { body: `Hello, ${name}!` };
    }
});
