# Flutter Hero Animation 예제

이 예제는 **Hero Animation**을 사용하여 두 화면 간에 이미지 전환 애니메이션을 구현한 코드입니다.

## 주요 기능

- **Hero Animation**: `FirstPage`에서 이미지를 터치하면 `SecondPage`로 이동하면서 이미지가 부드럽게 전환됩니다.
- **GestureDetector**: 이미지 터치 이벤트를 처리하여 페이지를 전환합니다.
- **MaterialPageRoute**: 두 화면 간의 페이지 전환을 위해 사용됩니다.

---

## 전체 코드

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: FirstPage(),
    );
  }
}

class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("FirstPage"),
      ),
      body: Center(
        child: GestureDetector(
          onTap: () {
            // GestureDetector로 이미지 클릭 시 SecondPage로 이동
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => SecondPage()),
            );
          },
          child: Hero(
            tag: "image", // Hero 위젯에 tag 설정
            child: Image.asset(
              "assets/img.png", // 이미지 파일 경로
              width: 100,
              height: 100,
            ),
          ),
        ),
      ),
    );
  }
}

class SecondPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("SecondPage"),
      ),
      body: Hero(
        tag: "image", // 동일한 tag 값 사용
        child: Image.asset("assets/img.png"), // 이미지 표시
      ),
    );
  }
}
