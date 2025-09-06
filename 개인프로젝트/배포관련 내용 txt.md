til_content = """
# TIL: 2025-09-06

## 💡 MySQL + Spring Boot + React 완전 무료 배포하기

오늘은 MySQL, Spring Boot, React로 만든 프로젝트를 **무료로 배포**할 수 있는 방법을 정리했다.  
각 구성 요소별로 무료 서비스를 조합해 사용하면 클라우드 환경에서도 돈 들이지 않고 프로젝트를 운영할 수 있다.

---

### ✅ 전체 구성

| 구성 요소 | 서비스 | 설명 |
|-----------|--------|------|
| 💾 DB     | PlanetScale | MySQL 호환 클라우드 DB (무료) |
| ⚙️ 백엔드 | Render / Railway | Spring Boot 배포용 (무료 플랜 존재) |
| 🌐 프론트 | Vercel / Netlify | React 정적 사이트 배포용 |

---

### 1️⃣ PlanetScale – MySQL 클라우드 DB

- https://planetscale.com
- GitHub 로그인으로 가입
- MySQL 호환, GUI 제공, 무료 티어 충분함

**Spring Boot 설정 예:**

```yaml
spring:
  datasource:
    url: jdbc:mysql://<host>:3306/<dbname>
    username: <username>
    password: <password>
2️⃣ Spring Boot – 무료 배포
✅ Render
https://render.com

GitHub 연동 → 자동 CI/CD

Build Command: ./gradlew build

Start Command: java -jar build/libs/xxx.jar

✅ Railway
https://railway.app

GitHub 또는 CLI로 배포 가능

무료 500시간 + $5 크레딧 (충분히 사용 가능)

3️⃣ React – 정적 사이트 배포
✅ Vercel
https://vercel.com

GitHub 연동 → 자동 배포

Build Command: npm run build

Output directory: build/

Netlify도 동일한 방식으로 사용 가능

🧩 CORS 설정 (Spring Boot)
React → Spring Boot API 호출 시 아래와 같이 CORS 에러 방지 필요:

java
코드 복사
