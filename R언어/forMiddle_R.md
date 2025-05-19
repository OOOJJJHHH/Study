# 연산자 활용
```R
산술 : v1 ( +, -, /, %/%, %% ) v2

비교 : v1 ( >, <, >=, <=, ==, &, | ) v2

- 벡터에서 조건에 맞는 값 추출 : v1[v1 > 5]
- v1배열 안에서 5보다 큰 값만 추출
```
# 데이터 구조 파악

## 벡터
`1차원` : ❌ (동일 타입) :	기본 데이터 구조
## 행렬(matrix)
`2차원` : ❌ (동일 타입) : 2차원 벡터
## 배열(array)
2차원 이상 : ❌ (동일 타입) : 다차원 벡터
## 리스트(list)
n차원 : ✅ (가능) : 모든 데이터 구조를 담을 수 있음
## 데이터프레임
2차원 : ✅ (열별로 가능) : 표 구조, 리스트의 특수 형태

# 벡터 작성
- 벡터는 동일한 타입을 가진 값들의 집합

## 벡터 생성 방법
```R
x = c(1,2,3,4)
x = c("a","b","c","d")

x = c(1:4)

seq(1, 10, by=2)
- 1부터 10까지 수를 1부터 2씩 증가하면서 배열에 추가

rep(1:3, times=2)
- 1부터 3까지의 값을 2번 반복
- 출력 : 1,2,3,1,2,3

rep(1:3, each=2)
- 출력 : 1,1,2,2,3,3
```

## 벡터 속성 확인
```R
length(x)
- 벡터의 길이

class(x)
- 데이터 타입

typeof(x)
- 내부 저장 방식

result <- append(x, 4, after = 2)
- x백터에 인덱스 2 뒤에 요소(4)를 추가
```

## 벡터 연산
```R
x = c(1,2,3)

x + 1
- x벡터의 모든 값에 1더함
x * 2
- x벡터의 모든 값에 2곱함

x = c(1,2,3)
y = c(21,22,23)
x + y
- 배열의 같은 인덱스끼리 합
- 만약 배열의 길이가 다르다면 짧은 쪽의 배열이 재활용 되면서 더해짐

cat(1, NA, 2)
- NA 포함해서 출력 1, NA, 2

cat(1, NULL, 2)
- NULL 빼고 출력 1, 2

sum(1, NA, 2)
- NA 값

sum(1, NULL, 2)
- NULL 제외하고 계산
```

## 벡터 조건에 맞는 값 출력
```R
x <- c(10, 20, 30, 40)

x[1]
- 첫 번째 요소

x[2:3]
- 2~3번째 요소

x[-1]
- 첫 번째 요소 제외

x[x > 30]
- 10보다 큰 값만 추출

x = 3
x %in% c(1, 2, 3, 4)
- 벡터 안에 있는지 확인
```

# 벡터 형 변환
```R
as.character(c(1, 2, 3))
- 숫자 → 문자

as.numeric(c("4", "5"))
- 문자 → 숫자

c(1, "a", TRUE)
- 만약 문자형(String)이 하나라도 있으면 나머지 모든 데이터의 형태가 String으로 변환
```

# 백터 활용 함수
```R
sum(x) : 합계
mean(x) : 평균
max(x) : 최대값
min(x) : 최소값

sort(x)
- 오름차순으로 정렬

order(x)
- 오름차순으로 정렬하는데 출력되는 값은 저장되어있는 실제 값의 인덱스 값이 보여짐
- c(3,1,2) -> 2, 3, 1

union()
- 두 개의 배열을 합치고 중복을 제거함

setdiff()
- a에서 b를 제거하고 출력

intersect()
- 공통된 것 출력

unique(x)
- 중복을 제거하고 출력

duplicated(x)
- 중복여부를 TRUE/FALSE로 반환

x = c(10, 20, 30)
names(x) = c("apple", "banana", "cherry")
- 벡터 생성 후 이름 지정
- 만약 names 길이가 더 작으면 리사이클링 수행
x <- c(apple = 10, banana = 20, cherry = 30)
- 벡터 생성 시 이름 지정

x["banana"]
- x 백터의 banana 이름을 가지고 있는 값을 출력
x[c("cherry", "apple")]
- x 백터의 cherry, apple 이름을 가지고 있는 값을 순서대로 출력
```
# 날짜 관련 ( Date, POSIXct, POSIXlt )
### Date
- 날짜만 저장 (yyyy-mm-dd)
- 시간 없음

