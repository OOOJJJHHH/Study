#1장

### 클라우드 컴퓨팅 이점
`Agility` : 민첩성 빠르고 혁신적으로 구축

`Elastic` : 탄력성, 확장가능, 손쉽게 확장 및 축소가능

`Coast saving` : 비용절감, 사용한 만큼 지불, Case by Case

`손쉬운 글로벌 서비스`

`예상치 못한 트래픽 폭주 대응`

`빅데이터, 인공지능 서비스 확장`

### 클라우드 컴퓨팅 서비스 유형
`IaaS` : 
서버, 스토리지, 네트워크, 가상화
- 사용자가 OS 및 애플리케이션 관리 자체 서버없이 EC2와 S3로 웹사이트 호스팅

`PaaS` : 
+ 운영체제, 미들웨어, 런타임
- 개발 및 배포를 위한 플랫폼 제공
- 서버 및 OS 관리 불필요

`SaaS` : 
+ 데이터, 애플리케이션
- 사용자가 소프트웨어를 설치 없이 이용
- 유지보수 및 업데이트 제공자가 수행

# 2장

## AWS의 핵심 서비스 개요
### 컴퓨팅 서비스
- EC2 : 가상서버, 온디멘드/스팟 인스턴스
- Lambda : 서버리스 컴퓨팅, 이벤트 기반 실행

### 스토리지 서비스
- S3 : 객체 스토리지, 정적 웹 호스팅
- EBS : EC2 인스턴스를 위한 블록 스토리지 ( EC2 내부 저장공간 같은 느낌 )

### 네트워크 및 콘텐츠 전송
- VPC : AWS 내 네트워크 구성
- Route 53 : 도메인 네임 서비스(DNS)
- CloudFront : CDN(콘텐츠 전송 네트워크), 엣지 로케이션을 사용

### 테이터베이스 서비스
- RDS : 관리형 데이터베이스
- DynamoDB : NoSQL, 키-값 저장소

### 보안 및 접근관리
- IAM : 사용자 및 권한 관리
- Security Group (보안그룹) : 인바운드 및 아웃바운드 트래픽 제어

## AWS 구조
### 리전 : 가장 큰 단위, 리전 안에 다양한 가용영역이 존재
- 리전 고려할 점 : 지연 속도, 법률(데이터, 서비스 제광 관련), 사용가능한 AWS 서비스(각 리전별로 런칭이 다름)
- 최초의 리전 : us-east-1

### 가용영역
#### 리전의 하부 단위
- 하나의 리전은 2개 이상의 가용영역으로 구성
- AZ라고 부름
- 하나 또는 그 이상의 물리적 데이터 센터

#### 가용영역 구성
- 하나이상의 데이터 센터로 구성
- AZ간의 연결은 매우 빠른 전용 네트워크로 구성
- 반드시 물리적으로 일정 거리 (몇 KM 이상) 떨어져 있음
- 다만 모든 AZ는 서로 100KM이내의 거리에 위치
- 여러 재해에 대한 대비 및 보안

## 글로벌 서비스와 리전 서비스
### 글로벌 서비스
- 데이터 및 서비스를 전 세계의 모든 인프라가 공유
- ex) IAM, Route53, WAF, Biling

### 지역 서비스
- 특정 리전을 기반으로 데이터 및 서비스를 제공
- 대부분 지역 서비스
- EC2, S3, RDS

## IAM
- AWS 리소스에 대한 접근을 안전하게 제어하는 서비스
- 누가 어 떤 AWS 서비스에 어떤 권한으로 접근할 수 있는지를 관리하는 역할
### IAM 요소
- 사용자 -> AWS 리소스에 접근하는 개별 계정
- 그룹 => 여러 사용자에게 동일한 권한을 부여할 수 있는 그룹
- 역할 => 특정 권한을 임시적으로 부여하는 역할(AWS 서비스 간 권한 위임 가능)
- 정책 => JSON 형식으로 작성된 접근 권한 규칙
- MFA => 다중 인증으로 보안 강화

