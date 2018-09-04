var awsConfig = {
    regionName : 'cn-north-1',
    userPoolId : 'us-east-1_xxxxxxxxx',
    clientId : 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
    identityPoolId : 'cn-north-1:eb890b86-90a6-4409-8b3e-05e564a09751',
    samlIdpArn: 'arn:aws-cn:iam::242602917853:saml-provider/ADFS',
    relayingPartyId: 'AWSADFS',
    adfsUrl: 'https://win-5o24imea81l.awsdemo.com/adfs/ls/IdpInitiatedSignOn.aspx',
    adfsLogoutUrl: 'https://win-5o24imea81l.awsdemo.com/adfs/ls/?wa=wsignout1.0',
    roleSelectedArn: 'arn:aws-cn:iam::242602917853:role/AWS-Production',
    bucket: 'private-cognito-s3'
};

