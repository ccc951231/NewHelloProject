// dom1.js

let pelemt = document.querySelector('body>p');
console.log(pelemt);
pelemt.innerHTML = 'not hello';

let newP = document.createElement('p'); // p 태그를 만드는 메소드
newP.innerHTML = 'Good, morning';
console.log(newP);

pelemt.after(newP);

let list = document.querySelectorAll('ul>li'); // All = index.html에 있는 ul부모 태그 밑의 list를 다 가지고 온다.
list[0].remove();
console.log(list);

document.getElementsById('delBtn').onclick = function(){
    let sname = document.getElementsById('sname').value;
    let liTag =document.createElement('li');
    liTag.innerHTML = sname;
    let ul = document.querySelector('ul');
    ul.appendChild(liTag);
}

// // let obj = {
//     name:"hong", 
//     hobbies: {
//         first: 'riding',
//         last: 'sleeping'
//     }
// }

// obj.hobbies.first