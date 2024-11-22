
console.log("Привет");
const age = 12;
const name = "Artem";
let name1 = "Serega";
name1 = "tol9n";
console.log(age, name, name1);

console.log("is 5 > 3",5>3);
//Сравниваем через == число и строку получаем true
// надо сравнивать через строгое сравнение "==="

console.log( 5 == "5"); //true
console.log( 5 === "5"); //false

//Проверка операторы
console.log(2 > 3 && 2 < 4);
//Условия
if (1 < 3){
    console.log("1<3");

}else {
    console.log("Else")
}
//Условия в одну строку
if (1 < 3) console.log("1<3");
//Условия с else if
if (1 < 3){
    console.log("1<3");

}else if (1 > 3){
    console.log("Else")
}else (console.log("Ничего"))

//Swichcase
let name2 = "Sergey";
switch (name2){
    case "Artem": {
        console.log("Имя Артём");
    break;
    }
    case "Sergey":{
        console.log("Имя Сергей");
        break;
    }
    default: {
        console.log("дефолт");
    }
}
//Тернарный оператор

let  a = 12;
a > 1 ? console.log("тру") : console.log("false");
console.log("Доступ",a < 18 ? "Ограничен" : "Разрешон");
let status = a === 12 ? "1" : "2";
console.log(status)

//Array
const arr = [1,2,3,4,4,5,5,5,5,3,41];
console.log(arr.at(3));
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
//добавить элемент
arr.push(34);
console.log(arr)
    //Удалить последний
console.log(arr.pop());
console.log(arr)