`as.numeric(as.Date("2023-01-02"))`
- 결과 : 19358 (1970-01-01부터 19358일)
- 일(day)로 저장

### POSIXct
- 날짜 + 시간 저장 (숫자 기반)

`as.numeric(as.POSIXct("1970-01-02 00:00:00"))`
- 결과 : 86400초 = 하루
- 1970-01-01부터의 초(second)로 저장

### POSIXlt
- 날짜 + 시간 + 구조 분해 가능

- 내부적으로 리스트 구조로 저장됨 (연, 월, 일, 시, 분 등 나눠서 접근 가능)
```R
t <- as.POSIXlt("2023-01-01 15:30:00")
t$hour   # 15
t$mon    # 0 (1월은 0부터 시작!)
t$wday   # 0 (일요일)
```

### 날짜 기본
```R
Sys.Date()
- "2025-04-22"

Sys.time()
- "2025-04-22 22:22:54 KST"

date()
- "Tue Apr 22 22:22:57 2025"
```

### 날짜 형변환
```R
Date → POSIXct
as.POSIXct(as.Date("2023-01-01"))

POSIXct → Date
as.Date(as.POSIXct("2023-01-01 15:30"))

POSIXct → POSIXlt
as.POSIXlt(as.POSIXct("2023-01-01 15:30"))

POSIXlt → POSIXct
as.POSIXct(as.POSIXlt("2023-01-01 15:30"))
```

### 날짜 다양한 포맷 지정
```R
datetime = as.POSIXct("2023-04-21 15:30:45")

format(datetime, "%Y-%m-%d")
- "2023-04-21"

format(datetime, "%d/%m/%Y")
- "21/04/2023"

format(datetime, "%H:%M:%S")
- "15:30:45"

format(datetime, "%Y-%m-%d %H:%M")
- "2023-04-21 15:30"

format(datetime, "%Y년 %m월 %d일 %H시 %M분")
"2023년 04월 21일 15시 30분"
```

### lubridate 패키지를 사용할 때 제공되는 날짜 관련 함수
- Date, POSIXct, POSIXlt 클래스 객체에 대해 사용가능
```R
year()
- 연도 추출	2023

month()
- 월 추출	4

day()
- 일(day of month) 추출	21

wday()
- 요일 (숫자, 기본적으로 일요일=1)	6

wday(date, label = TRUE)
- 요일이 숫자가 아닌 한국어로 요일을 출력

hour()
- 시 추출 (시간 포함일 경우)	13 등

minute()
- 분 추출	30

second()
- 초 추출

hm("22:30")
hms("22:30:15")
```

# MATRIX
- 동일한 데이터 타입만 가능
- 행렬 출력( 벡터와 같이 데이터 값이 보임 )
- matrix() 생성할때는 컬럼과 로우의 이름을 지정 못함
- 추후에 colnames, rownames로 이름 설정해야 함
```R
mat <- matrix(1:9, nrow = 3, ncol = 3)
- 1부터 9까지의 숫자를 3x3 행렬로 변환
- 왼쪽부터 세로로 값이 추가 됨

v1 = c(1, 2, 3)
v2 = c(4, 5, 6)
m = matrix(V = v1, VV = v2)

byrow = TRUE
- 기능 추가할 시 가로로 숫자가 채워짐

rownames(mat) = c("Row1", "Row2", "Row3")
- 왼쪽에 row(가로)줄 앞쪽마다 이름 생성

colnames(mat) = c("Col1", "Col2", "Col3")
- 위쪽에 column(세로)줄 위쪽마다 이름 생성

mat[1, 2]  # 4
- 첫 번째 행, 두 번째 열의 값 추출

mat[2, ]   # 2 5 8
- 두 번째 행, 모든 열을 추출

mat[, 1]   # 1 2 3
- 모든 행, 첫 번째 열을 추출
```

