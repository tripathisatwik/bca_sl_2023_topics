//defining array
let places = ["Kathmandu", "Lalitpur",  "Pokhara", "Butwal"]
const gender = ["Male", "Female", "Others"]

//acessing array element with indexing 
console.log(places[0])
console.log(places[1])
console.log(places[3])

//since array is an object so we can define it using array()
let lakes =  new Array("Phewa", "Begans", "Rara", "Tilicho")

//array properities and method properities 
//length - return the length of an array example
console.log(places.length)
console.log(gender.length)
console.log(lakes.length)

//methods
//1. push - append an element in an array
//example
let days = ["Sunday", "Monday"]
console.log(days) 
days.push("Tuesday")
console.log(days)
days.push("Wednesday")
console.log(days) 

//2. pop - removes last index element form an array
let capital = ["Kathmandu", "New Delhi", "Bejing" , "Dhaka"]
console.log(capital) 
capital.pop()
console.log(capital) 
capital.pop()
console.log(capital)   

//3. shift() - removes element of first index 
let movies = ["Animal", "Marvel", "Dimag Kharab", "Batman"]
console.log(movies)
movies.shift()
console.log(movies)
movies.shift()
console.log(movies)

//4.unshift() - add an element at the brginning of the array
let kings = ["Mahendra", "Birendra", "Gyanendra"]
console.log(kings)
kings.shift()
console.log(kings)
kings.shift()
console.log(kings)

//5. splice() - add/or remove element from specified index
let languages = ["Java", "JavaScript", "Php"]

//this method takes 3 argunments 
/* 1st - position 
2nd number of elements want to remove 
3rd - element can be more than one*/ 

//to add element - set 2nd argunment 0
console.log("Splice Example")
console.log(languages)
languages.splice(1,0,"Python")

//to remove element - set 2nd argunment greater than 0
console.log(languages)
languages.splice(1, 2, "Dart")
console.log(languages)
languages.splice(3, 0, "Go Lang")
console.log(languages)
languages.splice(2, 1, "Ruby")
console.log(languages)

//6. slice() - to break array into anothe place 
console.log("Slice Example")
let province = ["Bagmati", "Koshi", "Sudur Paschim", "Karali"]
let province_two = province.slice(0,2)
let province_three = province.slice(1,3)
console.log(province)
console.log(province_two)
console.log(province_three)

//7. concat() - to merge one or more array without mutating primary array
let group_one = ["Red","Blue"]
let group_two = ["Green","Yellow"]
let groups = group_one.concat(group_two)
console.log(group_one)
console.log(group_two)
console.log(groups)

//8. flat() - converts multi-dimension array to single flat array
let cities  = [["KTM", "Pokhara"], ["Butwal", "Hetauda", "Jhapa"]]
let cities_nepal = cities.flat()
console.log(cities)
console.log(cities_nepal)