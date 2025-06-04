dynamoDB, requests
#================================================= jun
```
import json

def lambda_handler(event, context):
    # TODO implement
    return {
        'statusCode': 200,
        "statusDescription" : "200 OK",
        "isBase64Encoded" : False,
        "headers" : {
            "Content-Type" : "application/json"
        },
        "body" : '{"message" : "Hello Lambda "}'
    }
```
#================================================= jun2
```
import json
import boto3
from datetime import datetime

def lambda_handler(event, context):
    # TODO implement
    s3 = boto3.client('s3')

    bucket_name = 'sgu-202561-s3'

    prefix = 'uploaded/'

    now = datetime.now(). strftime('%Y-%m-%d_%H-%M-%S')

    filename = f'{prefix}hello_{now}.txt'

    content = f'Hello Junhee! this file was created at {now}'

    s3.put_object(
        Bucket = bucket_name,
        Key=filename,
        Body=content.encode('utf-8')
    )

    return {
        "statusCode": 200,
        "statusDescription": "200 OK",
        "isBase64Encoded" : False,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": '{"message" : "업로드완료"}'
    }
```
#================================================= dynamo
```
import boto3

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('sgu-202561-user-likes')
    # 덮어쓰기할 항목
    response = table.put_item(
        Item={
            'user_id': 'jihoon07',
            'product_name': '제로콜라'
        }
    )
    return {
        'statusCode': 200,
        'body': 'PutItem successful!'
}
```
#================================================= LambdaA
```
import boto3  # AWS 서비스와 상호작용하기 위한 SDK
import json   # JSON 직렬화를 위한 모듈

def lambda_handler(event, context):
    # AWS EC2, SNS, Lambda 클라이언트 생성
    ec2 = boto3.client('ec2')              # EC2 상태 확인용
    sns = boto3.client('sns')              # 알림 발송용
    lambda_client = boto3.client('lambda') # 다른 Lambda 호출용

    # 감시할 인스턴스 ID 리스트 (하드코딩됨)
    instance_ids = ['i-003885b116154addc']

    # SNS 주제 ARN (메일 알림 발송용)
    sns_topic_arn = 'arn:aws:sns:ap-northeast-2:443370697536:sgu-202561-assigment'

    # 상태 이상 시 호출할 Lambda 함수 이름
    lambda_b_name = 'sgu-202561-LambdaB'

    # 대상 인스턴스들의 상태 조회 (중지, 실행 여부 확인)
    response = ec2.describe_instance_status(
        InstanceIds=instance_ids,
        IncludeAllInstances=True  # stopped 인스턴스도 포함해야 함
    )

    # 결과 저장용 리스트들
    instance_statuses = []       # 상태 요약 리스트
    warnings_sent = []           # 보낸 경고 메일 기록
    lambda_invocations = []      # 호출된 LambdaB 기록

    # 조회된 각 인스턴스에 대해 반복 처리
    for instance in response['InstanceStatuses']:
        instance_id = instance['InstanceId']                     # 인스턴스 ID
        state = instance['InstanceState']['Name']               # 상태 이름 (e.g., running, stopped)

        # 상태 정보를 리스트에 저장 (최종 반환용)
        instance_statuses.append({
            'InstanceId': instance_id,
            'State': state
        })

        # 상태가 'running'이 아니면 경고 알림 + LambdaB 호출
        if state != 'running':
            # 경고 메시지 생성
            message = f"⚠️ 경고: EC2 인스턴스 {instance_id} 상태가 '{state}'입니다."
            subject = f"[경고] EC2 상태 이상: {instance_id}"

            # SNS를 통해 이메일 알림 발송
            sns.publish(
                TopicArn=sns_topic_arn,    # SNS 주제 대상
                Message=message,          # 본문
                Subject=subject           # 제목
            )

            # 경고 기록 저장
            warnings_sent.append({
                'InstanceId': instance_id,
                'MessageSent': message
            })

            # LambdaB 함수 호출 (비동기 방식으로 인스턴스 시작 요청)
            lambda_client.invoke(
                FunctionName=lambda_b_name,                 # 호출 대상 Lambda 이름
                InvocationType='Event',                     # 비동기 실행
                Payload=json.dumps({
                    "InstanceId": instance_id               # 시작시킬 인스턴스 ID 전달
                }).encode('utf-8')
            )

            # 호출 기록 저장
            lambda_invocations.append({
                'InvokedFunction': lambda_b_name,
                'TargetInstance': instance_id
            })

    # 최종 결과 반환
    return {
        'statusCode': 200,
        'body': {
            'Instances': instance_statuses,          # 전체 인스턴스 상태 요약
            'Warnings': warnings_sent,               # 발송된 경고 목록
            'LambdaInvocations': lambda_invocations  # LambdaB 호출 내역
        }
    }
```
#================================================= LambdaB
```
import boto3

def lambda_handler(event, context):
    ec2 = boto3.client('ec2')
    instance_id = event.get('InstanceId')

    if not instance_id:
        return {
            'statusCode': 400,
            'body': 'InstanceId가 전달되지 않았습니다.'
        }

    response = ec2.start_instances(InstanceIds=[instance_id])

    return {
        'statusCode': 200,
        'body': f"인스턴스 {instance_id} 시작 요청 완료",
        'response': response
    }

```
#================================================= dynamo-post-api
```
import boto3
import json
from datetime import datetime

def lambda_handler(event, context):
    try:
        # 요청 본문 파싱
        body = json.loads(event['body'])
        user_id = body['user_id']
        product = body['product']
        timestamp = datetime.now().isoformat()

        # 선택적 필드들 (있으면 저장, 없으면 None)
        reason = body.get('reason')
        brand = body.get('brand')
        price = body.get('price')
        color = body.get('color')

        # 저장할 항목 구성
        item = {
            'user_id': user_id,
            'timestamp': timestamp,
            'product': product
        }

        # 선택 필드가 있는 경우만 추가
        if reason:
            item['reason'] = reason
        if brand:
            item['brand'] = brand
        if price:
            item['price'] = price
        if color:
            item['color'] = color

        # DynamoDB 저장
        table = boto3.resource('dynamodb').Table('sgu-202561-user-likes-time')
        table.put_item(Item=item)

        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': '저장 완료',
                'user_id': user_id,
                'timestamp': timestamp
            }, ensure_ascii=False)
        }
    
    except Exception as e:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': str(e)}, ensure_ascii=False)
        }
```
#================================================= dynamo-s3
```
import json
import boto3
from datetime import datetime

def lambda_handler(event, context):
    s3 = boto3.client('s3')
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('sgu-202561-user-likes-time')
    bucket_name = 'sgu-202561-s3'
    object_key = 'dynamo_data/user_likes_data_3.json'
    
    try:
        # 1. S3에서 파일 읽기
        response = s3.get_object(Bucket=bucket_name, Key=object_key)
        content = response['Body'].read().decode('utf-8')
        data_list = json.loads(content)  # JSON 배열로 파싱
        
        # 2. 각 항목 반복 처리
        for record in data_list:
            user_id = record.get('user_id')
            product = record.get('product')
            if not user_id or not product:
                print(f"user_id 또는 product 누락: {record}")
                continue
            
            item = {
                'user_id': user_id,
                'timestamp': datetime.now().isoformat(),
                'product': product
            }
            table.put_item(Item=item)
            print(f"Inserted: {item}")
        
        return {
            'statusCode': 200,
            'body': json.dumps('전체 레코드 Insert 완료', ensure_ascii=False)
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)}, ensure_ascii=False)
        }
```
#================================================= layertest
```
import emoji

def lambda_handler(event, context):
    text = "AWS Lambda is awesome! :rocket:"
    result = emoji.emojize(text, language='alias')
    print(result)
    return {
        'statusCode': 200,
        'body': result
    }
```
#================================================= httpbin-get
```
import requests

def lambda_handler(event, context):
    url = "https://httpbin.org/get"
    response = requests.get(url)
    data = response.json()
    print("API 응답:", data)
    return {
        'statusCode': 200,
        'body': str(data)
    }
```
#================================================= httpbin-post
```
import requests
import json

def lambda_handler(event, context):
    url = "https://httpbin.org/post"
    payload = {"name": "test"}
    response = requests.post(url, json=payload)
    data = response.json()
    print("API 응답:", data)
    return {
        'statusCode': 200,
        'body': str(data)
    }

```
