# 알게 된 점
## 플루터 에뮬레이터와 웹에서 동작시킬 때 구동 방식 차이점
```
플러그인 호환성으로 인해서 웹에서는 일부 기능만 동작함

파일 접근/선택에 제한적이기 때문에 
file_picker_for_web이라는 플러그인을 사용

shared_preferences_web (로컬 스토리지 이용)를 이용해서
로그인과 관련된 JWT토큰을 저장하고 빠르게 사용가능
```
### 스프링과 플루터의 소통
```
web 에서는
fetch API를 통해 요청을 보냄
CORS 설정 반드시 필요
일부 헤더는 브라우저에서 지원 안됌(Authorization, Set-Cookie)
쿠키 기반 인증 시 브라우저 보안 설정 따라 다름

모바일 앱에서는
직접 API를 요청 가능(native socket 이용)
CORS 설정 필요 X
도메인 접근하려고 할때 로컬호스트 접근 시 10.0.2.2를 사용
헤더 부분에 있어서는 자유롭게 커스텀 할 수 있는 기능이 많이 있다
```

```
bottomNavigationBar를 통해 바텀 네비게이션 바에서 선택한 메뉴에 따라 화면이 전환되게 구현
```

```
Flutter에서는 http 패키지를 사용해 REST API 요청을 보내고,
Spring 서버에서는 JSON 응답을 받아 Flutter에서 이를 처리합니다.

final uri = Uri.parse('http://localhost:8080/api/auth/getTopPosts');
final response = await http.get(
  uri,
  headers: {
    'Authorization': 'Bearer ${currentUser?.jwtToken ?? ''}',
  },
);

- URI: 요청할 Spring API 경로 설정
- Method: GET, POST, DELETE 등 HTTP 메서드 사용
- Headers: JWT 토큰 같은 인증 정보 포함
- Body: 필요 시 JSON 또는 Multipart Form Data 전송
```

```
final decodedBody = utf8.decode(response.bodyBytes); // ✅ 한글 깨짐 방지
```

```
로그인을 하면 스프링에 post 요청을 하고 해당 요청에 대한 응답으로 JWTToken을 톨려준다
그리고 해당 토큰을 sharedPreference에 토큰과 이메일, 닉네임, 비번을 저장해서 전역에서 사용할 수 있도록 한다
그리고 currentUser 라는 전역 변수에도 상태값을 저장해서 전역 상태에 영향을 준다
```

```
sharedPreferences 사용 영역
🔍 목적: 사용자가 오늘 이미 명언을 본 적이 있다면 다시 API를 호출하지 않도록 캐싱된 값을 불러옵니다.
🔐 키 구조: ${이메일}_quote_2025-06-23처럼 유저별+날짜별로 저장
```

```
ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text('로그아웃 되었습니다.'),
        backgroundColor: MyApp.primaryBrown,
        behavior: SnackBarBehavior.floating,
      ),
    );

- SnackBar 위젯의 behavior 속성은 스낵바가 화면에 어떻게 표시될지 위치 및 레이아웃 방식을 지정하는 속성

fixed	기본값. 화면 하단에 전체 너비로 고정됨. BottomNavigationBar 위에 붙음
floating	스낵바가 모서리에서 살짝 떨어져서 띄워진 형태로 나타남. 둥글고 작아짐
```

```
MaterialPageRoute(
  builder: (context) => SomePage(),
)

- Flutter에서 기본으로 제공하는 페이지 전환 도구
- 새 페이지로 전환할 때 builder에 다음 페이지 위젯을 지정
```


# 9_Week_프로젝트 계획서

## 프로젝트의 목표를 정하고 구체적인 시작을 하기 전 개발단계에 대한 정의

- 프로젝트 명 : 오늘 하루

- 프로젝트 개발의 목적 : 앱 개발의 구조와 이해, 프로젝트 경험 향상

- 프로젝트 수행 장소 : 노트북만 있다면 어떤 장소든 무관

- 시작일 ~ 종료일 :  25-04-29  ~  25-06-21 

- 프로젝트 내용 : 명언 카드 앱

```
 매일 랜덤으로 추천 명언을 알려주고 해당 명언이 마음에 들면 자신의 스타일 대로 메모장을 꾸며서
자신의 다이어리 같은 공간에 모아둘 수 있는 앱

꾸밀 수 있는 방법은 기본적으로 제시될 이모티콘과 메모장의 형태
메모장의 형태는  제공되는 것 뿐만 아니라 사용자의 로컬 사진 앱에서 사진을 가져와서 메모장에 적용할 수 있음

```
앱 사용 대상 : 남녀노소 불문

# 10_Week_요구사항 목록, 기획 및 설계, 개발 환경 설정

- 개발 인원 :: 1명

- 개발 툴 :: Android Studio

- 개발 언어 :: 다트언어

- 사용할 DB :: MySql

- 사용되는 기술 :: DB와의 데이터 교류,  UI 디자인, 이미지 저장/다운, 컴포넌트 변환

- 사용할 색상 정의 :

`배경 : #FFF1F3`

`텍스트 (기본) : #4B4B4B`

`포인트 색상 : #F497B6`

`보조 강조 색상 : #FFB5C5`

`버튼/강조 텍스트 : #C94C7C`

#### DB관련 고민 중...
MySql을 사용

스프링을 활용해서 mysql과 연동
-> 이후 플러터에서 요청을해서 응답

기본적인 환경구성 단계 준비

# 11_Week_기능 개발(레이아웃)

# 12_Week_기능 개발(기본 기능)

# 13_Week_기능 개발(세부 기능)

# 14_Week_테스트 및 수정사항 반영, 배포 준비
