// index.js - Lambda function for creating a product

import { v4 as uuid } from 'uuid';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

// Use the same region as your Lambda deployment
const REGION = process.env.AWS_REGION || 'us-east-1';

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: REGION }));

export const createProduct = async (event) => {
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

        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Product created", data: item })
        };

    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error", details: err.message })
        };
    }
};

