const { Client } = require('@opensearch-project/opensearch');

const client = new Client({
    node: process.env.OPENSEARCH_URL,
    auth: { username: process.env.OPENSEARCH_USER, password: process.env.OPENSEARCH_PASS }
});

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        await client.index({
            index: 'products',
            id: body.id,
            body
        });
        return { statusCode: 200, body: "Indexed in OpenSearch" };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: "OpenSearch Error" };
    }
};

