# Person.dart 설명

Flutter 앱 내에서 이름과 나이를 담는 간단한 데이터 클래스입니다.  
`Firstpage`와 `SecondPage` 간 데이터 전달 시 사용됩니다.

---

## 클래스 정의

```dart
class Person {
  String name;
  int age;

  Person(this.name, this.age);
}
