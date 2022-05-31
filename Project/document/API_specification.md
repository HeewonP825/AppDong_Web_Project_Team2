# API specification document
<hr>

# page description

## 1. 매장 타입( tinyint 0 or 1 )
- DELIVERY  : 배달 전문 매장. (0)
- ASHLEY QUEENS : 일반 식사 매장.(1)
<br>
위 두가지는 checkbox 형태로 구현되어 있으며
checkbox를 클릭하는 즉시 get형태로 request가 이루어져야한다.

## url: localhost:9999/store?restaurant_type={type};
## method: GET
<br>

### type은 0 or 1이며 0: ashley_queens, 1: delivery를 의미한다.

### check_point : 체크박스를 둘 다 눌렀을 경우 store?restaurant_type=0&restaurant_type=1 이런식으로 줄 수 있는지 확인해 봐야한다.

## 2. 서비스 타입.
- 와인 무제한(tinyint)
- 생맥주 무제한(tinyint)
- 딜리버리(tinyint)
- 키즈룸(tinyint)

### 서비스는 서로에게 독립적이며 tinyint 0:false 1:true로써 작용한다.
## url: localhost:9999/store?wine={type}&beer={type}&delivery={type}&kids_room={type}&nursing_room={type};
## method: GET 


## 지역찾기
이거 우짜냐.. 하 어렵네 일단 넘어가자.


## 매장명 찾기<br>

## url: localhost:9999/store?name={type}
## method: GET 


## **difficulty point:**
RESTful API 표준에 맞춰서 구현을 하려 하니 모든것이 GET요청으로 이루어져야 하는 부분들이라 URL이 더러워짐 이게 맞는건지 모르겠음.
