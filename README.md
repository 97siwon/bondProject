# BOND
당신의 취미도 BOND로 시작하세요.<br>
## 🖥️ 프로젝트 소개
BOND는 같은 관심사를 가진 수많은 사람들이 모여 모임을 만들고 
모임에 글과 이미지를 공유하고 그에 대한 생각과 정보를 나누며 서로 이야기를 나누는 공간, 
일정 기능을 통해 모임의 정모를 정할 수 있는 공간입니다.

BenchMarking : 네이버 밴드, 소모임<br>
## ⏱️ 개발 기간
2022년 10월 18일 ~ 2022년 12월 10일<br>
## 🧑‍🤝‍🧑 멤버 구성
[4인 팀프로젝트]<br>
- 서도은 -로그인, 회원가입, 아이디,비밀번호 찾기, 모달창, 모임가입,탈퇴
- 신충영 -관리자 페이지, 신고 처리, 접수, 일정 기능 
- 이시원 -모임 찾기 검색 기능, 가입X 모임 조회, 카테고리별 모임 조회
- 정현재 -모임 생성, 게시글 조회, 작성, 댓글, 앨범 사진 불러오기<br>
## 🪄 사용 기술
**Back-end**
- Java 11
- Spring 3.9.18
- Maven
- Oracle 21C
- Apache Tomcat 9.0
- Spring Security
- Mybatis

**Front-end**
- HTML/CSS
- Javascript<br>
## 🏷️ ERD 설계
![206644146-b63977b9-e8ad-45f6-9d72-66abfcdd1c95](https://user-images.githubusercontent.com/110653581/223964484-548b0925-ba84-4253-9c87-50971b6bee4e.png)
ERD 주소 : https://www.erdcloud.com/d/rH52AGzEpuXjv7vir
## ⚙️ 핵심 기능
<details markdown="1">
<summary>접기/펼치기</summary>

### 1. 모임 찾기 페이지<br>
<img width="50%" src="https://user-images.githubusercontent.com/110653581/223965275-a06bc621-d33a-4f99-a003-0a4c7d38c096.png"/>
<br>
<br>
### 1-1. 카테고리 별 모임<br>
<img width="50%" src="https://user-images.githubusercontent.com/110653581/223965549-2f7e511a-0e05-444c-94ee-063351748889.png"/><br>
- 원하는 카테고리 선택 시 해당 카테고리 모임 추천 페이지로 이동<br>
- 가나다 순으로 조회<br>
- [Controller](#https://github.com/97siwon/bondProject/blob/f14332b1052756e5bb7b00ac9d012269103a4910/Bond/src/main/java/kh/semi/project/member/controller/findBondController.java#L36)

### 1-2. 모임 검색<br>
<img width="50%" src="https://user-images.githubusercontent.com/110653581/223965575-5e9dee7e-042e-4c7a-86fa-1b85acfee249.png"/><br>
- 본드 이름, 소개글이 포함된 단어 검색 시 검색 결과 화면으로 이동<br>
- [Controller](#[https://github.com/97siwon/bondProject/blob/f14332b1052756e5bb7b00ac9d012269103a4910/Bond/src/main/java/kh/semi/project/member/controller/findBondController.java#L36](https://github.com/97siwon/bondProject/blob/main/Bond/src/main/java/kh/semi/project/member/controller/SearchController.java#L29))
- [Sevice](#https://github.com/97siwon/bondProject/blob/main/Bond/src/main/java/kh/semi/project/member/model/service/SearchServiceImpl.java#L20)
<br>
</details>

<h2>💣 트러블 슈팅</h2>


