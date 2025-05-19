# Firstpage.dart 설명

이 파일은 Flutter 앱에서 첫 번째 화면을 구성하는 `StatelessWidget`입니다.  
버튼을 누르면 `SecondPage`로 데이터를 전달하며 이동하고, 결과를 받아옵니다.

---

## 주요 기능

- `AppBar`에 `"First"`라는 제목을 표시
- 버튼을 눌렀을 때:
  - `Person` 객체 생성
  - `Navigator.pushNamed()`를 통해 `/second`로 이동
  - `arguments`를 통해 데이터 전달
  - 돌아올 때 받은 결과를 `print()`

---

## 코드

```dart
import 'package:c_61/Person.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:c_61/SecondPage.dart';

class Firstpage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("First"),
      ),
      body: ElevatedButton(
        onPressed: () async {
          // 1. Person 객체 생성
          final person = Person("홍길동", 20);

          // 2. '/second' 라우트로 이동하며 person 전달
          final result = await Navigator.pushNamed(
            context,
            '/second',
            arguments: {
              "person": person
            },
          );

          // 3. SecondPage에서 돌아올 때 result를 출력
          print(result);
        },
        child: Text("다음 페이지로"),
      ),
    );
  }
}
