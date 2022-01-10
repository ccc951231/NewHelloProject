// number1.js

let num1 = 100.523;

console.log(Math.floor(num1)); //소수점 바닥은 버린다.
console.log(Math.ceil(num1)); //소수점 올림을 한다.
console.log(Math.round(num1)); //소수점 반올림을 한다.

// 1 ~ 2 : 1.4
//  2
//  1.4
//  1

for(let i = 0; i< 10; i++){ 
    let temp = Math.random();
    console.log(temp);
}

//console.log(pareInt(Math.random() * 5)); // 0 ~ 5 
console.log(Math.floor(Math.random()*5) + 1); // 0 ~ 5

let findVal = -1;
let order = parseInt(Math.random() * 9) + 1;
for(let i = 0; i < 9; i++){
    let temp = parseInt(Math.random() * 9) + 1;
    document.write(`<div>${temp}</div>`);
    if(i%3 ==2){
        document.write('<br>')
    }
    if(i == 0){
        findVal = temp;
    }
}
window.alert(findVal + '를 찾으세요');


function clickFnc(e){
    console.log(e.target.innerText);
    //window.alert(this.innerText);
    if(e.target.innerText == findVal){
        window.alert(findVal + '를 찾았습니다!!');
        e.target.style.color = 'blue';
    }   
}

let divElem = document.getElementsByTagName('div');
for(let i=0; i<divElem.length; i++){
    divElem[i].onclick = clickFnc; //onclick 이벤트
}
