const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, DeleteCommand } = require('@aws-sdk/lib-dynamodb');

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'ap-south-1' }));

exports.handler = async (event) => {
    try {
        const { id } = JSON.parse(event.body);
        await client.send(new DeleteCommand({
            TableName: process.env.PRODUCTS_TABLE,
            Key: { id }
        }));
        return { statusCode: 200, body: JSON.stringify({ message: "Product deleted" }) };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
    }
};

