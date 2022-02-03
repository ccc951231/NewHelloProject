// dom2.js
// document object model
// elemet(elemet node, attribute node, text node), tag
//<img src='sample.jpg'>, <input type='text' value='sample'>
let img = document.createElement('img');
img.setAttribute('src', '../imgs/image1.png');
img.setAttribute('id', 'mypicture');
img.setAttribute('width', '200px');

document.getElementById('show').appendChild(img);
console.log(img);

// <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
//ul, li*3, li>text
let fruits = ['Apple', 'Banana', 'Cherry'];
let ul = document.createElement('ul');

for (let fruit of fruits) { //of를 사용하면 of뒤에 들어가 있는 갯수만큼 반복을 하겠다는 의미

    let li = document.createElement('li');
    let text = document.createTextNode(fruit);
    li.appendChild(text);
    ul.appendChild(li);
}


//<두가지 사용법 두번째 방법(주석x)은 callBack함수를 써서 사용하는 법>

// li = document.createElement('li');
// text = document.createTextNode('Cherry');
// li.appendChild(text);
// ul.appendChild(li);

fruits.forEach(callBackFnc); //forEach는 배열 요소에서만 사용가능

function callBackFnc(item) {
    let li = document.createElement('li');
    let text = document.createTextNode(item);
    li.appendChild(text);
    ul.appendChild(li);
}
console.log(ul);

document.getElementById('bdy').appendChild(ul);

let delBtn = document.getElementById('delBtn');
delBtn.onclick = function () {
    let sname = document.getElementById('sname').value;
    let list = document.querySelectorAll('#nameList>li');
    for (let i = 0; i < list.length; i++) {
        if (list[i].innerText == sname) {
            list[i].remove();
            break;
        }
    }
}

//이벤트 등록.
//이벤트 기능 : 사용자의 입력 값 -> <li>입력값</li>
//ul태그 찾고 ul 하위에 붙여넣기.

let addBtn = document.getElementById('addBtn'); //add값을 불러와서 변수 설정 후 담는다.
addBtn.onclick = function () { //이벤트 발생시 사용할 함수
    let sname = document.getElementById('sname').value; //사용자가 정의한 값 의 value속성을 읽어와서 sname 변수에 담음
    let li = document.createElement('li'); //리스트 태그를 만들어 리스트 변수에 담는다. 
    let text = document.createTextNode(sname); //textnode로 텍스트를 만든다.
    li.appendChild(text); //부모자식간 연결하기

    document.getElementById('nameList').appendChild(li);

    document.getElementById('sname').value = "";
    document.getElementById('sname').focus();
}