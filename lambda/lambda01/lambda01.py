import json

# print data passed by event object
def lambda_handler(event, context):
    
    print("number of days", int(event['msg']['days']))
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }

