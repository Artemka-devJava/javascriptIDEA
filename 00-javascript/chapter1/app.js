
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
arr.push("В один масив и цифры и строки");
console.log(arr)
    //Удалить последний
console.log(arr.pop());
console.log(arr)

//Классы в JavaScript
class Person{
    age;
    sex;

    constructor(age, sex) {
        this.age = age;
        this.sex = sex;
    }


    get age() {
        return this.age;
    }

    set age(value) {
        this.age = value;
    }

    get sex() {
        return this.sex;
    }

    set sex(value) {
        this.sex = value;
    }

    move(place){
        console.log(`Go to ${place}`);
        return 1;
    }
}

let i = new Person(12,"female");
console.log(i);
console.log(i.age);
i.age = 23;
console.log(i);
console.log(i.move("Привет") + 2);
