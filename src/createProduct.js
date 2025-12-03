const { v4: uuid } = require('uuid');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'ap-south-1' }));

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const item = {
            id: uuid(),
            name: body.name,
            price: body.price,
            category: body.category,
            createdAt: Date.now()
        };
        await client.send(new PutCommand({
            TableName: process.env.PRODUCTS_TABLE,
            Item: item
        }));
        return { statusCode: 201, body: JSON.stringify({ message: "Product created", data: item }) };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
    }
};

