mdn
https://developer.mozilla.org/ko/

# 자바스크립트 코어 (ECMAScript)
# 호스트 객체 - 웹브라우저 객체 (웹브라우저 기능)


참고)
window 객체는 생략 가능
    ex) window.location.assign("https://www.naver.com")
        -> location.assign("https://www.naver.com")



window 객체 -> console.dir(location); 속성값 확인 가능
    - location 객체
        - assign(url) : url로 이동 : 방문한 기록을 저장
        - reload() : 새로고침
        - replace() : url로 이동 : 방문한 기록을 저장x
        - hash : HTML id 요소 검색, #요소의 ID
            ex) https://www.naver.com/#footer
        - href : 전체 주소
            -> location.href="주소"; 주소 변경 -> 페이지 이동
            ex) location.href="https://www.daum.net";

    - history 객체 -> console.dir(history); -> 속성값 확인 가능
        - length : 방문한 페이지 갯수
            ex) console.dir(history); -> length: 숫자
        - scrollRestoration
            - auto : 스크롤 위치를 복구 -> 기본값
            - manual : 스크롤 위치 복구 x, 맨 처음 스크롤 위치
            - back() : 한 단계 뒤로 히스토리 이동
                ex) history.back();
            - forward() : 한 단계 앞으로 히스토리 이동
                ex) history.forward();
            - go(숫자) : 숫자 입력만큼 히스토리 이동
                -> 숫자 양수 : 숫자 만큼 앞으로 히스토리 이동
                -> 숫자 음수 : 숫자 만큼 뒤로 히스토리 이동
                    ex) history.go(-2);
    - screen 객체
        ex) screen;
    - navigator 객체
        ex) navigator;
    - document 객체


window 하위 객체
    - innerWidth - 스크롤바를 제외한 너비
    - innerHeight - 스크롤바를 제외한 높이

    - outerWidth - 스크롤바를 포함한 너비
    - outerHeight - 스크롤바를 포함한 높이

    - pageXOffset : X 측으로 스크롤한 정도
    - pageYOffset : Y 측으로 스크롤한 정도
        ex) window.pageYOffset



# 메시지 관련
    .alert("메세지"); : 알림
    .confirm("메세지"); : 확인
        ex) const result = confirm("정말 진행하시겠씁니까?");
    .prompt() : 값을 입력 창
        ex) const msg = prompt("값을 입력하세요.");
            msg; -> 입력시 입력 받은 값을 보여줌.



# 지연, 반복
    .setTimeout - 지연 실행
        - clearTimeout(등록 ID); : 지연실행 취소
        
        ex) 
            setTimeout(function(){
                console.log("지연실행!");
            },5000);
            -> 5초 뒤 "지연실행!"

        ex)
            const ID = setTimeout(function(){
                console.log("지연실행!");
            },5000);
            -> 5초 뒤 "지연실행!"
    
    .setInterval - 지연 반복 실행     
        - clearInterval(intervalId); : 반복 실행 취소
        
        ex) 
            const intervalId = setInterval(function(){
                console.log("반복실행");
            },2000);

    .open(url, "창 이름", "옵션") : 반환값은 window
        .close() -> 창을 닫을 때



# document : HTML 문서를 다루는 객체(Document Object Model - DOM)

