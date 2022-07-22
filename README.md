## 구해줘, 지구!

### **`[9팀] 사이버다인 코리아`**

서비스 이름: 구해줘, 지구 🌏

인공지능 기술: 이미지 처리

팀원: 신도희 이하은 박진아 안민영 윤성준 김성훈

**목차**

## 서비스 시연 영상

---

📍 카메라를 사용한 분리 배출 서비스로, 모바일 사용이 많을 것을 고려하여 

     모바일&웹 버전 모두 구현하였으며, 데모 영상 준비했습니다.

[9팀_최종_발표_영상_모바일](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7da9d51a-3cd1-4e9f-bba6-73a4b537ded1/9%ED%8C%80_%EC%B5%9C%EC%A2%85_%EB%B0%9C%ED%91%9C_%EC%98%81%EC%83%81.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T022256Z&X-Amz-Expires=86400&X-Amz-Signature=915cb4384177b64a5d1cf8a32d94b0618023fc8db38ebb3dc345b8b87c4ace05&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%229%25ED%258C%2580_%25EC%25B5%259C%25EC%25A2%2585_%25EB%25B0%259C%25ED%2591%259C_%25EC%2598%2581%25EC%2583%2581.mp4%22&x-id=GetObject)

[9팀_최종_발표_영상_웹](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/64322049-80d0-4b0e-a668-0aba391d99b2/screen-recording_%281%29_%28video-converter.com%29.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T022414Z&X-Amz-Expires=86400&X-Amz-Signature=811ab0d665bd4552c8d4398d1233d1d97271cc82045fea1a1d575824d5f75193&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22screen-recording%2520%281%29%2520%28video-converter.com%29.mp4%22&x-id=GetObject)

 

[대형폐기물 카카오 지도 api 연결에 따른 추가 영상](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08bbf4b5-bf60-4358-a061-ebe9ca6af504/screen-recording_%282%29_%28video-converter.com%29.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T022440Z&X-Amz-Expires=86400&X-Amz-Signature=46811db70af01e635831cd65ce0caa42e6c892837d840ae3db9b93cf56d71a44&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22screen-recording%2520%282%29%2520%28video-converter.com%29.mp4%22&x-id=GetObject)


## 1. GitLab 링크

