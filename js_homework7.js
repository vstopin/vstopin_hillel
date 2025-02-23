//ДЗ 10.1 Параноя
var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" //ворожий об'єкт, засуджую!!!
    },
];

const emailValidator = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@(?:gmail\.com|yahoo\.com)$/;

const validEmails = arr.filter(user => emailValidator.test(user.email));

console.log(validEmails);





//ДЗ 10.2 Без А

const regex = /^[^aA]{6,}$/;

const words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];

const wordsWithoutA = words.filter(word => regex.test(word));

console.log(wordsWithoutA);
