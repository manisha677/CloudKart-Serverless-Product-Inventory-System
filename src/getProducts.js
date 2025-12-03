const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, ScanCommand } = require('@aws-sdk/lib-dynamodb');

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'ap-south-1' }));

exports.handler = async () => {
    try {
        const data = await client.send(new ScanCommand({ TableName: process.env.PRODUCTS_TABLE }));
        return { statusCode: 200, body: JSON.stringify(data.Items) };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
    }
};

