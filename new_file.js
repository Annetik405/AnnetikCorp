const text = "Wonderful, Joyful, Happiness, Time, Task, Apple";

const pattern = /[^a,A,p]{6,}/g;

const result = text.match(pattern);
console.log(result);

//Напишите регулярный текст, который знает количество шести или
// больше символов, не содержащих буквы «А» (очень или мало)
//Повинен знаходити: Wonderful, Joyful
// Не повинен знаходити: Happiness, Time, Task, Apple