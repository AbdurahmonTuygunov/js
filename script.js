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
while (isNaN(name)) {
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
while (isNaN(num)) {
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
while (isNaN(num1)) {
    var num1= +prompt("Noto'g'ri kiritdingiz, sonni boshidan kiriting")
}
var num2 = +prompt("Sonning darajasini kiriting")
while (isNaN(num2)) {
    var num2= +prompt("Noto'g'ri kiritdingiz, sonni boshidan kiriting")
}
alert("Javob; " +num1**num2)

alert("KEYINGI UY ISHI")

//var num1 = +prompt("1-sonni kiriting")
//while (isNaN(num1)) {
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

let num1 = +prompt("1 - sonni kiriting")
let num2 = +prompt("2 - sonni kiriting")
let num3 = +prompt("3 - sonni kiriting")

if( num1 > num2 && num1 < num3 || num1 < num2 && num3 < num1 ){
  alert("O'rta qiymat " + num1)
  
}else  if( num2 > num1 && num2 < num3 || num2 > num1 && num2 > num3 ) {
  alert("O'rtacha qiymat " + num2)
  
}else if( num3 > num2 && num2 > num1 || num3 > num2 && num2 > num1) {

}else if (num2 > num3 && num3 > num1 || num1 > num3 && num3 > num2) {
  alert("O'rtacha qiymat " + num3)
}
else{
  alert("ERROR")
}
