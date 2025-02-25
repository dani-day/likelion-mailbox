# [멋쟁이사자처럼 프론트엔드스쿨 6기] 롤링페이퍼

---

## 1. 프로젝트 및 팀 소개

### 1-1. 프로젝트 팀: 회고 6조 -자유롭조

<img src="/src/images/readme/ImFree.gif">

### 1-2. 사용 기술

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white">
<img src="https://img.shields.io/badge/pocketbase-B8DBE4?style=for-the-badge&logo=pocketbase&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">

### 1-3. 프로젝트 기간

8월 22일 (화) ~ 8월 27일 (일)

### 1-4. 역할분담

**기획 및 디자인**

- 다연: 기획, FIGMA 시안

**개발**

- 수완: 홈, 로그인, 회원가입
- 다연: 봉투선택 페이지, README 작성
- 종윤: 편지 작성 페이지, 편지 확인 페이지
- 호: GIPHY 우표 선택 페이지
- 현주: 편지 작성/확인 선택 페이지, 편지 리스트 페이지
- 소희: 받는이 선택 페이지

### 1-5. 한줄소감

**고수완**

> 회고조 분들과 프로젝트를 하니 정말 재밌었다.

**김다연**

> 회고조 분들과 진정한 복습과 소중한 추억을 남기기 위한 미니프로젝트를 하게 되어 너무 기뻤습니다! 꼭 해야하는 프로젝트가 아니라 저희가 하고싶어 시작한 프로젝트라 더욱 즐거웠던 것 같습니다. 우여곡절도 많고 기간이 짧아 구현하지 못한 기능도 너무 많았지만 그래도 작은 부분이라도 성취감을 느껴보는 계기가 되고, 리액트와 한발 더 가까워지게 된 것 같아 뿌듯합니다. :)

**김종윤**

> 미니 프로젝트이긴 하지만 회고조와 진행하니 재밌게 프로젝트 했습니다!! 수업에서 배운 내용을 바탕으로 실제로 프로젝트를 진행하며 적용해보니 리액트와 조금이나마 가까워질 수 있었습니다. 급하게 진행된 프로젝트라 생각했던 기능을 다 구현하지 못하였고, 완성도가 낮아 아쉬움이 남지만 파이널 프로젝트 하기 전 좋은 경험을 한 것 같습니다.

**이호**

> 일단 회고조와 같이 프로젝트를 하면서 너무 재밌었습니다!! 수업으론 분명 이해했다고 생각했지만, 막상 코드를 짜면서 useEffect를 이용하여 API호출을 하는 부분부터 힘들었습니다... 하지만 직접 어려움을 겪어보니 수업시간에 배웠던 내용들이 떠오르면서 ‘아~ 이래서 이런 기능을 말씀해 주셨구나!’ 라고 생각하며 재미있는 프로젝트였다 생각합니다. 다만 급하게 만들어진 프로젝트라 그만큼 아쉬움도 큰거 같습니다. 원하는 완성도에 한참 미치지 못하지만, 이번에 pocketbase를 미리 사용해보면서 얼마 안남은 react 프로젝트에 조금이나마 자신감이 생긴 것 같습니다!

**장현주**

> 공부하면서 잘 이해하지 못한 개념들을 프로젝트를 통해 더 이해할 수 있어서 좋은 경험이었습니다! 다만, 아이디 값을 데이터에서 가져와 해당 아이디에 맞는 편지가 필터링 될 수 있게 기능을 구현하고 싶었지만, 아이디 값을 받아오지 못해 고정된 아이디로만 구현한 점이 아쉬웠습니다.

**정소희**

> 회고조원들과 프로젝트를 할 수 있어서 좋았다. 수업이 끝나고 리뷰 하는 것과는 또 다른 유익함과 재미가 있었다. 기능을 완전히 구현하지 못했지만, 리액트에 대해 더 알게 되는 계기가 되었다. 더 잘 만들고싶다…

---

## 2. 서비스 소개

멋쟁이사자처럼 프론트엔드스쿨 6기가 한달 남은 시점, 동기들에게 메세지를 남길 수 있는 서비스를 기획하였습니다.

- **배포 사이트**: https://develop--dreamy-truffle-987f58.netlify.app/

- **피그마 시안**: https://www.figma.com/file/Eqr5T4YguikgMPJBpS7Xn2/lion-mailbox?type=design&node-id=0%3A1&mode=design&t=dmIrSxAzSOoiX1M6-1

