// function gugudan(){
    
//     for(let i=1; i<10; i++){
//         for(let v = 1; v<10; v++){
//             console.log(`${i} * ${v} = ${i*v}`);     
//         }
//     }
    
    
//     // console.log(`${x} * ${y} = ${x*y}`);
// }

// gugudan();

// const great = function(name) {
//     return name + "hihi";
// };

// console.log(great("준희"));

// const add = x => x + "a+b";

// console.log(add(5));




// const gugu = x => {
//     for(let i=1; i<=10; i++){
//         document.write(`${x} * ${i} = ${x*i} </br>`);
//     }
// };

// gugu(4);

// const person = {
//     name : {
//         good: "day",
//         bad: "smile"
//     },
//     address: 50,
//     age: function () {
//         return this.address;
//     }
// };

// person.address = 80;
// person.child = {
//     hi : "go",
//     hz : "ge"
// };

// delete person.name;

// console.log(person.name);
// console.log(person.address);
// console.log(person.age());
// console.log(person.child);

// let original = {
//     name: 3,
//     address: {
//         c:3
//     }
// };

// function copy(origin){
//     let res = {};

//     for(let key in origin){
//         console.log("==");
//         if(typeof origin[key] === "object"){
//             console.log("객체");
//             res[key] = copy(origin[key]);
//         }
//         else{
//             res[key] = origin[key];
//         }
//     }
//     return res;

// }

// let co = copy(original);

// console.log(original);
// console.log(co);

// co.address.c = 5;

// console.log(original);
// console.log(co);

// const rawInput = prompt('태어난 해를 입력해주세요 : ', '');
// const year = Number(rawInput);

// let result, result2;

// switch(year%12){
//     case 0: result = "자"; break;
//     case 1: result = "축"; break;
//     case 2: result = "인"; break;
//     case 3: result = "묘"; break;
//     case 4: result = "진"; break;
//     case 5: result = "사"; break;
//     case 6: result = "오"; break;
//     case 7: result = "미"; break;
//     case 8: result = "신"; break;
//     case 9: result = "유"; break;
//     case 10: result = "술"; break;
//     case 11: result = "해"; break;

//     default: result = "해당하는 띠가 없습니다"; break;
// }

// switch(year%10){
//     case 0: result2 = "경"; break;
//     case 1: result2 = "신"; break;
//     case 2: result2 = "임"; break;
//     case 3: result2 = "계"; break;
//     case 4: result2 = "갑"; break;
//     case 5: result2 = "을"; break;
//     case 6: result2 = "병"; break;
//     case 7: result2 = "정"; break;
//     case 8: result2 = "무"; break;
//     case 9: result2 = "기"; break;
    

//     default: result = "해당하는 띠가 없습니다"; break;
// }



// alert(`${year}년에 태어났다면 ${result2}${result}년 입니다`);

// true || alert('출력A')   //or 의 특성상 하나만 true이면 true가 되기 때문에 뒤에 alert를 실행하지 않음
// true && alert('출력A')   //and의 특성상 두 가지 모두가 true여야 true가 반환되기 때문에 확인을 위해 실행 됌

//===============================================

const a = [1,'2',456,67,87,34,2];
a.push(4);
console.log(a);

a.splice(2,0,'sdf'); // 배열에 요소 추가
console.log(a);

a.splice(2,2); // 배열에 요소 제거
console.log(a);

console.log(a.indexOf(2)); // 2의 index 번호 추출

for(const i of a){  //for of는 배열 안 요소의 값을 i 에 넣는다
    document.write(`${i} //`);
}
document.write("<br>");

for(const i in a){  ////for in는 배열 안 요소의 인덱스 값을 i 에 넣는다
    document.write(`${i} | `);
    document.write(`${a[i]} //`);
}