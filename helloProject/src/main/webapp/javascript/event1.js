// event1.js (일일히 이벤트 속성을 걸기 힘들 때 상속을 걸어 한꺼번에 지정 할 수 있게 만든다.)

let str = `<table border="1">
<thead>
    <tr>
        <th>이름</th>
        <th>전화번호</th>
        <th>주소</th>
        <th></th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>홍길동</td>
        <td>053-1234-5678</td>
        <td>대구 중구 100번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td>박기현</td>
        <td>053-5643-1232</td>
        <td>대구 중구 200번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td>홍민규</td>
        <td>053-2125-5432</td>
        <td>대구 중구 300번지</td>
        <td><button>삭제</button></td>
    </tr>
</tbody>

</table>`;

let names = document.querySelectorAll('table>tbody>tr>td:nth-child(1)');
console.log(names);

for(let i=0; i<names.length; i++){
    names[i].onclick =function(e){
        console.log(e.target.innerText);
        let text = e.target.innerText;
        alert(text + '입니다!');
    }
}
let rows = document.querySelectorAll('tbody>tr');
for(let i=0; i<rows.length; i++){
    rows[i].onmouseover = function(e){ // function(e) <<e는 매개값으로 이벤트값이 들어온다는 의미
        console.log(e.target.parentNode); //부모를 기준으로 요소를 가지고 온다.
        e.target.parentNode.style.backgroundColor = 'yellow'; //마우스가 올라가면 색상이 지정 색으로 변한다.
        //e.target.parentNode.style.display = 'none'; //두번째 단어는 대문자로 작성하고, 색상 지정할 때 작은따옴표로 감싸지 않으면 변수로 인식하여 변수를 찾는다.
    }
    // <div style='background-color: yello; display: none'></div>
    rows[i].onmouseout = function(e){ //원래 색상으로 돌리려면 null값을 준다.
        e.target.parentNode.style.backgroundColor = null;
    }
}

//delete하는 코드, 코드가 길어지면 function을 만들어서 삽입한다.
let btns = document.querySelectorAll('tbody>tr>td>button');
for(let i=0; i<btns.length; i++){
  //  btns[i].onclick = deleteFnc;  방식 두가지중 사용
  btns[i].addEventListener('click', deleteFnc);
}


function deleteFnc(e){
    e.target.parentNode.parentNode.remove();
}