# MATRIX 활용 함수
```R
nrow(), ncol()
- 행렬의 행의 수와 열의 수를 각각 반환합니다.

colnames(), rownames()
- 열 이름과 행 이름을 설정하거나 확인

rbind(), cbind()
- 행(row)을 추가, 열(column)을 추가

m1 + m2
- 행렬 덧셈

m1 * m2
- 행렬 원소별 곱셈

m1 %*% m2
- 행렬 곱셈
```

# MATRIX 문제
- matrix에서 비교연산으로 원소 추출 시 1차원 벡터로 리턴(행렬구조를 잃어버림)
```R
- 문제 : m1의 e열의 값에 20이 포함되어있다면 (20)값의 행에 3~5번째 컬럼 출력
m1[m1[, "e"] == 20, 3:5]

- 문제 : peach 가격 출력
m1[m1[,"name"]=="peach", "price"]

```

# data.frame()
- 다양한 데이터 타입 가능
- 테이블 형태로 출력
- 생성 시 컬럼과 로우의 이름 설정 가능
- colnames, rownames도 사용가능
```R
v1 = c(1, 2, 3)
v2 = c(4, 5, 6)

df = data.frame(V = v1, VV = v2)
- 생성 시 이름 붙임
- 세로로 값이 입력 됨

df <- data.frame(rbind(v1, v2))
- 가로로 값이 입력 됨

colnames(df) = c("X", "Y")

names(df) = c("X", "Y")
rownames(df) = c("row1", "row2")
- names랑 colnames는 사실상 같은 기능

apply(m, 1, sum)
- 1일 경우 행 단위로 합을 계산, 2일 경우 열 단위로 합을 계산

```

# LIST
- 여러가지 타입의 객체를 묶음
```R
my_list <- list(a = 1,
                b = 2:4,
                c = "Hello",
                d = data.frame(x = 1:3, y = 4:6)
              )
- 리스트 생성

my_list[[2]][2]
my_list$b[2]
my_list[['b']][2]
- 위 세 코드는 모두 동일
- 두 번째 원소를 선택하고 해당 원소의 벡터의 인덱스 2번째를 가져옴

my_list$a = 10
- a의 값을 10으로 수정

my_list$b[2] = 10
- b의 2번째 인덱스 값을 10으로 수정

my_list[['b']][2] = 10
my_list[[2]][2] = 10
- 위 두 방법은 백터를 복사해서 가져오기 때문에 실제로 값 저장안됌

my_list[["c"]] = "New Value"
- c의 값을 수정
```

# LIST 활용함수
```R
names(my_list)
- 리스트 원소 이름 확인

lapply(my_list2, sum)
- 각 리스트 원소에 함수 적용
- 결과는 리스트형식

sapply(my_list2, sum)
- 결과는 벡터형식

================

score = c(80, 90, 70, 85, 75)
gender = c("M", "F", "M", "F", "M")

tapply(score, gender, mean)
- 성별로 평균 계산
- 조건에 따른 score 결과가 나옴

================

x = c(1, 2, 3)
y = c(10, 20, 30)

mapply(sum, x, y)
- 원소별로 덧셈 수행

================

values = c("A", "B", "C")
times = c(1, 2, 3)

mapply(rep, values, times)
- A 1번, B 2번, C 3번  반복 수행

```

# subset() 함수
```R
df = data.frame(
  name = c("Alice", "Bob", "Charlie", "Diana", "Evan"),
  age = c(25, 30, 35, 28, 40),
  gender = c("F", "M", "M", "F", "M"),
  score = c(90, 85, 88, 92, 70)
)

subset(df, age >= 30)
- 나이가 30 이상인 행 추출

subset(df, age >= 30, select = c(name, score)) 
- 나이 30 이상이고 name, score 컬럼만 선택



```

