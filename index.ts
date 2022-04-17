/**
 * Created by Miguel Pazo (https://miguelpazo.com)
 */
import * as aws from "@pulumi/aws";
import * as config from "./config";
import * as fs from 'fs';


const forceMfa = new aws.iam.Policy(`${config.generalTagName}-force-mfa`, {
    name: 'force-mfa',
    path: "/",
    description: "Policy to force acces with MFA",
    policy: fs.readFileSync('./policies/__general/force_mfa.json', 'utf8'),
});


/**
 * Dev & QA
 */
const ec2Dev = new aws.iam.Policy(`${config.generalTagName}-policy-ec2-dev`, {
    name: 'ec2-dev',
    path: "/",
    description: "Policy for access to ec2 dev",
    policy: fs.readFileSync('./policies/dev/ec2.json', 'utf8'),
});

const dynamodbDev = new aws.iam.Policy(`${config.generalTagName}-policy-dynamodb-dev`, {
    name: 'dynamodb-dev',
    path: "/",
    description: "Policy for access to dynamodb dev",
    policy: fs.readFileSync('./policies/dev/dynamodb.json', 'utf8'),
});

const cloudwatchDev = new aws.iam.Policy(`${config.generalTagName}-policy-cloudwatch-dev`, {
    name: 'cloudwatch-dev',
    path: "/",
    description: "Policy for access to cloudwatch dev",
    policy: fs.readFileSync('./policies/dev/cloudwatch.json', 'utf8'),
});

const s3bucketDev = new aws.iam.Policy(`${config.generalTagName}-policy-s3-dev`, {
    name: 's3-dev',
    path: "/",
    description: "Policy for access to s3 dev",
    policy: fs.readFileSync('./policies/dev/s3.json', 'utf8'),
});

const lambdasDev = new aws.iam.Policy(`${config.generalTagName}-policy-lambdas-dev`, {
    name: 'lambdas-dev',
    path: "/",
    description: "Policy for access to lambdas dev",
    policy: fs.readFileSync('./policies/dev/lambdas.json', 'utf8'),
});

const vpcDev = new aws.iam.Policy(`${config.generalTagName}-policy-vpc-dev`, {
    name: 'vpc-dev',
    path: "/",
    description: "Policy for access to vpc dev",
    policy: fs.readFileSync('./policies/dev/vpc.json', 'utf8'),
});


/**
 * QA
 */
const dynamodbQa = new aws.iam.Policy(`${config.generalTagName}-policy-dynamodb-qa`, {
    name: 'dynamodb-qa',
    path: "/",
    description: "Policy for access to dynamodb qa",
    policy: fs.readFileSync('./policies/qa/dynamodb.json', 'utf8'),
});


/**
 * Production
 */
const ec2Prod = new aws.iam.Policy(`${config.generalTagName}-policy-ec2-prod`, {
    name: 'ec2-prod',
    path: "/",
    description: "Policy for access to ec2 prod",
    policy: fs.readFileSync('./policies/production/ec2.json', 'utf8'),
});

const dynamodbProd = new aws.iam.Policy(`${config.generalTagName}-policy-dynamodb-prod`, {
    name: 'dynamodb-production',
    path: "/",
    description: "Policy for access to dynamodb production",
    policy: fs.readFileSync('./policies/production/dynamodb.json', 'utf8'),
});

const cloudwatchProd = new aws.iam.Policy(`${config.generalTagName}-policy-cloudwatch-prod`, {
    name: 'cloudwatch-production',
    path: "/",
    description: "Policy for access to cloudwatch production",
    policy: fs.readFileSync('./policies/production/cloudwatch.json', 'utf8'),
});

const s3bucketProd = new aws.iam.Policy(`${config.generalTagName}-policy-s3-prod`, {
    name: 's3-prod',
    path: "/",
    description: "Policy for access to s3 prod",
    policy: fs.readFileSync('./policies/production/s3.json', 'utf8'),
});

const cloudwatchProdDahboard = new aws.iam.Policy(`${config.generalTagName}-policy-cloudwatch-prod-dash`, {
    name: 'cloudwatch-production-dashboard',
    path: "/",
    description: "Policy for access to cloudwatch production dashboard",
    policy: fs.readFileSync('./policies/production/cloudwatch_dashboard.json', 'utf8'),
});

const lambdasProd = new aws.iam.Policy(`${config.generalTagName}-policy-lambdas-prod`, {
    name: 'lambdas-prod',
    path: "/",
    description: "Policy for access to lambdas prod",
    policy: fs.readFileSync('./policies/production/lambdas.json', 'utf8'),
});

const vpcProd = new aws.iam.Policy(`${config.generalTagName}-policy-vpc-prod`, {
    name: 'vpc-prod',
    path: "/",
    description: "Policy for access to vpc prod",
    policy: fs.readFileSync('./policies/production/vpc.json', 'utf8'),
});


/**
 * Group General
 */
