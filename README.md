# CloudKart-Serverless-Product-Inventory-System
Serverless Product Inventory System (CloudKart) with AWS Lambda, API Gateway, DynamoDB, SQS, OpenSearch, and CloudWatch. Full CRUD APIs, real-time indexing, and structured logging. Version-controlled and deployed using Serverless Framework.

 # Overview
CloudKart is a serverless inventory management system that allows businesses to manage products efficiently without worrying about server maintenance. The system leverages AWS services to ensure scalability, reliability, and real-time performance.
 # Features
 ° Create, Read, Update, Delete (CRUD) APIs for product management
 
 ° Real-time product indexing with OpenSearch
 
 ° Serverless architecture using AWS Lambda and API Gateway
 
 ° DynamoDB for fast and scalable data storage
 
 ° SQS for asynchronous messaging
 
 ° CloudWatch logging and monitoring
 
 ° Fully deployable via Serverless Framework
 
 # Architecture
 
 # Installation & Setup
 
 1. Clone the Repository
    
# Bash commands

**```bash**
git clone https://github.com/manisha677/CloudKart-Serverless-Product-Inventory-System.git
**```**

     cd CloudKart-Serverless-Product-Inventory-System
**```**

2. Install Dependencies

Ensure you have Node.js and npm installed. Then run:

**```bash**
npm install
**```**


3. Configure AWS Credentials
   
Make sure AWS CLI is installed. Configure your credentials:

aws configure

Provide your AWS Access Key, Secret Key, and Region (us-east-1).

4. Deploy the Serverless Application

serverless deploy

This will deploy Lambda functions, API Gateway endpoints, and DynamoDB tables.

5. Get the API Endpoint
   
After deployment, your terminal will show something like:

POST - https://<your-api-id>.execute-api.us-east-1.amazonaws.com/products


6. Test the API

curl -X POST https://<your-api-id>.execute-api.us-east-1.amazonaws.com/products \
-H "Content-Type: application/json" \
-d '{"name":"Sample Product","price":100,"category":"Electronics"}'


7. Successful response example:

{
  "message": "Product created",
  "data": {
    "id": "97e0f564-2174-4752-86f3-f7383301241d",
    "name": "Sample Product",
    "price": 100,
    "category": "Electronics",
    "createdAt": 1764753779859
  }
}

 4. Usage
 5. Screenshots
 6. Technologies Used
 7. Author