# dplyr 패키지의 핵심 함수
```R
- filter()

df %>%
  filter(score >= 85)
- 조건에 맞는 행 추출
- 행의 값을 기준으로 필터링하고 싶을 때

- select()

df %>%
  select(name, score)
- 특정 열(컬럼)을 선택하거나 제외할 때 사용

- arrange()

df %>%
  arrange(age)
- 정렬 ( 오름차순 정렬 )
- desc()를 사용할 시 내림차순 정렬

- mutate()

df %>%
  mutate(pass = score >= 80)
- score가 80이상이면 true, false라면 새로운 열에 ture, false 값을 저장한다
-  새로운 열을 추가하거나 기존 열을 수정할 때 사용.

summarise()
- 데이터를 그룹별로 요약하는 데 사용

df %>%
  group_by(gender) %>%
  summarise(
    avg = mean(score),
    max = max(score),
    count = n()
  )
- 평균(mean), 최고점(max), 인원 수(n) 계산

group_by(데이터, 기준이 될 컬럼)
- 열(column) 기준, 행은 불가



```

# %>%  파이프 연산자
```R
data %>% function1() %>% function2()
- 함수1을 적용하고, 그 결과를 함수2로 넘겨줘서 계속 처리


```

# 기타
```R
dimnames(x)
- 차원 이름(행/열/면 등)을 확인

dimnames(a) <- list(c("r1", "r2"), c("c1", "c2"), c("page1", "page2"))
- 행/열/페이지 순서로서 데이터 구조 형태에 맞춰서 이름 설정이나 확인 가능
- 차원 이름을 설정함

NA는 기록에 남음, 연산 시 NA값 출력
NULL은 아예 삭제와 가까움, 연산 시 NULL 빼고 연산

print(pi, 3)
print(pi, digit=3)
- digit은 숫자 전체 기준 3자리만 출력, 생략 가능

cat()
- 따로 줄바꿈없이 공백을 하나씩 주고 순서대로 하나씩 출력

f1 = factor(t1$blood)
- blood 안에 중복 내용들 제거하고 return
- blood 안에 몇개의 중복된 내용들이 있는지 알려줌
ex) A AB B O
    2  1 3 4

objects()
ls()
- 같은 기능
- 모든 객체들의 이름 보여줌

objects(all.names=T)
- .x 파일 즉 숨겨진 파일까지 전부 다 보여줌

rm(s1)
- s1이라는 특정 객체 삭제

rm(list=ls())
- 모든 객체를 한 번에 삭제

a %in% b
- a가 b안에 있다면

toupper()
- 영어 소문자를 대문자로 변환

aggregate(Sales~Year, Fruits, sum)
- aggregate(계산될 컬럼 ~ 기준될 컬럼, 데이터, 함수)
- 년도별 Sales를 sum한다 Fruits 테이블에서
```

# 파일 관련
```R
list.files()
- 숨김파일 제외하고 출력

list.files(all.files = T)
- 숨김 목록 포함해서 보여줌

list.files(recursive = T)
- 루트 디렉토리의 하위 파일들을 보여줌
- 숨김 파일은 안보여줌

scan("scan_2.txt", what = "")
- scan() 내부에 요소가 있으면 파일을 읽는 함수
- what="" 문자타입으로 읽음, what=0 숫자타입으로 읽음

input = scan()
- 위 형식과 같으면 숫자 입력을 받는 기능
input = scan(what="")
- 위 형식은 문자를 입력받는 기능

readline() : 한줄 읽기

readlines() : 여러 줄 읽기

read.table()
- 데이터를 읽어서 데이터 프레임에 저장
- sep = ","	**쉼표(,)**를 구분자로 사용 – 즉, CSV 형식
- header = T	**첫 번째 줄이 열 이름(헤더)**로 되어 있다고 지정
```










