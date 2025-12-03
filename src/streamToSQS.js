const { SQSClient, SendMessageCommand } = require('@aws-sdk/client-sqs');
const sqs = new SQSClient({ region: 'ap-south-1' });

exports.handler = async (event) => {
    try {
        const messageBody = JSON.stringify(event);
        const command = new SendMessageCommand({
            QueueUrl: process.env.SQS_QUEUE_URL,
            MessageBody: messageBody
        });
        await sqs.send(command);
        return { statusCode: 200, body: "Message sent to SQS" };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ error: "SQS Error" }) };
    }
};

