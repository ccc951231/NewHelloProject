// array1.js

let delBtn = document.getElementById('delBtn');
delBtn.onclick = function () {
    let sname = doucument.getElementById('sname').value;
    if (!sname) {
        alert('값을 입력하세요!!');
        return;
    }

    let list = document.querySelectorAll('ul>li'); //ul태그 밑에 있는 list를 모두 가져오기.
    console.log(list); //list에 무엇이 있는지 알고 싶을 때 console로 실행해본다.
    for (let i = 0; i < list.length; i++) {
        if (list[i].innerText == sname) { //리스트 안(innerText)의 값과 이름(sname=searchname)을비교해야하므로
            list[i].style.display = 'none';
        }
    }
}



const numAry = [23, 17, 33, 72, 88];


let sum = 0;
numAry.forEach(function (item, idx, ary) {
    if (idx % 2 == 0)
        sum += item;
});
console.log(`합계: ${sum}`);

// < html창에서 삭제할 것을 입력 할 때 사용하는 코드>
const names = ['김은서', '황보경', '고권영', '류기태', '구자현'];
//for(let i = 0; i < 3; i++){ // html 창에 이름 추가 하라고 3번 반복해서 뜬다.
const sname = window.prompt('삭제할 이름 입력>> ');
for (let i = 0; i < names.length; i++) {
    if (names[i] == sname) {
        names.splice(i, 1);
    }
}
console.log(names);


/* < html창에 추가 입력 할 때 사용하는 코드(push기능)>
const name = window.prompt('추가 이름 입력>> '); //html 메세지창 입력 뜬다.
 //   names.push(name); 
 names.splice(1, 1); // splice() : 추가삭제 기능이 있다, (시작할 위치, 대체할 값 수(덜 쓰면 원래 있던 배열 리스트 한개가 사라진다), 대체할 값(내용))해당위치부터 대채할 값을 넣으면 추가된다. 해당위치부터 바꿀 값을 안넣어주면 삭제된다. 
 //}
console.log(names);*/

// let list = document.querySelectorAll('ul:nth-of-type(1)>li');
//console.log(list);
//list.forEach(function(item, idx, ary){
//    console.log(item, idx, ary);
// console.log(item.innerHTML);
//  if(idx % 2 == 0)
//   item.innerHTML = '<h3>hello</h3>';
//});