## IAM의 주요기능
### AWS 리소스 접근 제어
- IAM을 사용하여 AWS 서비스와 리소스에 대한 접근을 세밀하게 관리 가능
- 특정 사용자나 그룹에게 EC2, S3, RDS 등 개별 서비스에 대한 권한 부여 가능

### 정책 기반 접근 관리
- JSON 형식의 Policy 문서를 사용하여 세부적인 접근 권한을 설정

## IAM의 주요기능

### IAM 역할 및 서비스 연동
### MFA(다중 인증) 적용 가능
### AWS 루트 계정 보호

## IAM 사용 시 주의할 점
- 루트 계정 사용 최소화
- 최소 권한 원칙 준수 -> 꼭 필요한 권한만 부여
- IAM 엑세스 키 노출 금지

# 3장
## EC2 모니터링
- 생성한 EC2 putty로 접근하기
- 슈퍼 유저로 변경 : sudo su -
- http 데몬 설치 : yum install httpd -y
- http 데몬 실행 : systemctl start httpd
- index.html 만들기 : cd /var/www/html, vi index.html

## 자동 모니터링
- Cloud Watch 이동 -> 경보 생성 클릭 -> 지표선택
- 지표 선택 -> CPUUtilization -> 인스턴스별 지표 -> 나의 인스턴스 체크 -> 옵션 탭 -> 누적면적 -> 지표선택 클릭
- 기간 : 1분 -> 임계값 : 30 -> 추가구성 펼치기 -> 누락된 데이터 처리 -> 다음 클릭
- 새 주제 생성 -> 새 주세 생성 이름입력( High_CPU_Alarm ) -> 알림 수신할 이메일 엔드포인트 -> 주제 생성 -> 알림 수신한 이메일

## EC2 접근
- Amazon Linux 리포지토리 package 활성화 :amazon-linux-extras install -y epel
- CPU 부하 설정 툴 설치 : yum install -y stress-ng
- CPU 부하 발생 : stress-ng --cpu 1 --timeout 10m --metrics --times

## 네트워크 경고 만들기
#### ec2 : sudo yum install -y iperf3
- 설치 후, iiperf3 -s & //실행해서 서버 모드 활성화
- iperf3 -s & sleep 2 && stress-ng --cpu 1 --timeout 10m --metrics --times & iperf3 -c 127.0.0.1 -t 600 -b 100M //네트워크 부하 발생
#### cloudwatch 지표 : NetworkOut, 임계값 : NetworkOut >= 2000
#### 경보이름 : Hight_Network_Alarm
#### ec2 재기동
#### 이메일로 알람오기

# 4장
### S3란
- AWS에서 EC2 서비스와 더불어 가장 오래되고 기본이 되는 객체 스토리지 서비스
- Amazon  S3는 `확장성`,`내구성`, `보안성`이 뛰어난 객체 스토리지 서비스
- 99.9999999%의 내구성 제공, 데이터 손실 최소화
- 데이터 저장 공간이 거의 무제한
- 전 세계 수백만 기업의 데이터를 저장하는 핵심 서비스

### S3특징
- 객체 스토리지 서비스 : 파일 저장 전용 (EBS/EFS 등 블록 스토리지와 구분) -> 어플리케이션 설치 불가
- 글로벌 서비스 단위 : 데이터는 특정 리전에 저장됨
- 무제한 용량 지원 : 단일 객체는 0byte ~ 5TB 저장 가능
- 최소 3개 이상의 물리적으로 분리된 가용 영역에 데이터 복제
- 높은 내구성과 고가용성을 제공
- OS 도움 없이 객체별 접근 가능, 데이터 저장 및 활용이 용이

