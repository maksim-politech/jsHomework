// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10

// let result=2
// let i=1
// while (i<11) {
//     result=result*2
//     i++
// }
// console.log(result)


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const degree = function (num) {
    let result=2
    let i=1
    for (i=1; i<=num; i++) {
        result=result*2
    }
    // console.log(result)
    return result                    //Либо через однострочную функцию: return=2**num
}
console.log(degree(11))


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let i=1
let result2 = ""
while (i<=5) {
    result2+=":)"
    console.log(result2)
    i++
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
    let result22= ""
    let i=1
while (i<=numberOfRows) {
    result22+=stroka                   ////можно заменить на console.log(result22.repeat(i))
    console.log(result22)              ////
    i++
}
}
printSmile("df", 4)


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word) {
 let NumderOfVowels = 0
 let NumderOfConsonats = 0
 let Vowels = "aeiouy".split("")          ///console.log(Vowels) Идентично: [ 'a', 'e', 'i', 'o', 'u', 'y' ]
 let Consonats = "bcdfghjklmnpqrstvwxz".split("")
 word = word.toLowerCase()         ///Приводим к нижнему регистру

  for (i=0;i<word.length;i++) {
    for (j=0;j<Vowels.length;j++) {
        if (word[i]===Vowels[j]) {
            NumderOfVowels++
            break                ///Для экономии ресурса, чтобы не пробегать весь массив
        }
    }
    for (k=0;k<Consonats.length;k++) {
        if (word[i]===Consonats[k]) {
            NumderOfConsonats++
            break
        }
    }
  }
 console.log("Слово "+ word +" состоит из "+ NumderOfVowels +" и "+ NumderOfConsonats +" букв, глассных и согласных соотвественно")
}

getWordStructure("case")
getWordStructure("Case")
getWordStructure("Check-list")



// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
    if (word.toLowerCase() == word.toLowerCase().split("").reverse().join("")) {
     console.log("Палиндром")
    }
    else console.log("Не палиндром")
}

isPalindrom("word")
isPalindrom("abba")
isPalindrom("Abba")