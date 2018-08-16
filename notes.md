## serverless

To reference environment variables, use the ${env:SOME_VAR} syntax in your serverless.yml
Move resources to separate file

## deploy

```
SNS_EMAIL=hehuic@gmail.com rea-as saml locke-dev-Developer yarn deploy
```

## tips

https://cloudcraft.co/

add .env at the same location with docker-compose.yml, will pass env to docker

## Errors

Could not locate deployment bucket. Error: The specified bucket does not exist
-delete s3 section in resource

> AccessDeniedException: User: arn:aws:sts::248139140343:assumed-role/sls-vs-sam-dev-ap-southeast-1-lambdaRole/sls-vs-sam-dev-listItems is not authorized to perform: dynamodb:ListTables on resource: \*

Update table schema got below error, rename the tablenane will create new table, but DELETE old table

> An error occurred: DynamoDBTable - CloudFormation cannot update a stack when a custom-named resource requires replacing. Rename sls-vs-sam-dev-images and update the stack again..

```js
return {
  statusCode: 200,
  body: data
};
```

failed with internal server error, but no log in lambda cloudwatch. fixed by JSON stringfy data for body.

## SAM
sam auto generate roles for each function
sam can use !ref !sub in cloudformation
sam deploy file name is uuid while sls has data time stamp
sam one lambda one source file while sls default use one source file for multi lambdas, but can be config to sam way.
sam during deploy, no outputs, just `Waiting for stack create/update to complete`
sam create log auto, not in cloudformation.
