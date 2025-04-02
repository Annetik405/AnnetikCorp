//var str1 = "anna@yahoo.com";
//var str2 = "anna2@gmail. com";
//var re = /(@gmail|@yandex).com/;
//console.log(str1 + ': ' + str1.search(re));
//console.log(str2 + ': ' + str2.search(re));


var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>"
        },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var regg = /^[a-zA-Z0-9._-]+@(gmail|@yandex|@mail)\.ru$/;
for (key in arr){
    console.log ("key = ", key);
    console.log(arr[key].email);
    var email = arr[key].email;
    var matchResult = email.match(regg);
    if(matchResult == null) {
        console.log("email is valid ", email);
    } else {
        console.log("email is not valid ", email);
    }
}

var filteredArray = arr.filter(user123 => regg.test(user123.email));
console.log(filteredArray);




