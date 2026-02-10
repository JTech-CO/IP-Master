# IP Master

> **네트워크 분석·변환·조회를 한 곳에서 처리하는 웹 기반 도구 모음**

<img width="3064" height="1806" alt="image" src="https://i.imgur.com/TtC5AXh.png" />

## 1. 소개 (Introduction)

이 프로젝트는 네트워크/시스템 관리자와 개발자가 IP·도메인·인코딩 관련 작업을 빠르게 수행할 수 있도록 개발된 **정적 웹 애플리케이션**입니다. CIDR 계산, IPv6 변환, GeoIP 조회, MAC 제조사 조회, 인코더/디코더, User Agent 분석, 서브넷 참조표, 보안 키 생성 등을 **클라이언트 또는 공개 API**로 제공합니다.

**주요 기능**
- **CIDR 계산기**: IPv4/IPv6 CIDR 기반 IP 범위·넷마스크 계산
- **IPv4 → IPv6 변환**: IPv4 주소를 IPv6 매핑 표기법으로 변환
- **도메인 → IP 변환**: 도메인 이름으로 IPv4 주소 조회 (Google DNS API)
- **IP 위치 조회**: IP의 국가·위치·ISP 정보 (GeoIP)
- **MAC 제조사 조회**: MAC(OUI) 기반 제조사 조회
- **인코더/디코더**: Base64·URL 인코딩/디코딩
- **User Agent 분석**: 현재 브라우저 UA 문자열 분석
- **서브넷 마스크 치트시트**: CIDR별 넷마스크·호스트 수 참조표
- **보안 키 생성기**: WPA/비밀번호용 무작위 문자열 생성 (길이·문자 종류·개수 설정)

## 2. 기술 스택 (Tech Stack)

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: 없음 (정적 사이트, 클라이언트·공개 API만 사용)
- **Deployment**: GitHub Pages 등 정적 호스팅

## 3. 설치 및 실행 (Quick Start)

**요구 사항**: 최신 브라우저 (Chrome, Firefox, Edge 등) [실행하기](<https://jtech-co.github.io/IP-Master/index.html>)

1. **다운로드 (Download)**
   ```bash
   git clone [레포지토리 URL]
   cd IP-Master
   ```

2. **실행 (Run)**
   - `index.html`을 브라우저에서 직접 열거나,
   - 로컬 웹 서버로 서빙:
   ```bash
   # Python 3
   python -m http.server 8000
   # 또는 npx
   npx serve .
   ```
   브라우저에서 `http://localhost:8000` 접속

3. **환경 변수 (Environment)**  
   기본 사용에는 필요 없습니다. 도메인·IP 조회 등은 공개 API를 사용합니다.

## 4. 폴더 구조 (Structure)

```text
IP Master/
├── index.html          # 메인 페이지 (탭 네비게이션 + 각 도구 UI)
├── css/
│   ├── base.css        # 기본 스타일
│   ├── typography.css  # 글꼴·타이포
│   ├── layout.css      # 레이아웃
│   ├── forms.css       # 폼·입력
│   ├── tables.css      # 테이블
│   ├── components.css  # 버튼·카드 등 컴포넌트
│   ├── footer.css      # 푸터
│   └── effects.css     # 효과 (매트릭스 등)
└── js/
    ├── tabs.js         # 탭 전환
    ├── cidr.js         # CIDR 계산
    ├── ipv6conv.js     # IPv4→IPv6 변환
    ├── dns.js          # 도메인→IP 조회
    ├── geoip.js        # IP 위치 조회
    ├── mac.js          # MAC 제조사 조회
    ├── encoder.js      # Base64/URL 인코딩
    ├── ua.js           # User Agent 분석
    ├── subnet.js       # 서브넷 치트시트
    ├── password.js     # 보안 키 생성
    └── matrix.js       # 배경 매트릭스 효과
```

## 5. 정보 (Info)

- **License**: MIT
- **Contact**: [Developer](https://jtech-co.github.io/my-website/MLP.html)