const groupGeneralUsers = new aws.iam.Group(`${config.generalTagName}-group-gusers`, {
    name: "general_users",
    path: "/users/",
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-gusers-attach1`, {
    group: groupGeneralUsers.name,
    policyArn: forceMfa.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-gusers-attach2`, {
    group: groupGeneralUsers.name,
    policyArn: 'arn:aws:iam::aws:policy/IAMUserChangePassword',
});


/**
 * Group General Basic
 */
const groupGeneralUsersBasic = new aws.iam.Group(`${config.generalTagName}-group-gusersb`, {
    name: "general_users_basic",
    path: "/users/",
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-gusersb-attach1`, {
    group: groupGeneralUsersBasic.name,
    policyArn: 'arn:aws:iam::aws:policy/IAMUserChangePassword',
});


/**
 * Groups Dev
 */
const groupDevelopers = new aws.iam.Group(`${config.generalTagName}-group-developers`, {
    name: "developers",
    path: "/users/",
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-developers-attach2`, {
    group: groupDevelopers.name,
    policyArn: dynamodbDev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-developers-attach3`, {
    group: groupDevelopers.name,
    policyArn: cloudwatchDev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-developers-attach4`, {
    group: groupDevelopers.name,
    policyArn: ec2Dev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-developers-attach5`, {
    group: groupDevelopers.name,
    policyArn: s3bucketDev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-developers-attach6`, {
    group: groupDevelopers.name,
    policyArn: lambdasDev.arn,
});


/**
 * Groups QA
 */
const groupQa = new aws.iam.Group(`${config.generalTagName}-group-qa`, {
    name: "qa",
    path: "/users/",
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-qa-attach2`, {
    group: groupQa.name,
    policyArn: dynamodbQa.arn,
});


/**
 * Groups DevOps
 */
const groupDevOps = new aws.iam.Group(`${config.generalTagName}-group-devops`, {
    name: "devops",
    path: "/users/",
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach2`, {
    group: groupDevOps.name,
    policyArn: dynamodbDev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach3`, {
    group: groupDevOps.name,
    policyArn: cloudwatchDev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach4`, {
    group: groupDevOps.name,
    policyArn: ec2Dev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach5`, {
    group: groupDevOps.name,
    policyArn: s3bucketDev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach6`, {
    group: groupDevOps.name,
    policyArn: lambdasDev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach7`, {
    group: groupDevOps.name,
    policyArn: vpcDev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach8`, {
    group: groupDevOps.name,
    policyArn: dynamodbProd.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach9`, {
    group: groupDevOps.name,
    policyArn: cloudwatchProd.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach10`, {
    group: groupDevOps.name,
    policyArn: ec2Prod.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach11`, {
    group: groupDevOps.name,
    policyArn: s3bucketProd.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach12`, {
    group: groupDevOps.name,
    policyArn: lambdasProd.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-devops-attach13`, {
    group: groupDevOps.name,
    policyArn: vpcProd.arn,
});

/**
 * Groups Load Data
 */
const groupData = new aws.iam.Group(`${config.generalTagName}-group-loaddata`, {
    name: "load_data",
    path: "/users/",
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-loaddata-attach2`, {
    group: groupData.name,
    policyArn: dynamodbDev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-loaddata-attach3`, {
    group: groupData.name,
    policyArn: dynamodbProd.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-loaddata-attach4`, {
    group: groupData.name,
    policyArn: ec2Dev.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-loaddata-attach5`, {
    group: groupData.name,
    policyArn: ec2Prod.arn,
});


/**
 * Groups Operators
 */
const groupOperators = new aws.iam.Group(`${config.generalTagName}-group-operators`, {
    name: "operators",
    path: "/users/",
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-operators-attach1`, {
    group: groupOperators.name,
    policyArn: dynamodbProd.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-operators-attach2`, {
    group: groupOperators.name,
    policyArn: ec2Prod.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-operators-attach3`, {
    group: groupOperators.name,
    policyArn: cloudwatchProd.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-operators-attach4`, {
    group: groupOperators.name,
    policyArn: s3bucketProd.arn,
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-operators-attach5`, {
    group: groupOperators.name,
    policyArn: lambdasProd.arn,
});


/**
 * Groups Monitoring
 */
const groupMonitoring = new aws.iam.Group(`${config.generalTagName}-group-monitoring`, {
    name: "monitoring",
    path: "/users/",
});

new aws.iam.GroupPolicyAttachment(`${config.generalTagName}-group-monitoring-attach5`, {
    group: groupMonitoring.name,
    policyArn: cloudwatchProdDahboard.arn,
});


/**
 * Users for apps - dev
 */
const appDynamodbDev = new aws.iam.User(`${config.generalTagName}-app-dynamodb-dev`, {
    name: "dev-app_dynamodb",
    path: "/system/"
});

const appS3Dev = new aws.iam.User(`${config.generalTagName}-app-s3-dev`, {
    name: "dev-app_s3",
    path: "/system/"
});

new aws.iam.UserPolicyAttachment(`${config.generalTagName}-app-dynamodb-dev-attach1`, {
    user: appDynamodbDev.name,
    policyArn: dynamodbDev.arn,
});

new aws.iam.UserPolicyAttachment(`${config.generalTagName}-app-s3-dev-attach1`, {
    user: appS3Dev.name,
    policyArn: s3bucketDev.arn,
});


/**
 * Users for apps - production
 */
const appDynamodbProd = new aws.iam.User(`${config.generalTagName}-app-dynamodb-prod`, {
    name: "production-app_dynamodb",
    path: "/system/"
});

const appS3Prod = new aws.iam.User(`${config.generalTagName}-app-s3-prod`, {
    name: "production-app_s3",
    path: "/system/"
});

new aws.iam.UserPolicyAttachment(`${config.generalTagName}-app-dynamodb-prod-attach1`, {
    user: appDynamodbProd.name,
    policyArn: dynamodbProd.arn,
});

new aws.iam.UserPolicyAttachment(`${config.generalTagName}-app-s3-prod-attach1`, {
    user: appS3Prod.name,
    policyArn: s3bucketProd.arn,
});

