// let item_1
// item_1=5
// console.log(item_1)
// let item_2 = 3, item_3=item_1+item_2 //Можно, но не очень читаемо
// console.log(item_2,item_3)

// let item_4 = "Yolochka"
// console.log(item_4,item_3+item_4,item_3*item_4)

// let item_5=item_3; //console.log(item_5)


// let item_6, item_6_type
// item_6 =15, item_6_type=typeof(item_6)
// console.log("item_6==" +item_6,"item_6_type=="+item_6_type)//Произошла конкатенация 

// let item_7=String(item_6);   //Преобразовали значение к строке
// let item_7_type=typeof item_7
// console.log("item_7==" +item_7,"item_7_type=="+item_7_type)

//let age_1="dgfd", age_2=18, age_3=60
// if (age_1<age_2) {
//     console.log('You don’t have access cause your age is ' + age_1 + ' It’s less then 18')
// }
// else if (age_2<=age_1 && age_1<age_3) {
//     console.log('Welcome!')
// }
// else if (age_1>=age_3) {
//     console.log("Keep calm and look Culture channel")
// }
// else console.log('Technical work')


// //////1*
////Первый способ вызова
//let age_2=18, age_3=60
// function CheckAge (age) {
//     if (age<age_2) {
//         console.log('You don’t have access cause your age is ' + age + ' It’s less then 18')
//     }
//     else if (age_2<=age && age<age_3) {
//         console.log('Welcome!')
//     }
//     else if (age>=age_3) {
//         console.log("Keep calm and look Culture channel")
//     }
//     else console.log('Technical work')
// }
// CheckAge (18)


//////Вызов через неизменяемую переменную
//let age_2=18, age_3=60
// const checkAge=function (age) {
//     if (age<age_2) {
//         console.log('You don’t have access cause your age is ' + age + ' It’s less then 18')
//     }
//     else if (age_2<=age && age<age_3) {
//         console.log('Welcome!')
//     }
//     else if (age>=age_3) {
//         console.log("Keep calm and look Culture channel")
//     }
//     else console.log('Technical work')
// }
// checkAge(17), checkAge(18), checkAge(61)



////2*  Проверяем на тип данных
//let age_2=18, age_3=60
// const checkAge=function (age) {
//     if (typeof(age)=='number') {
//         if (age<age_2) {
//             console.log('You don’t have access cause your age is ' + age + ' It’s less then 18')
//         }
//         else if (age_2<=age && age<age_3) {
//             console.log('Welcome!')
//         }
//         else if (age>=age_3) {
//             console.log("Keep calm and look Culture channel")
//         }
//         else console.log('Technical work')
//     }
//     else console.log("sorry,bro")
// }
// checkAge(17), checkAge(18), checkAge(61),checkAge("dsfgd")


////3* Преобразуем текст в числа
//let age_2=18, age_3=60
// const checkAge=function (age) {
//      (typeof(age=Number(age))=="number") 
//         if (age<age_2) {
//             console.log('You don’t have access cause your age is ' + age + ' It’s less then 18')
//         }
//         else if (age_2<=age && age<age_3) {
//             console.log('Welcome!')
//         }
//         else if (age>=age_3) {
//             console.log("Keep calm and look Culture channel")
//         }
//         else console.log('Technical work')
// }
// checkAge(17), checkAge(18), checkAge(61),checkAge("5"),checkAge("20"),checkAge("5gkyujg"),checkAge(NaN)


///3*Второй вариант
// let age_2=18, age_3=60
// const checkAge=function (age) {
//     age=Number(age)
//        if (age<age_2) {
//            console.log('You don’t have access cause your age is ' + age + ' It’s less then 18')
//        }
//        else if (age_2<=age && age<age_3) {
//            console.log('Welcome!')
//        }
//        else if (age>=age_3) {
//            console.log("Keep calm and look Culture channel")
//        }
//        else console.log('Technical work')
// }
// checkAge(17), checkAge(18), checkAge(61),checkAge("5"),checkAge("20"),checkAge("5gkyujg"),checkAge(NaN)

////4*
let age_2=18, age_3=60
let age=prompt("Pls, enter your age, honestly pls, I see all")
const checkAge=function (age) {
    ///age=Number(age)
       if (age<age_2) {
           alert('You don’t have access cause your age is ' + age + ' It’s less then 18')
       }
       else if (age_2<=age && age<age_3) {
           alert('Welcome!')
       }
       else if (age>=age_3) {
           alert("Keep calm and look Culture channel")
       }
       else alert('Technical work')
}
checkAge(age)