# SecondPage.dart 설명

이 파일은 `StatelessWidget`으로 구성된 두 번째 화면입니다.  
첫 번째 화면(`Firstpage`)에서 전달된 `Person` 객체를 받아 출력하고, 다시 결과를 반환합니다.

---

## 주요 기능

- `ModalRoute.of(context).settings.arguments`를 통해 전달된 데이터 수신
- `Person` 객체에서 이름과 나이를 추출하여 화면에 출력
- 버튼을 눌러 이전 페이지로 돌아가며 `"ok"` 문자열을 반환

---

## 코드

```dart
import 'package:c_61/FirstPage.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'Person.dart';

class SecondPage extends StatelessWidget {
  Person? person;

  SecondPage({@required this.person});

  @override
  Widget build(BuildContext context) {
    // arguments로 전달된 데이터 수신
    final args = ModalRoute.of(context)!.settings.arguments as Map;
    person = args["person"];

    return Scaffold(
      appBar: AppBar(
        title: Text("Second"),
      ),
      body: Column(
        children: [
          // 전달받은 데이터 출력
          Text('${person?.name}, ${person?.age}'),
          
          // 버튼을 누르면 이전 페이지로 "ok" 반환하며 복귀
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context, 'ok');
            },
            child: Text("이전 페이지로"),
          )
        ],
      ),
    );
  }
}
