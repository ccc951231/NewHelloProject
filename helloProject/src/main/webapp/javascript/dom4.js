
const titles = ["이름", "학생", "점수"];

const students = [{
    fullName: '류지희',
    studNo: '1001',
    score: 80
}, {
    fullName: '차주연',
    studNo: '1002',
    score: 85
}, {
    fullName: '전호민',
    studNo: '1003',
    score: 83
}];

let parent = document.getElementById("show");

// table > thead > tbody
let tbl = document.createElement('table');
tbl.setAttribute('border', '1');
parent.appendChild(tbl);

// <thead></thead>
let thd = document.createElement('thead');
let tr = document.createElement('tr');
thd.appendChild(tr);
titles.forEach(function (title) { //titles = 배열 
    let th = document.createElement('th');
    let text = document.createTextNode(title);
    th.appendChild(text);
    tr.appendChild(th);
});
let th = document.createElement('th');
    let text = document.createTextNode('삭제');
    th.appendChild(text);
    tr.appendChild(th);

tbl.appendChild(thd);


// <tbody></tbody>
let tbd = document.createElement('tbody');
students.forEach(function (obj) { //obj students에 있는 객체의 값을 가져온다.
    let tr = document.createElement('tr');
    tr.onmouseover = function(e){
        // 배경색으로 변경.
        e.target.style.backgroundColor = 'yellow';
    }

    tr.onmouse = function (e) {
        // 기본색상으로 변경.
    }
    for (let field in obj) {
        // field 갯수만큼 반복해서 생성.
        let td = document.createElement('td'); 
        let text = document.createTextNode(obj[field]);
        td.appendChild(text);
        tr.appendChild(td);

    }
    // 삭제버튼.
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.onclick = function(e){
        console.log(e.target);
        e.target/parentNode.parentNode.remove();
    }
    let text = document.createTextNode('삭제');
    btn.appendChild(text);
    td.appendChild(btn); //바로 윗줄의 btn을td에게 물려줌.
    tr.appendChild(td);

    tbd.appendChild(tr);

});
tbl.appendChild(tbd);


// <for문을 쓰지 않으면 아래 처럼 데이터 양만큼 반복해서 적어줘야한다.>

// // <td>이름</td>
// let td = document.createElemnet('td');
// let text = document.createTextNode(obj.fullName);
// td.appendChild(text);
// tr.appendChild(td);

// // <td>학생번호</td>
// let td = document.createElemnet('td');
// let text = document.createTextNode(obj.studNo);
// td.appendChild(text);
// tr.appendChild(td);

// // <td>점수</td>
// let td = document.createElemnet('td');
// let text = document.createTextNode(obj.score);
// td.appendChild(text);
// tr.appendChild(td);

// tbd.appendChild(tr);