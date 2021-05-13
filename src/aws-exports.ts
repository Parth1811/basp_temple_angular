/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "dev": {
        "aws_project_region": "ap-south-1",
        "aws_appsync_graphqlEndpoint": "https://h2hwtmeaqvcwfdwvnimx4romfe.appsync-api.ap-south-1.amazonaws.com/graphql",
        "aws_appsync_region": "ap-south-1",
        "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
        "aws_cognito_identity_pool_id": "ap-south-1:95cba9a1-bb8a-4bdf-8361-b3015326c14e",
        "aws_cognito_region": "ap-south-1",
        "aws_user_pools_id": "ap-south-1_7sV4xop2D",
        "aws_user_pools_web_client_id": "55uv5dkvc6072jhia9o6d37oen",
        "oauth": {
            "domain": "templemanagement.auth.ap-south-1.amazoncognito.com",
            "scope": ["phone", "email", "profile", "openid", "aws.cognito.signin.user.admin"],
            "redirectSignIn": "http://localhost:4200/",
            "redirectSignOut": "http://localhost:4200/",
            "responseType": "code",
            "options": {
                "AdvancedSecurityDataCollectionFlag": false
            }
        }
    },
    "prod": {
        "aws_project_region": "ap-south-1",
        "aws_appsync_graphqlEndpoint": "https://h2hwtmeaqvcwfdwvnimx4romfe.appsync-api.ap-south-1.amazonaws.com/graphql",
        "aws_appsync_region": "ap-south-1",
        "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
        "aws_cognito_identity_pool_id": "ap-south-1:95cba9a1-bb8a-4bdf-8361-b3015326c14e",
        "aws_cognito_region": "ap-south-1",
        "aws_user_pools_id": "ap-south-1_7sV4xop2D",
        "aws_user_pools_web_client_id": "6o59lr7i146pb3msooc90fto0r",
        "oauth": {
            "domain": "templemanagement.auth.ap-south-1.amazoncognito.com",
            "scope": ["phone", "email", "profile", "openid", "aws.cognito.signin.user.admin"],
            "redirectSignIn": "https://dev.df6fo5c4hc07u.amplifyapp.com/",
            "redirectSignOut": "https://dev.df6fo5c4hc07u.amplifyapp.com/",
            "responseType": "code",
            "options": {
                "AdvancedSecurityDataCollectionFlag": false
            }
        }
    }
}


export default awsmobile;
