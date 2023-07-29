let a = +prompt("Nechta misol ishlaysiz")

for (let i = 0; i < a; i++) {
    let n1 = random(20, 100),
        n2 = random(10, 100),
        sym = random(1, 5),
        question,
        answer
    if (sym == 1) {
        question = `${n1} + ${n2} = ?`
        answer = n1 + n2
    } else if (sym == 2) {
        question = `${n1} - ${n2} = ?`
        answer = n1 - n2
    }
    else if (sym == 3) {
        question = `${n1} * ${n2} = ?`
        answer = n1 * n2
    } else if (sym == 4) {
        question = `${n1} / ${n2} = ?`
        answer = n1 / n2
    } else if (sym == 5) {
        question = `${n1} % ${n2} = ?`
        answer = n1 % n2
    }
    let ex = +prompt(`${i + 1}-misol: ${question}`)
    if (ex == answer) {
        console.log(`Sizning javobingiz to'g'ri ${answer}`);
    }
    else {
        console.log(`Sizning javobingiz no'to'g'ri ${ex} | To'g'ri javob: ${answer}`);
    }
}


function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
// console.log(random(0, 255));
// console.log(random(0, 255));
// console.log(random(0, 255));


let body = document.querySelector("body")

function color() {
    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)
    return `rgb(${r},${g},${b})`
}
setInterval(() => {
    body.style.background = color()
    body.style.transition = `1s`
}, 1000);



var modal = prompt("Ismingizni kiriting")
while (!isNaN(modal)) {
    var modal = +prompt("Iltimos ismingizni kiriting!")
}
console.log("Mening ismim " + modal);

var age = prompt("Yoshingizni kiriting")
console.log("Men " + age + " yoshdaman");

var task = prompt("Misolni yeching 6 + 5 = ?")
if (task==6+5) {
    console.log("Sizning javob to'g'ri " + task);
}else{
    console.log("Sizning javob noto'g'ri " + task + " To'g'ri javob " + (6+5));
}
var task = prompt("Misolni yeching 6 - 5 = ?")
if (task==6-5) {
    console.log("Sizning javob to'g'ri " + task);
}else{
    console.log("Sizning javob noto'g'ri " + task + " To'g'ri javob " + (6-5));
}
var task = prompt("Misolni yeching 6 * 5 = ?")
if (task==6*5) {
    console.log("Sizning javob to'g'ri " + task);
}else{
    console.log("Sizning javob noto'g'ri " + task + " To'g'ri javob " + (6*5));
}
var task = prompt("Misolni yeching 6 / 5 = ?")
if (task==6/5) {
    console.log("Sizning javob to'g'ri " + task);
}else{
    console.log("Sizning javob noto'g'ri " + task + " To'g'ri javob " + (6/5));
}

alert("Natijani ko'rish uchun konsolni oching")

alert("KEYINGI UY ISHI")

var name = prompt("Yoshingizni kiriting")
while (isNaN(name) || name == 0) {
    var name= +prompt("Nimadir noto'g'ri ketib qoldi")
}if (name <= 18) {
    alert("Yoshsiz, oqishingiz kerak");
}else if (name <= 50) {
    alert("Ishlashingiz kerak");
}else if(name <= 59) {
    alert("Yaqinda pensiyaga chiqasiz");
}else if(name <= 150) {
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz :)");
}else if(name >= 150) {
    alert("Nimadir noto'g'ri ketib qoldi")
}

alert("KEYINGI UY ISHI")

var num = +prompt("Son kiriting, biz uni juft yoki toqligini bilib beramiz")
while (isNaN(num) || num == 0) {
    var num= +prompt("Noto'g'ri kiritdingiz, sonni boshidan kiriting")
}
// do {
//     var num = +prompt("Noto'g'ri kiritdingiz, sonni boshidan kiriting!")
// } while (isNaN(num));
if (num%2==0) {
    alert("Sizning soningiz juft")
}else{
    alert("Sizning soningiz toq")
}
    
alert("KEYINGI UY ISHI")

var num1 = +prompt("Son kiriting")
while (isNaN(num1) || num1 == 0) {
    var num1= +prompt("Noto'g'ri kiritdingiz, sonni boshidan kiriting")
}
var num2 = +prompt("Sonning darajasini kiriting")
while (isNaN(num2) || num2 == 0) {
    var num2= +prompt("Noto'g'ri kiritdingiz, sonni boshidan kiriting")
}
let box = 1
for (let i = 0; i < num2; i++) {
    box = box * num1
}
alert("Javob; " +box)

alert("KEYINGI UY ISHI")

//var num1 = +prompt("1-sonni kiriting")
//while (isNaN(num1) || num1 == 0) {
 //   var num1= +prompt("Noto'g'ri kiritdingiz, 1-sonni boshidan kiriting")
//}
//var num2 = +prompt("2-sonni kiriting")
//while (isNaN(num2)) {
  //  var num2= +prompt("Noto'g'ri kiritdingiz, 2-sonni boshidan kiriting")
//}
//var num3 = +prompt("3-sonni kiriting")
//while (isNaN(num3)) {
  //  var num3= +prompt("Noto'g'ri kiritdingiz, 3-sonni boshidan kiriting")
//}



let num4 = +prompt("1 - sonni kiriting")
let num5 = +prompt("2 - sonni kiriting")
let num6 = +prompt("3 - sonni kiriting")

if( num4 > num5 && num4 < num6 || num4 < num5 && num6 < num4 ){
  alert("O'rta qiymat " + num4)
  
}else  if( num5 > num4 && num5 < num6 || num5 > num4 && num5 > num6 ) {
  alert("O'rtacha qiymat " + num5)
  
}else if( num6 > num5 && num5 > num4 || num6 > num5 && num5 > num4) {

}else if (num5 > num6 && num6 > num4 || num4 > num6 && num6 > num5) {
  alert("O'rtacha qiymat " + num6)
}
else{
  alert("ERROR")
}
