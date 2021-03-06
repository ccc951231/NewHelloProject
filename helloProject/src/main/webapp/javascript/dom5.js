// dom5.js
const data = [{
    name: '류지희',
    phone: '010-1212-3434',
    addr: '대구 중구 100번지',
    email: ' rjh@email.com'
}, {
    name: '차주연',
    phone: '010-1212-3434',
    addr: '대구 중구 100번지',
    email: 'rjh@email.com'
}, {
    name: '전호민',
    phone: '010-1212-3434',
    addr: '대구 중구 100번지',
    email: 'rjh@email.com'
}];
// thead 영역
function makeHead() {
    const fields = ['이름', '연락처', '주소', '이메일'];
    let thd = document.createElement('thead');
    let tr = document.createElement('tr');

    //체크박스
    let th = document.createElement('th');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', allCheckFnc);
    checkbox.onchange = function() {console.log('hhhhhhhhh')}
    th.appendChild(checkbox);
    tr.appendChild(th);

    //필드영역.
    fields.forEach(function (field) {
        let th = document.createElement('th');
        let text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);
    });

    thd.appendChild(tr);

    return thd;
}
function allCheckFnc(){
        // this => 이벤트를 받는 대상(input)
        // tobdy쪽 checkbox 찾아서 for loop 모든 checkbox의 checked = true;
        let chks = document.querySelectorAll('tbody input[type="checkbox"]');
        for (let i = 0; i < chks.length; i++) {
            chks[i].checked = this.checked;
        }
    }


// tbody 영역.
function makeBody() {
    let tbd = document.createElement('tbody');
    data.forEach(function (obj) {
        tbd.appendChild(makeTr(obj));

    });

    return tbd;
}

// tr 생성.
function makeTr(item) {
    let tr = document.createElement('tr');

    // 체크박스.
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.appendChild(checkbox);
    tr.appendChild(td);

    // 데이터 영역.
    for (let field in item) {
        let td = document.createElement('td');
        let text = document.createTextNode(item[field]);
        td.appendChild(text);
        tr.appendChild(td);

    }

    return tr;

}
// 즉시 실행함수. 일반 함수랑 다른점은 ()괄호.
(function drawTable() {
    let tbl = document.createElement('table');
    tbl.setAttribute('border', '1');
    tbl.appendChild(makeHead());
    tbl.appendChild(makeBody());

    document.getElementById('list').appendChild(tbl);
}());

// 등록버튼 이벤트.

let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addCallback); //이벤트 클릭이 발생하면 이벤트 핸들러 역할을한다?

function addCallback() {
    let name = document.querySelector('input[name="name"]').value; //속성을 통해서 name을 가져온다.
    let phone = document.querySelector('input[name="phone"]').value;
    let addr = document.querySelector('input[name="addr"]').value;
    let email = document.querySelector('input[name="email"]').value;

    if (name == "" || phone == "" || addr == "" || email == "") {
        window.alert('필수값을 입력하세요!!');
        return;
    }
    let obj = {
        name: name, // 앞엔 필드이름 뒤는 값을 의미한다.
        phone: phone,
        addr: addr,
        email: email
    }
    let tr = makeTr(obj);
    document.querySelector('#list>table>tbody').appendChild(tr);
}

// 삭제버튼 이벤트등록.
let delBtn = document.querySelector('#btn>button:nth-child(2)');
delBtn.addEventListener('click', delCallback);

function delCallback() {
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked == true){
            chks[i].parentNode.parentNode.remove();
        }
    }
}

//리스트 -> 입력화면에 보여주기
let names =document.querySelectorAll('table tbody tr td:nth-child(2)')
console.log(names);
for(let i = 0; i < names.length; i++){
    names[i].addEventListener('click', showInfo);
}

function showInfo(){
//this => 이벤트를 받는 대상(td)
let parent = this. parentNode;

document.querySelector('input[name="name"]').value
= parent.childNodes[1].innerText;
document.querySelector('input[name="phone"]').value
= parent.childNodes[2].innerText;
document.querySelector('input[name="addr"]').value
= parent.childNodes[3].innerText;
document.querySelector('input[name="email"]').value
= parent.childNodes[4].innerText;
}


