
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};
services['Розбити скло'] = "200 грн";

function price() {
    let sum = 0;
    for (let key in services) {
        console.log("key = ", key);
        console.log(services[key]);
        sum = sum + parseInt(services[key]);
        // Преобразуем строку в число и суммируем, 4 раза итерация
    }
    console.log("jdjsfjs " + sum);
    //return sum;

}
price();
function maxPrice(){
    let max = -1;
    for(let key in services) {
        console.log("key = ", key);
        let currentPrice = parseInt(services[key]);
        if(max < currentPrice) {
            max = currentPrice;
        }
    }
    console.log("maxPrice" + max);
}

maxPrice();



function minPrice(){
    let min = Infinity; // бесконечность..
    for(let key in services) {
        console.log("key = ", key);
        let currentPrice = parseInt(services[key]);
        if(min > currentPrice) {
            min = currentPrice;
        }
    }
    console.log("minPrice" + min);
}
minPrice();


//Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
//Створити метод minPrice(), який повертає мінімальну ціну.
//Створити метод maxPrice(), який повертає максимальну ціну.

//let totalPrice = price();
//console.log("общая сумма всех услуг", totalPrice);

//Створити метод minPrice(), який повертає мінімальну ціну.
//Створити метод maxPrice(), який повертає максимальну ціну.
