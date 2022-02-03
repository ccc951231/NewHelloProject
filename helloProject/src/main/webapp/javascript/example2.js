// example2.js

let datas = `[{"id":1,"first_name":"Neda","last_name":"Manktelow","gender":"Female","email":"nmanktelow0@dell.com"},
{"id":2,"first_name":"Ham","last_name":"Shatliff","gender":"Male","email":"hshatliff1@weather.com"},
{"id":3,"first_name":"Ingmar","last_name":"Badgers","gender":"Female","email":"ibadgers2@msu.edu"},
{"id":4,"first_name":"Madel","last_name":"Attenbrow","gender":"Male","email":"mattenbrow3@virginia.edu"},
{"id":5,"first_name":"Rita","last_name":"Waggitt","gender":"Female","email":"rwaggitt4@utexas.edu"},
{"id":6,"first_name":"Neddy","last_name":"Beinisch","gender":"Female","email":"nbeinisch5@github.io"},
{"id":7,"first_name":"Neils","last_name":"Van Merwe","gender":"Female","email":"nvanmerwe6@printfriendly.com"},
{"id":8,"first_name":"Carlye","last_name":"Willavoys","gender":"Male","email":"cwillavoys7@hp.com"},
{"id":9,"first_name":"Marinna","last_name":"Winckle","gender":"Female","email":"mwinckle8@earthlink.net"},
{"id":10,"first_name":"Ashley","last_name":"Jendrich","gender":"Male","email":"ajendrich9@wp.com"},
{"id":11,"first_name":"Randie","last_name":"Turrill","gender":"Male","email":"rturrilla@boston.com"},
{"id":12,"first_name":"Konstance","last_name":"Boseley","gender":"Male","email":"kboseleyb@nationalgeographic.com"},
{"id":13,"first_name":"Hurlee","last_name":"Corden","gender":"Male","email":"hcordenc@histats.com"},
{"id":14,"first_name":"Ainsley","last_name":"Quiddington","gender":"Female","email":"aquiddingtond@deviantart.com"},
{"id":15,"first_name":"Zolly","last_name":"Doggart","gender":"Male","email":"zdoggarte@github.com"}]`


let employees = JSON.parse(datas);
// console.log(employees);

document.write(`<table border="1">`);
document.write(`<thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Gender</th></tr></thead>`);
document.write('<tbody>')

employees.forEach((item, ind) => {  //employees에 있는 갯수만큼 반복을 돌겠다.
    console.log(item.id, item.first_name, item['last_name'], item['gender']);
    document.write(`<tr><td>${item.id}</td><td>${item.first_name}-${item.last_name}</td><td>${item.email}</td><td>${item.gender}</td></tr>`);
});
document.write('</tbody>');
document.write(`</table border="1">`);

//배열
let firstNames = [];

//employees => 배열값 중 frist_name =>
employees.forEach(function(item, ind){
    //식: 배열.push(값);
   firstNames.push(item.first_name); // employees에서 뽑은 값을 넣는다.
});

console.log(firstNames);