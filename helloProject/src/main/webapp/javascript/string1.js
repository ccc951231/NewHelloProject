// string1.js
const person = {
    fullName: 'Hong',
    age: 10,
    toString: function () {
        return this.fullName + ', ' + this.age;
    }
}

person.fullName = 'Hwang';
person.toString();

const str = 'Hwang';
str.length;
let newStr = str.substring(1, 5);
newStr = str.slice(-3, -1);

newStr = str.replace('a', ',').replace(',', '.');
console.log(newStr);

// 주민번호 : 00101-3123456, 990101-2123456
//            850101-1234567, 870101 2123456, 9201012123456
// 남자/여자 구별하는 function
function getGender(jm) {
    if (jm.length != 13 && jm.length != 14) { //만족하지 않을경우 프로그램종료 undefined가 나온다.
        return; // 함수 종료.
    }
    // 7번째 위치 1,3: 남자, 2,4: 여자
    let genNum = jm.replace('-', '').replace(' ', '').substring(6, 7);
    genNum = jm.slice(-7, -6);
    let gender = '남자';

    if (genNum == '1' || genNum == '3') {
        gender = '남자';
    } else if (genNum == '2' || genNum == '4') {
        gender = '여자';
    } else {
        gender = 'None';
    }
    return gender;
}

console.log(getGender('850101-1234567')); //남자..
console.log(getGender('870101 2123456')); //여자..
console.log(getGender('9201012123456')); //여자..
console.log(getGender('92010121234562345')); //여자.. undefinded가 나온다.


console.log('hello'.toUpperCase().toLowerCase());

let str1 = 'hello',
    str2 = 'world';
console.log(str1.concat(' ', str2, '!!')); //concat = 앞문자 뒷문자 연결(str1과 str2)

let str3 = str1.concat(' ', str2, '!!');
console.log(str3);

let pos = str3.charAt(2);
console.log(pos);
// hello world!!
let ary = str3.split(' '); //배열에 들어가 있는 값을 split이 꺼내와준다.
for (let str of ary) {
    console.log(str);
}

let temp = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur labore nulla a iste ut ea aperiam voluptatibus? Ullam quam pariatur voluptates dolorum. Maxime nihil dolorem quibusdam facere voluptate recusandae pariatur?'
let tempAry = temp.split(' ');
console.log(tempAry.length);

let fruits = 'Apple Banana Cherry Melon';
let fruit = prompt('과일입력: ');


// banana, BANANA, BAnana 입력값 대,소문자를 구분하지 않고 하려면.toUpperCase삽입
function getLoc(fruit) {
    if(!fruit){ 
        //0, null, '', undefined => false
        return;
    }
    let temp = fruits.split(' ');
    let cnt = 0;
    console.log(temp);
    for (let i = 0; i < temp.length; i++){
        if(temp[i].toUpperCase() == fruit.toUpperCase()){
            cnt = i + 1;
        }
    }
if(cnt == 0){
    return '만족하는 값이 없습니다'; //과일 배열에 대한 값이 없을 때 나올 if문
}
return cnt + '번째';
}
console.log(getLoc(fruit));