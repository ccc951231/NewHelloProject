// example1.js

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
},{
    fullName: '홍정우',
    studNo: '1004',
    score: 88
}];
students.unshift({ //unshift: 제일 처음(앞) 부분에 추가한다.
    fullName: '고권영',
    studNo: '1005',
    score: 90
});

students.pop({  //맨 마지막 추가한 것을 삭제한다.
    fullName: 'unshift',
    studNo: '1006',
    score: 100
});

/*document.write('<ul>');
students.forEach(function(item, idx){
document.write(`<li>${item.studNo} - ${item.fullName} - ${item.score}</li>`);
});
document.write('</ul>');

function liFnc(item){
    document.write(`<li>${item.studNo} - ${item.fullName} - ${item.score}</li>`);
}*/

//위 주석과 아래의 코드는 같다. 아래는 function으로 정리하여 호출하였다.

document.write('<ul>');
students.forEach(liFnc); // callback function.
document.write('</ul>');

function liFnc(item){
    document.write(`<li>${item.studNo} - ${item.fullName} - ${item.score}</li>`);
}

const numAry = [1,2,3];
numAry.push(4); //아래의 numAry[numAry.length] 등의 식을 쓰지 않고 push로 대신 추가하여 사용할 수 있다.,
numAry.push(10);
numAry.unshift(40);
console.log(numAry)

// numAry[3] = 4;
// numAry[numAry.length] = 10;
// numAry[numAry.length] = 20;
// console.log(numAry)