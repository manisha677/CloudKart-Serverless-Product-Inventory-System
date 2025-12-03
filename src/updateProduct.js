const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, UpdateCommand } = require('@aws-sdk/lib-dynamodb');

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'ap-south-1' }));

exports.handler = async (event) => {
    try {
        const { id, name, price, category } = JSON.parse(event.body);
        await client.send(new UpdateCommand({
            TableName: process.env.PRODUCTS_TABLE,
            Key: { id },
            UpdateExpression: "SET #n = :name, price = :price, category = :category",
            ExpressionAttributeNames: { "#n": "name" },
            ExpressionAttributeValues: { ":name": name, ":price": price, ":category": category }
        }));
        return { statusCode: 200, body: JSON.stringify({ message: "Product updated" }) };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
    }
};

