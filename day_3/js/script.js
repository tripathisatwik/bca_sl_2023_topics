//Control Statement
//if statement 
let num_one = 12 
let num_two = 23
if (num_one + num_two == 35){
    console.log("Correct Answer")
    console.log("The result is: " + (num_one + num_two))   
}
if (num_one > num_two){
    console.log(num_one + "is grater than" + num_two)
}
if (num_one < num_two){
    console.log(num_two + "is grater than" + num_one)
}

//Excersise 
//Define two variables; country and country code 
//check if the value and type of variable is same or not 
//value -> "Nepal" for country and "NP" for code
//type -> String 
let country = "Nepal"
let country_code = "NP"
if(country == country_code){
    console.log("The value of strings are equal")
}
if(country === country_code){
    console.log("The type of data match" )
    
}
console.log("Type of country variable" + typeof country + "Type of country_code variable" + typeof country_code)    
if (country === "Nepal"){
    console.log("Match")
}

let pasword = "dav"
if(typeof password !== String){
    console.log("Incorrect Input")
}

//if else statement 
let college_name = "dav"
let college_location = "lalitpur"
if(college_name == "dav" && college_location == "lalitpur"){
    console.log("Correct Information Provided")
}else{
    console.log("Incorrect Information Provided")
}
let username = "mark"
let pin_code = 1234 
if(username == "Martin" | pin_code == 1234){
    console.log("User or pin is valid")
}else{
    console.log("Invalid ")
}

// if else if statement 
let marks = 89
if (marks >= 0 & marks <= 39.99){
    console.log("Fail")
}else if (marks >= 40 & marks <= 59.99){
        console.log("Third Division")
}else if (marks >= 60 & marks <= 64.99){
    console.log("Second  Division")
}else if (marks >= 65 & marks <= 84.99){
    console.log("First Division")
}else if (marks >= 25 & marks <= 100){
    console.log("Distinction")
}else if (marks > 100 | marks < 0){
    console.log("Plese enter value between 0-100")
}


//nested if else statement 
let acc_no = "AC001"
let pin = 5588
let acc_type = "savings"
if (acc_no !== "AC-001"){
    console.log("Welcome to NIC Asia Bank") 
    if (pin === 5588){
        console.log("Have a nice day")
        if (acc_type === "savings"){
            console.log("Your account type is savings")
        }else{
            console.log("Contact your bank for your account type")
        }
    }else{
        console.log("Invalid account number or pin code")
    }
}else{
    console.log("Account not available at the moment ")
}

//switch statement
let day_number = 5
switch(day_number){
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Friday")
        break
    case 7:
        console.log("Saturday")
        break
    default:
        console.log("Invalid day number")
        break
}