텍스트(HTML)
    -> HTML 구성요소 -> DOM(DOM Tree)
        -> DOM Tree 구조 완성 -> 브라우저가 이벤트를 통해서 전달
        -> DOMContentLoaded
            - 참고 : defer : <script defer src='...'></script>
        -> Load : 웹페이지에 있는 리소스가 로딩(이미지, 비디오, 내부 iframe, 외부 파일(css,js))

    
    요소 선택
        - 아이디로 선택 : 한개 선택
            document.getElementById("아이디 명");
            
        - 클래스 선택 : 복수개 선택
            document.getElementsByClassName("클래스 명");

        - 태그명(요소명)으로 선택 : 복수개 선택
            document.getElementsTagName("태그명");

        - name 속성으로 선택 : 복수개 선택
            document.getElementsByName("name 속성명");

        - CSS 선택자로 선택
            document.querySelector(".class"); -> 한개 선택
            document.querySelectorAll(".class"); -> 복수개 선택


    DOM 객체 동적생성
        - 요소(태그) 생성
            document.createElement("태그명");   -> 메모리에만 생성
            
            - 실 노출 -> DOM Tree 구조의구성원이 되어야 출력
                ex)
                    const ul = document.querySelector("ul");    -> 추가할 태그 선택
                    ul.appendChild(li);                         -> 태그 생성

        - 텍스트 노드 생성
            document.createTextNode("텍스트")
                ex) const text = document.createTextNoede("텍스트");  // 추가 후
                    li.appendChild(text);   // 보내기
        
        - 속성값 통제
            - setAttribute("키", "값");     -> 속성 추가, 변경
            - getAttribute("키");           -> 속성값 조회
            - removeAttribute("키");        -> 속성 삭제   
                ex) li.setAttribute("class", "menus")   -> class:menus 추가
                ex) li.getAttribute("class")            -> class 속성 조회
                ex) li.removeAttribute("class")         -> class 속성 삭제
                ex) li.setAttribute("type", "button")   -> type 을 button으로 변경

            많이 쓰고 중요한 속성 -> 직접 속성명으로 접근 가능
                ex) const inputEl;
                    
                    inputEl.type="button"; -> button으로 변경 가능
                    input.value="클릭!"
                
                ex) inputEl.className="text_class" -> class에 text_class 가 가능

            # className -> class="cl1 cl2 cl3" 3개 중 cl2 없애기
                .classList
                    .add : 클래스 추가 
                    .remove : 클래스 제거
                    .contains : 클래스 포함 여부 체크
                    .toggle : 클래스가 있으면 제거, 없으면 추가

                    ex)
                        const inputEl = document.getElementById("text");
                        const classList = inputEl.classList;
                        classList.remove("cl2"); -> 삭제
                        classList.add("cl2");    -> 추가
                        classList.toggle("cl2"); -> 있으면 삭제, 없으면 추가
                        classList.contains("cl2"); -> 포함 유무 체크

        # 정보 전달을 위한 속성
            - data-속성명
            - dateset - data 속성 값
            - 살아 있는 객체 -> 변경 사항이 실시간 반영
                ex) dataset.price="값";   -> 추가
                ex) delete dateset.price; -> 제거   

        # 요소를 DOM Tree 추가, 삭제, 변경
            - .appendChild(추가할 요소);
            - .removeChild(제거할 요소);
            - .insertBefore(중간에 추가);
            - .replaceChile(요소 교체);
                ex)
                    const ul = document.querySelector("ul"); -> ul 태그 선택
                    const liEl = document.createElement("li") -> li 태그 추가
                    liEl.appendChild(document.createTextNode("메뉴4")); 
                    ul.appendChild("liEl"); -> ul안에 liEl 추가

        # 요소의 상대적 부모, 형제
            - .parentElement (부모)
            - .children      (자식)
            - .previusSiblingElement(자식)
            - .nextSiblingElement   (자식)
            - .firstElementChid     (자식)
            - .lastElementChild     (자식)
                ex) 
                    liEl.appendChild(document.createTextNode("메뉴4")); -> li 메뉴4 추가

                    ul.appendChild(liEl);   -> ul 안에 위에 만든 li 메뉴4 실제 적용
                    const liEl3 = liEl.previusElementSibling;   -> liEl3 선택
                    ul.removeChild(liEl3); -> liEl3 삭제

                ex) 
                    const ul = document.querySelector("ul");
                    const liEl = document.createElement("li");
                    liEl.appendChild(document.createTextNode("메뉴4")); -> 추가
                    ul.insertBefore(liEl, ul.lastElementChild); -> 선택



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <script>
        window.addEventListener("DOMContentLoaded", function(){
            const button = document.getElementById("button");
            console.log(button);
        })
    </script>
    <button type="button" id="button">클릭!</button>
</body>
</html>


# 쓰레드? - 호출 스택 - 메모리 공간