## 버킷과 객체
### 버킷
- S3에서 저장공간을 구분하는 단위(디렉터리 개념)
- 전 세계 고유 이름을 가져야 함 -> 리전과 무관하게 중복 불가
- 한번 생성 시, 이름 변경 불가
### 객 체 : S3에 저장되는 기본 매체
- Owner : 소유자 정보
- Key : 객체 이름(경로 역할)
- Value : 파일 데이터 자체
- Version ID : 파일 데이터 자체
- Version ID : 파일 버전 식별자 (버전 관리 활성화 시에만 생성됨
- Metadata : 파일 관련 정보 (기본 메타데이터 외에 사용자 정의도 가능함)

## S3의 내구성 & 가용성
- 내구성 : 파일을 잃어버리지 않을 능력
- 가용성 : 내가 원할 때 그 파일을 쓸 수 있는 능력
- 최소 3개 AZ에 중복 저장 (Standard 기준)
- 내구성 : 파일 손실 확률 극히 낮음
- 가용성 SLA : 99.9%
- SLA : Service Level Agreement, 즉 서비스 수준 협약
- 이 서비스를 얼마나 안정적으로 사용할 수 있는가
- 99.999% : 1년 중 약 5분 이하의 다운타임
- 99.99% : 1년 중 약 52분 이하의 다운타임
- 99.95% : 1년 중 약 4시간 22분 이하의 다운타임
- 99.90% : 1년 중 약 1일 18시간 이하 다운

## S3 보안
### 기본적으로 모든 객체는 Private 상태로 생성됨
### 퍼블릭 접근은 명시적으로 허용해야 함 (웹 호스팅 등)
### Bucket Policy : 버킷 단위 정책

### IAM 정책
- Identity-based Policy (자격 증명 기반 정책)
  - IAM 사용자. 그룹, 역할에 부여하는 정책
  - 사용자 입장에서 `누가 무엇을 할 수 있는가` 를 설정함
- Resource-based Policy (리소스 기반 정책)
  - 리소스 입장에서 `내가 뭘 할 수 있는가`
  - 리소스(S3, SQS)에 직접 부여하는 정책
  - 이 리소스에 누가 접근 가능한가를 정의

## S3 버킷 정책
- 버킷 단위로 적용되는 리소스 기반 정책
- 언제, 어디서, 누가, 무엇을, 어떻게 할 수 있는지 정의
- 예시 : arn:aws:s3:::my-bucket/images/* -> 해당 경로에 있는 모든 객체 대상으로 권한 설정
- 익명 사용자 또는 다른 계정에 대한 권한 부여도 가능

```java
{
 "Effect":"Allow",
"Principal":"*",
"Action":"s3:GetObject",
"Resource":"arn:aws:s3:::demo.rwlecture.com/*"
}
```
#5장
## S3 정적 호스팅 실습
- 생성된 버킷을 활용하여 정적인 호스팅 실습을 진행
- index.html을 생성
- S3버킷에 index.html에 포함될 사진도 같이 업로드 한다
- 버킷의 퍼블릭 엑세스를 허용한다

- index.html에서 객체 URL로 접근

```java
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicWebsiteAllow",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::sgu-202500-s3/*"
    }
  ]
}
```
## index.html , class/img/ 폴더만 GetObject 액션만 줄 수 있음
```java
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicWebsiteAllow",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": [
                "arn:aws:s3:::sgu-202500-s3-test/index.html",
                "arn:aws:s3:::sgu-202500-s3-test/class/img/*"
            ]
        }
    ]
}
```
## 특정 IP만 접근 가능
```java
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicWebsiteAllow",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": [
                "arn:aws:s3:::sgu-202500-s3-test/index.html",
                "arn:aws:s3:::sgu-202500-s3-test/class/img/*"
            ],
            "Condition": {
                "IpAddress": {
                    "aws:SourceIp": "123.123.123.123"
                }
            }
        }
    ]
}
```
## 특정 폴더 다운로드를 제한
### class/test 폴더에 데이터는 업로드 하고 싶으나 다운로드를 제한
#### "Effect": "Deny” “Action": "s3:GetObject”
```java
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicWebsiteAllow",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": [
                "arn:aws:s3:::sgu-202500-s3-test/index.html",
                "arn:aws:s3:::sgu-202500-s3-test/class/img/*"
            ],
            "Condition": {
                "IpAddress": {
                    "aws:SourceIp": "123.123.123.123"
                }
            }
        },
        {
            "Sid": "DenyGetObject",
            "Effect": "Deny",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::sgu-202500-s3-test/class/test/*"
        }
    ]
}
```
# 6장
## EC2 인스턴스 생성시
```java
#!/bin/bash
yum install httpd php -y
aws s3 cp s3://sgu-202500-s3/index.php /var/www/html --region ap-northeast-2
systemctl restart httpd

```
## AWS CLI
### Amazon Web Services Command Line Interface
AWS 리소스(S3, Ec2, IAM 등)를 터미널이나 명령 프롬프트로 제어할 수 있는 도구
콘솔을 클릭하지 않고도 명령어만으로 S3버킷 생성, 파일 업로드, EC2 실행 같은 작업가능

## AWS S3 CLI 주요 명령어
`aws s3 ls : 버킷 목록 확인`
`aws s3 ls s3://버킷이름/ : 버킷 안의 파일 목록`
`aws s3 cp 로컬경로 s3://버킷이름/경로 : 파일 업로드`
`aws s3 cp s3://버킷이름/경로 로컬경로 : 파일 다운로드`

#### 디렉토리(폴더) 업로드/다운로드
`다운로드 : aws s3 cp s3://my-bucket/folder ./local-folder --recursive`
`업로드 : aws s3 cp ./local-folder s3://my-bucket/folder --recursive`

#7장
## Auto Scaling
### 애플리케이션 또는 시스템의 성능을 높이기 위해 컴퓨팅 리소스를 확장하거나 축소하는 것
### 요청이 많아질 때 처리할 수 있도록 서버를 키우는 것

## Scale-Up 서버 한 대의 성능을 높이는 방식
- cpu의 성능을 4배로 하는 대신 가격은 64배
### 장점
- 단순하고 설정이 쉬움
###
- 물리적인 한계 존재 (더 이상 업그레이드 불가)
- 재시작 필요성 있음
- 하나의 서버에만 의존 -> 장애 발생 시 위험

## Scale-Out 서버를 여러 대로 늘려서 처리 성능을 확장하는 방식
### 장점
- 무중단 확장 가능
### 단점
- 복잡한 아키텍쳐, Lodad Balancer(ELB) 등의 구성 필요

## Auto Scaling
### 트래픽 상황에 맞춰 서버 수를 자동으로 늘리거나 줄여주는 AWS 서비스
- 트래픽 증가 시 자동으로 인스턴스 증가
- 사용량 감소시 자동으로 인스턴스 축소
- 리소스 비용 절감 + 고가용성 유지

## Auto Scaling 구성요소
- Launch Template
- Auto Scaling Group (ASG)
- Scaling Policy (스케일링 정책)
- CloudWatch 알람

## Launch Template
- 새 인스턴스를 생성할 때 필요한 설정을 담고 있는 설계도
- 어떤 AMI(이미지)로 만들기
- 인스턴스 타입(t3.micro 등)
- 키 페어, 보안 그룹
- UserData 스크립트 (초기 셋팅 자동화)

## ASG
- 인스턴스를 묶어서 관리하는 단위
- 최소/최대/원하는(Desired) 인스턴스 수 설정
- 실제 인스턴스 수를 계속 모니터링하고 자동 조절
- Availability Zone 간 분산 가능
`실시간 모니터링 방법 (Health Check, CloudWatch, 스케줄링 기반)`

## Scaling Policy
- 언제, 어떻게 서버 수를 조절할지에 대한 규칙
- Target Tracking : 평균 CPU 60% 유지처럼 목표 설정
- Step Scaling : CPU 70~80% -> +1대, 80% 이상 _> +2대
- Scheduled Scaling : 특정 시간에 확장(ex) 매일 오루 6시)

## CloudWatch
- 지표를 감시하다가 스케일링 정책을 실행하는 역할
- CPU 사용률, 네트워크 트래픽, 메모리 등 모니터링
- 조건 충족 시 Scaling Policy 트리거
- 실시간 알람 + 로그 기록 가능

`CPUUtilization	CPU 사용률 (%)`
`NetworkIn / NetworkOut	들어오는/나가는 네트워크 트래픽 (Bytes)`
`DiskReadBytes / DiskWriteBytes	디스크 읽기/쓰기 바이트 수`
`StatusCheckFailed	인스턴스 상태 검사 실패 여부`

## 사용자 데이터 추가 -> 시작 템플릿 생성
```dart
#!/bin/bash
yum update -y
amazon-linux-extras install -y epel
yum install -y httpd stress-ng
systemctl enable httpd
systemctl start httpd
echo "Hello from Auto Scaling Instance" > /var/www/html/index.html
```
## Auto Scaling Group(ASG)의 설정값
- 원하는 용량 : 현재 운영하고 싶은 인스턴스 수 
- 최소 용량 : 줄어들 수 있는 하한선
- 최대 용량 : 늘어날 수 있는 상한선

# 7장
## ELB : AWS에서 제공하는 트래픽 분산 서비스
- ElB는 들어오는 어플리케이션 트래픽을 Amazon 인스턴스, 컨테이너, IP 주소, 람다 함수와 같은 여러 대상에 자동 분산 시킴
- ELB는 단일 가용영역, 여러 가용 영역에서 다양한 어플리케이션 부하를 처리가능
- ELB에서 제공하는 3가지 로드밸런서는 모두 어플리케이션의 내결합성에 필요한 고가용성, 자동 확장/축소, 강력한 보안을 갖추고 있음

## ELB 특징
- 다수의 서비스에 트래픽을 분산 시켜주는 서비스
`Health Check : 직접 트래픽을 방생시켜 Instance가 살아있는지 체크`
- Autoscaling과 연동 가능
- 여러 가용영역에 분산 가능
- 지속적으로 IP주소가 바뀌면 IP 고정 불가능 : `항상 도메인 기반으로 사용`
#### 총 3가지 종류
`Application Load Balancer` : 똑똑함  ( 정적임 ex) 웹 페이지, API )
- 트래픽을 모니터링하여 라우팅 가능
- image.test.com -> 이미지 서버로, web.test.com -> 웹 서버로 트래픽 분산
- 특정 호스트네임이나 경로 기반으로 분기 처리
`Network Load Balancer` : 빠름 ( 실시간 ex) 게임, 실시간 통신 )
- TCP 기반 빠른 트래픽 분산
- Elastic IP 할당 가능
- 예시 : 게임 서버, 실시간 통신, 고성능 백엔드
`Classic Load Balancer` : 옛날

## ALB - Target Group
### 타겟 그룹 : ALB가 트래픽을 분산시킬 대상을 논리적으로 묶어놓은 그룹  ||  ALB가 트래픽을 보낼 대상 서버 묶음
타겟 그룹 기준으로 요청 분배
EC2 인스턴스, IP 주소, Lambda 함수, ELB 타켓 그룹 가능
역할
- ALB -> 라우팅 구칙에 따라 타겟 그룹으로 요청 전달
- 타겟 그룹은 내부에서 등록된 인스턴스 중 헬스체크를 통과한 대상에게 트래픽 전달
- 타켓 그룹별로 포트, 프로토콜, 헬스체크 설정 가능

`프로비저닝 중 : 리소스를 할당하고 준비하고 있는 단계`

- 컴퓨팅 자원을 배정하고

- 스토리지를 연결하고

- 네트워크 세팅을 하고

- 보안그룹, IP 주소 등을 설정 중이라는 뜻입니다











