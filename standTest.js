// [요구사항]
// 아래의 함수를 화살표 함수로 변환하세요.

// [코드]
function add(a, b) {
    return a + b;
}
// 여기에 코드를 작성하세요.
const add = (a,b) =>{return a+b;}



// 아래 변수 value의 값이 10보다 크면 "big"을, 그렇지 않으면 "small"을 변수 result에 저장하는 삼항연산자를 작성하세요.
// [코드]
let value = 8;
let result;
// 여기에 코드를 작성하세요.
result=value>10?"big":"small"
// [테스트]
// result의 값이 "small"인지 확인하세요.


// [요구사항]
// 아래의 객체에서 name과 age 속성을 구조분해할당을 사용하여 각각의 변수에 저장하세요.
// [코드]
let person = { name: "Alice", age: 25, job: "Engineer" };
// 여기에 코드를 작성하세요.

let { name, age } = person;
// [테스트]
// name 변수의 값이 "Alice"이고, age 변수의 값이 25인지 확인하세요.



// [요구사항]
// 아래의 변수들을 사용하여 단축 속성명을 이용한 객체를 생성하세요.
// [코드]
let a = "hello";
let b = "world";
// 여기에 코드를 작성하세요.
const obj = { a:a,b:b }
// [테스트]
// 생성된 객체의 a 속성의 값이 "hello"이고, b 속성의 값이 "world"인지 확인하세요.


// [요구사항]
// 아래의 배열을 전개구문을 사용하여 새로운 배열에 복사하세요.
// [코드]
let fruits = ["apple", "banana", "cherry"];
let newFruits;
// 여기에 코드를 작성하세요.
newFruits=[...fruits]
// [테스트]
// newFruits 배열이 ["apple", "banana", "cherry"]인지 확인하고, 원본 fruits 배열과는 다른 참조를 가지고 있는지 확인하세요.



// [요구사항]
// 아래의 함수를 async/await를 사용하여 비동기로 작동하게 만드세요.
// [코드]
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}
// 여기에 코드를 작성하세요.
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}
// 함수 호출 및 결과 확인
fetchData().then((result) => console.log(result)); // "Data fetched!"
// [테스트]
// fetchData 함수를 호출하여 "Data fetched!" 문자열이 정상적으로 반환되는지 확인하세요.



// [요구사항]
// 아래의 함수에서 then, catch, finally를 사용하여 비동기 처리를 하고,
// 성공적으로 데이터를 가져오면 "Data: [데이터]", 에러가 발생하면 "Error: [에러 메시지]",
// 그리고 작업이 끝났을 때 "Process completed"를 출력하세요.
// [코드]
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Network Error");
        }, 1000);
    });
}
// 여기에 코드를 작성하세요.
fetchDataWithError()
    .then((data) => {
        console.log("Data:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Process completed");
    });
// [테스트]
// fetchDataWithError 함수를 호출하여 적절한 메시지들이 출력되는지 확인하세요.




// [요구사항]
// 아래의 async/await 함수를 then ~ catch로 변환하세요.
// [코드]
async function getData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}
// 여기에 코드를 작성하세요.
function getData(){
    fetch('https://api.example.com/data')
    .then((res)=>{return res.json()})
    .then((data)=> {return data;})
    .catch((err)=>{return err;})
}
// [테스트]
// 변환된 함수를 호출하여 동일하게 데이터를 반환하는지 확인하세요.



// [요구사항]
// setTimeout을 사용하여 2초 후에 "Hello after 2 seconds"를 출력하는 함수를 작성하세요.
// [코드]
// 여기에 코드를 작성하세요.
setTimeout(()=>{resolve("Hello after 2 seconds")},2000)
// [테스트]
// 해당 함수를 호출하여 2초 뒤에 정해진 메시지가 출력되는지 확인하세요.



// [요구사항]
// 아래의 HTML 요소에서 id가 "myText"인 요소의 텍스트를 "Hello, DOM!"로 변경하세요.

// [HTML]
/*
<div id="container">
    <p id="myText">Replace this text.</p>
</div>
*/
// [코드]
// 여기에 코드를 작성하세요.
document.getElementById("myText").innerText=`Hello, DOM!`
// [테스트]
// 웹 페이지에서 "myText" 요소의 텍스트가 "Hello, DOM!"으로 바뀌었는지 확인하세요.



// [요구사항]
// 버튼을 클릭하면 "Clicked!"라는 텍스트를 alert으로 띄우는 이벤트 리스너를 추가하세요.
// [HTML]
/*
<button id="clickButton">Click me!</button>
*/
// [코드]
// 여기에 코드를 작성하세요.
document.getElementById("clickButton").addEventListener("click",()=>{
    alert("Clicked!")
})
// [테스트]
// 웹 페이지에서 "clickButton" 버튼을 클릭했을 때 "Clicked!"라는 메시지가 alert으로 나타나는지 확인하세요.



// [요구사항]
// 아래의 HTML 요소에서 class가 "highlight"인 모든 요소의 텍스트색을 빨간색으로 변경하세요.
// [HTML]
/*
<div class="content">
    <p class="highlight">Change my color!</p>
    <p>Don't change my color.</p>
    <p class="highlight">Change my color too!</p>
</div>
*/
// [코드]
// 여기에 코드를 작성하세요.
// [코드]
let highlightedElements = document.querySelectorAll(".highlight"); // class "highlight"인 모든 요소 선택

highlightedElements.forEach(element => {
    element.style.color = "red"; // 각 요소의 텍스트 색상을 빨간색으로 변경
});
// [테스트]
// 웹 페이지에서 class "highlight"를 가진 모든 요소의 텍스트색이 빨간색인지 확인하세요.



// [요구사항]
// 아래의 HTML 요소 중 "myList"에 새로운 항목 "Mango"를 추가하세요.
// [HTML]
/*
<ul id="myList">
    <li>Apple</li>
    <li>Banana</li>
</ul>
*/
// [코드]
// 여기에 코드를 작성하세요.
const ul1 = document.getElementById("myList");
let newItem = document.createElement("li");  // 새로운 <li> 요소 생성
newItem.textContent = "Mango";  // 새로운 항목에 "Mango" 텍스트 추가
ul1.appendChild(newItem);  // "myList"에 새로운 항목 추가
// [테스트]
// 웹 페이지에서 "myList"에 "Mango" 항목이 추가되었는지 확인하세요.