<img src="/src/images/readme/WireFrame.png">

---

## 3. 구현 내용

- 체크박스로 구현 완료된 부분을 확인하실 수 있습니다.
- 현재 로그인된 아이디로 연동이 불가하여 포켓베이스의 특정 데이터 (정해진 id, 정해진 message 등) 와만 통신이 가능합니다.

### 3-1. 홈

<img src="/src/images/readme/Home.png">

- [x] 편지쓰기 버튼을 클릭하면 로그인 페이지로 이동합니다.

### 3-2. 로그인

<img src="/src/images/readme/SignIn.png">

- [ ] 아이디, 비밀번호 입력 완료 시, 로그인됩니다.
- [ ] 회원가입 링크 선택 시, 회원가입 페이지로 이동됩니다.

### 3-3. 회원가입

<img src="/src/images/readme/SignUp.png">

- [x] 이름, 이메일, 비밀번호 정규식 확인 완료 시, 회원가입이 완료됩니다.
- [x] 회원가입 데이터가 포켓베이스에 create 됩니다.

### 3-4. 편지 작성/확인 선택

<img src="/src/images/readme/SelectPage.png">

- [x] 메세지 작성 또는 메세지 확인 페이지로 이동합니다.
      <br>
  > 재사용이 가능한 컴포넌트를 Lion , MessageLion , SelectPageButton 으로 분리했습니다.

### 3-5. 받는이 선택

<img src="/src/images/readme/SelectLion.png">

- [x] 포켓베이스에서 회원가입 리스트를 가져옵니다.
- [x] 회원가입된 받는이 리스트를 랜더링합니다.
      <br>
  > header 레이아웃에 각 컴포넌트들의 색상 및 사이즈등이 props를 받아 조절이 되도록 하였습니다. (공동작업)

### 3-6. GIPHY 우표 선택

<img src="/src/images/readme/SelectStamp.png">

- [x] GIPHY API 를 연결합니다.
- [x] 선택한 GIPHY url 을 (사전에 지정된) 포켓베이스 데이터에 update 합니다.
- [ ] 검색 시, 최근 트렌드인 상단 GIF이미지를 받아와 출력합니다. (merge 전 작동하였음.)
- [x] 이미지가 성공적으로 pocketbase에 저장이 된다면, 'react-hot-toast‘를 사용하여 사용자에게 이미지가 성공적으로 저장되었음을 알립니다.
      <br>
  > header 레이아웃에 각 컴포넌트들의 색상 및 사이즈등이 props를 받아 조절이 되도록 하였습니다. (공동작업)

### 3-7. 편지 작성

<img src="/src/images/readme/WriteCard.png">

- [x] 편지 내용을 작성할 수 있습니다.
- [x] 작성된 편지 데이터를 포켓베이스로 전송합니다.
      <br>
  > - 포켓베이스에 저장되어 있는 `fromId`, `toId`, `gifStamp`, `content` 데이터를 props로 받아와 화면에 렌더링 하였습니다.
  > - 컴포넌트로 분리한 뒤 props를 받아와 스타일링을 했습니다.

### 3-8. 봉투 선택

<img src="/src/images/readme/SelectEnvelope.png">

- [x] openweathermap API 를 연결하여, 멋쟁이사자처럼 본사 위치의 현재 기온을 불러옵니다.
- [x] 기온 구간 별로 봉투 색깔을 다르게 설정합니다. (총 색상 7가지)
- [x] 좋아! 버튼 선택 시, 해당 봉투 색깔로 포켓데이터를 update 합니다.
- [x] API 연결, 봉투 색상, 봉투 이미지를 알맞게 랜더링합니다.

### 3-9. 편지 리스트

<img src="/src/images/readme/ShowCardList.png">

- [x] (사전에 지정된) 포켓베이스 아이디가 받은 편지 목록을 랜더링합니다.
- [x] 편지 작성 시 확정되었던 봉투색깔을 랜더링합니다.
- [x] 사용자 아이디에 해당하는 데이터를 불러와 사용자 아이디가 받는 아이디와 동일할 때 해당되는 편지들만 보여질 수 있도록 합니다.
      <br>
  > header 레이아웃에 각 컴포넌트들의 색상 및 사이즈등이 props를 받아 조절이 되도록 하였습니다. (공동작업)

### 3-10. 편지 확인

<img src="/src/images/readme/ViewCard.png">

- [x] (사전에 지정된) 편지 내용, 편지 gif, 보낸이, 받는이가 랜더링됩니다.