---

 🌏 [[구해줘, 지구] 🖱 깃랩 보러 가기](https://kdt-gitlab.elice.io/ai_track/class_04/ai_project/team9/project-cyberdyne)

[🌏 **구해줘, 지구 이용해보기 >> 배포한 사이트로 이동**](http://kdt-ai4-team09.elicecoding.com/) 

## 2. 서비스 소개

---

### 📍 프로젝트 주제

- 인공지능 활용 생활 폐기물 이미지 인식을 통한 올바른 분리배출 방법 안내 서비스

### 🙇‍♂️ 기획 의도 및 기대 효과

- 2013년 기준 우리나라는 OECD 국가 중 재활용을 잘 하는 국가 2위이지만 실질적인 재활용은 제대로 이루어지고 있지 않다.
- 이는 실질적인 재활용 비율이 아닌 재활용 참여 비율이기 때문이며 실질적인 재활용률은 40%도 되지 않는다.
- 이 상황의 원인은 생활쓰레기에 대한 분리배출 방법에 많은 사람들이 어려움을 느끼기 때문이다.
- 따라서, 생활 쓰레기에 대한 정확한 정보를 제공하고 분리배출 방법을 보다 쉽게 접할 수 있게 하여 분리수거 문제를 해결하려 한다. 더 나아가, 보다 깨끗한 환경과 지속 가능한 지구가 될 수 있도록 하려 한다.
    

## 3. 기술 스택

---

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
        

## 4. 프로젝트 구조도

---

[프로젝트 구조도](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9586e707-ba9f-4298-a968-7f17d85ff0e5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T022846Z&X-Amz-Expires=86400&X-Amz-Signature=e6f01ebffa03840e45ac8f7adbbcdff76a807db46d17d59cf7521b0dea176e74&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## 5. 기능 설명

---

### 🌏 구해줘, 지구 - 기능 상세 설명

[🙏 클릭하시면 기능에 대해 상세히 보실 수 있습니다. ](https://www.notion.so/9f43c7605d17420b9d60db9f72be499f)

- **메인 기능**
    1. 📍 **분리배출 하러가기**
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
    

---

### 🖼 와이어 프레임

🌱  [브라우저로 보러 가기](https://www.figma.com/file/dSjdmhOweLps5vP9zIfsme/Wireframe?node-id=0%3A1)

- 스타일 가이드 (메인 색상 / 폰트 등)
    - 메인 컬러
        - #A7C4BC
        - #F2F2F2
        - #305E63
    - 폰트
        - 엘리스 배움체
    - 모바일 버전을 위해 컨텐츠를 중앙에 배치
    - 대표 로고
        
        ![LOGO](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a92ed5b8-bebe-499e-97b0-079bb39ea89e/logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T023219Z&X-Amz-Expires=86400&X-Amz-Signature=57f9671034d27f0dcb6e465e873f438823f5b457a1afe8c22f7d1ce7074e250f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22logo.png%22&x-id=GetObject)
        
        ![PPT_LOGO.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/22e015d6-e031-44eb-aba6-9b2a1b33c0a5/PPT_LOGO.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T023305Z&X-Amz-Expires=86400&X-Amz-Signature=126fc3747335fbe63f251302ca0092062a0c6f9f0339e24b0794b6834b9822a3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22PPT_LOGO.png%22&x-id=GetObject)
        

[https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FdSjdmhOweLps5vP9zIfsme%2FWireframe%3Fnode-id%3D0%253A1](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FdSjdmhOweLps5vP9zIfsme%2FWireframe%3Fnode-id%3D0%253A1)

### 📚 스토리 보드 및 유저 시나리오

🌱  [브라우저로 보러 가기](https://docs.google.com/spreadsheets/d/1Gv8fvA-80mt02lMYLZNUqs3o3ZKHG1Lz3iDeypcRL3A/edit#gid=0)

📍 임베드 된 부분으로 볼 경우, 50%로 봐주세요!

[https://docs.google.com/spreadsheets/d/1Gv8fvA-80mt02lMYLZNUqs3o3ZKHG1Lz3iDeypcRL3A/edit#gid=0](https://docs.google.com/spreadsheets/d/1Gv8fvA-80mt02lMYLZNUqs3o3ZKHG1Lz3iDeypcRL3A/edit#gid=0)

📍 주제 선정 & 기능 논의 후, 

     전체적인 스토리 보드 작성을 공용 구글 계정 내 스프레드 시트에 작성하였습니다. 

     (조금 더 구체적으로 정해야 하는 세부 사항에 대해 논의 하고 팀원들과 같은 방향 및 의도 일치&확립에 좋은 역할을 했습니다. ) 

### 🗃 페이지 구조도

[🖱 피그마에서 보기](https://www.figma.com/file/dSjdmhOweLps5vP9zIfsme/Wireframe?node-id=323%3A1979)

![page structure](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4b4e6f3-f329-446a-b5f6-84cd746a7dbf/page_structure.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T023347Z&X-Amz-Expires=86400&X-Amz-Signature=34f1a9849f7387a520a9c89068ace830b8392720a69cb2cc35365dc193d0884a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22page%2520structure.png%22&x-id=GetObject)

### 📒 ER Diagram

[ERD](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5ef7a022-0eee-485f-8b34-ed459972b6ce/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T023408Z&X-Amz-Expires=86400&X-Amz-Signature=51352e26da041293d388bfe13545dffd397e1277182c923ba72ecb01d3e71577&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### 🎟 API 명세서

[🖱 api 명세서 보러가기](https://documenter.getpostman.com/view/19591285/UzBiQUw9#644af286-9b0d-4bdf-8ec2-d11a18e508f3) 

## 6. 😎 트러블 슈팅

---

[클릭하시면 자세한 내용을 보실 수 있습니다.](https://www.notion.so/f0d68092dfde4d0f991c7116b3512ad6)

1. 무한스크롤 구현 (프론트)
2. 분리 배출 결과 정보 표현 (프론트)
3. 응답 데이터 구성 문제 (백)
4. 복잡한 쿼리 작성 (백)
5. 데이터 전처리 문제 (인공지능)
6. 하이퍼파라미터 튜닝 자원 문제

---

## 7. 각 팀원의 역할과 기여한 부분

---

![TEAM](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08d75f04-22ea-424e-a79e-5be467caeadf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T023902Z&X-Amz-Expires=86400&X-Amz-Signature=e656808c634e0aa8b4a110d954b3ab73a3c7674e204d4d1dd9d0b903d69bf1b8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

---


##### `신 도 희 (팀장, 백엔드)` #####
1. DB 설계 및 관리
2. API 구현 [User / Quiz / Point]
3. 배포
4. 중간 발표 

##### `이 하 은 (백엔드)` #####
1. DB 설계 및 관리
2. API 구현 [RecycleInfo / Post / Comment ] 
3. 최종 발표 

##### `박 진 아 (프론트엔드)` ##### 
1. 스토리 보드 & 와이어 프레임
2. 구현
  - [ 분리 배출 안내 화면(drag&drop, 카메라 외) ]
  - [ 중고 마켓(무한 스크롤) ]
  - [ 마이 페이지 (포인트 적립 시각화 구현) ]
  - [ 소셜 로그인 ( kakao ) ]
3. 페이지 구조도 작성
4. 최종 서비스 소개서 작성  

##### `안 민 영 (프론트엔드)` ##### 
1. 스토리 보드 & 와이어 프레임
2. 구현 
  - [Intro]
  - [로그인&회원가입]
  - [퀴즈]
  - [대형 폐기물 지도 api 적용]
  - [모바일 반응형 구현]   

##### `윤 성 준 (인공지능)` ##### 
1. 인공지능 모델 선정 
2. 데이터 검증 및 전처리
3. 하이퍼파라미터 튜닝
4. 모델 학습 모니터링 
5. 자바스크립트 용 모델 배치 코드 작성 

##### `김 성 훈 (인공지능)` ##### 
1. 인공지능 모델 선정 
2. 데이터 검증 및 전처리
3. 하이퍼파라미터 튜닝
4. 모델 학습 모니터링 
5. 자바스크립트 용 모델 배치 코드 작성 
