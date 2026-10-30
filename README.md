# 바이오자원실험실 홈페이지

동아대학교 스마트그린자원학과 · 대학원 응용생명과학과 바이오자원실험실(Bioresources Lab, 김두현 교수) 홈페이지입니다. 사이트 주소: https://donga-bioresources.github.io/lab/

## 내용 수정하기 (코딩 없이)

1. https://app.pagescms.org 에 접속해 깃허브 계정으로 로그인합니다.
2. `donga-BioResources/lab` 저장소를 선택합니다.
3. 왼쪽 메뉴에서 수정할 항목을 고릅니다.
   - 연구실 소개
   - 대학원생 · 학부연구생 모집
   - 지도교수 (학력 · 경력 · 수상 · 연락처)
   - 연구실적 (논문 / 특허 · 기술이전)
   - 구성원 · 졸업생
   - 연구실 소식
4. 내용을 고치거나 **Add an entry**로 새 항목을 추가하고 **Save**를 누릅니다.
5. 1~2분 뒤 사이트에 반영됩니다.

> **주의** · Pages CMS의 Media(이미지) 화면에서 `logo.png`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`, `og.jpg` 를 지우지 마세요. 모든 페이지가 로고 · 탭 아이콘 · 링크 미리보기 이미지로 사용합니다.

## Pages CMS로 수정할 수 없는 부분

| 내용 | 수정할 파일 |
|---|---|
| 연구 분야 (01~04 설명, 사진, 사진 설명, 키워드) | `js/research.js` |
| 찾아오시는 길 (주소, 연락처, 지도) | `contact.html` |
| 상단 메뉴 · 하단 연락처 바 | 각 `*.html` |
| 글씨 크기 · 색 · 배치 | `css/style.css` |

## 파일 구성

| 파일 | 내용 |
|---|---|
| `data/*.json` | 연구실 소개, 모집 글, 지도교수, 논문 · 특허, 구성원, 소식 데이터 (Pages CMS가 수정) |
| `.pages.yml` | Pages CMS 입력 화면 설정 |
| `*.html`, `css/style.css` | 페이지 구조와 디자인 |
| `js/home.js`, `professor.js`, `research.js`, `publications.js`, `members.js`, `news.js` | 데이터를 읽어 각 페이지를 그리는 스크립트 |
| `js/common.js`, `js/layout.js` | 공통 기능, 화면 폭에 맞춘 레이아웃 |
| `img/` | 이미지 (로고, 지도교수 사진, 연구 분야 사진, Pages CMS로 올린 사진) |

## 내 컴퓨터에서 미리보기

데이터를 `fetch`로 불러오기 때문에 HTML 파일을 더블클릭해서 열면 목록이 비어 보입니다. VS Code의 **Live Server** 확장으로 열면 정상적으로 보입니다.

> 디자인을 직접 고칠 때는 Pages CMS로 바뀐 내용을 덮어쓰지 않도록, 작업 전에 항상 깃허브에서 최신본을 받아서 시작하세요.
