## 🌏 구해줘, 지구!

### **`구해줘, 지구!`**

#### 1. 프로젝트 주제

- 인공지능 활용 생활 폐기물 이미지 인식을 통한 올바른 분리배출 방법 안내 서비스

#### 2. 엔드유저에게 보이는 웹 서비스 타이틀 및 한 줄 소개

- 내 손안의 분리배출, 작은 실천이 지구를 지킵니다.
- 올바른 분리수거는 지구를 구하는 첫 걸음이 될 수 있어요.

#### 3. 팀 구성원
| 이름 | 역할 |
| ------ | ------ |
| 신도희 | 팀장 / 백엔드 |
| 이하은 | 백엔드 |
| 이하은 | 백엔드 |
| 박진아 | 프론트엔드 |
| 안민영 | 프론트엔드 |
| 김성훈 | 인공지능 |
| 김성훈 | 인공지능 |

### **`서비스 설명`**
#### 1. 기획 의도

- 2013년 기준 우리나라는 OECD 국가 중 재활용을 잘 하는 국가 2위이지만 실질적인 재활용은 제대로 이루어지고 있지 않다.
- 이는 실질적인 재활용 비율이 아닌 재활용 참여 비율이기 때문이며 실질적인 재활용률은 40%도 되지 않는다.
- 이 상황의 원인은 생활쓰레기에 대한 분리배출 방법에 많은 사람들이 어려움을 느끼기 때문이다.
- 따라서, 생활 쓰레기에 대한 정확한 정보를 제공하고 분리배출 방법을 보다 쉽게 접할 수 있게 하여 분리수거 문제를 해결하려 한다. 더 나아가, 보다 깨끗한 환경과 지속 가능한 지구가 될 수 있도록 하려 한다.

#### 2. 사용된 인공지능 알고리즘 및 모델과 기술스택
- 사용 데이터 셋 : [AI Hub 생활 폐기물 이미지 데이터 셋](https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=140)
- 기술 스택
    - **프론트엔드**
        1. [Next.js](https://nextjs.org/)
        2. [Typescript](https://www.typescriptlang.org/)
        3. [styled-component](https://styled-components.com/)
        4. [mui](https://mui.com/)
        5. [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) 
        6. [recoil](https://recoiljs.org/)
    - **백엔드**
        1. [Express.js](https://expressjs.com/)
        2. [PostgreSQL](https://www.postgresql.org/)
        3. [sequelize](https://sequelize.org/)
        4. [multer](https://www.npmjs.com/package/multer)
        5. [aws-sdk](https://aws.amazon.com/sdk-for-javascript/)
        6. [node-worker-threads-pool](https://www.npmjs.com/package/node-worker-threads-pool)
    - **인공지능**
        1. [Tensorflow](https://www.tensorflow.org/)
        2. [Pytorch](https://pytorch.org/)
        3. [YOLOv5](https://github.com/ultralytics/yolov5)
        
#### 3. 웹 서비스의 최종적인 메인 기능과 서브 기능 설명
- **메인 기능**
    1. **분리배출 하러가기**
        1. 인공지능 활용 생활폐기물 이미지 인식을 통한 분리배출 방법 안내
    2. **우리동네 대형폐기물 신고하기**
        1. 사용자 위치 인식 혹은 선택을 통한 지자체별 대형폐기물 또는 생활 가전 폐기물 신고 사이트 안내 (납부 필증 사이트 연결, 무료 수거 서비스 안내)
    3. **퀴즈 풀러가기, 포인트 적립 (마이페이지)**
        1. 분리배출 퀴즈 참여에 따른 포인트 적립과 포인트 적립 정도에 따른 시각화

- **서브 기능**
    1. **중고마켓**
        1. 중고 거래 스레드(무한 스크롤) 및 댓글
    2. **회원 가입 및 로그인, 마이페이지**
        1. 소셜 로그인 (네이버, 카카오)
        2. 회원 정보 관리 (프로필, 닉네임 편집 기능)
    3. **분리 배출 정보 다 보기** 
        1. 카테고리 선택을 통한 분리배출 방법 안내 (셀렉박스)

### **`스토리보드 & 시나리오`**
 
[와이어 프레임](https://www.figma.com/file/dSjdmhOweLps5vP9zIfsme/Wireframe?node-id=0%3A1)

- 스타일 가이드 (메인 색상 / 폰트 등)
    - 메인 컬러
        - #A7C4BC
        - #F2F2F2
        - #305E63
    - 폰트
        - 엘리스 배움체
    - 모바일 버전을 위해 컨텐츠를 중앙에 배치
    - 대표 로고

[스토리 보드 및 유저 시나리오](https://docs.google.com/spreadsheets/d/1Gv8fvA-80mt02lMYLZNUqs3o3ZKHG1Lz3iDeypcRL3A/edit#gid=0)

[페이지 구조도](https://www.figma.com/file/dSjdmhOweLps5vP9zIfsme/Wireframe?node-id=323%3A1979)

[api 명세서 보러가기](https://documenter.getpostman.com/view/19591285/UzBiQUw9#644af286-9b0d-4bdf-8ec2-d11a18e508f3) 

### **`팀원 역할`**
#### 신도희 (팀장, 백엔드) ####
1. DB 설계 및 관리
2. API 구현 [User / Quiz / Point]
3. 배포
4. 중간 발표 
---
#### 이하은 (백엔드) ####
1. DB 설계 및 관리
2. API 구현 [RecycleInfo / Post / Comment ] 
3. 최종 발표 
---
#### 박진아 (프론트엔드) #### 
1. 스토리 보드 & 와이어 프레임
2. 구현
  - [ 분리 배출 안내 화면(drag&drop, 카메라 외) ]
  - [ 중고 마켓(무한 스크롤) ]
  - [ 마이 페이지 (포인트 적립 시각화 구현) ]
  - [ 소셜 로그인 ( kakao ) ]
3. 페이지 구조도 작성
4. 최종 서비스 소개서 작성  
---
#### 안민영 (프론트엔드) #### 
1. 스토리 보드 & 와이어 프레임
2. 구현 
  - [Intro]
  - [로그인&회원가입]
  - [퀴즈]
  - [대형 폐기물 지도 api 적용]
  - [모바일 반응형 구현]   
---
#### 김성훈 (인공지능) #####
1. 인공지능 모델 선정 
2. 데이터 검증 및 전처리
3. 하이퍼파라미터 튜닝
4. 모델 학습 모니터링 
5. 자바스크립트 용 모델 배치 코드 작성 
---
#### 윤성준 (인공지능) #### 
1. 인공지능 모델 선정 
2. 데이터 검증 및 전처리
3. 하이퍼파라미터 튜닝
4. 모델 학습 모니터링 
5. 자바스크립트 용 모델 배치 코드 작성 
