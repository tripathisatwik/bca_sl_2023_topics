//income amount
let salary = 30000
let share = 3000
let fd = 300
let income = [salary,share,fd]

//returns total income 
function getTotalIncome(){
    let sum = 0
    for (let i = 0; i < income.length; i++) {
        sum += income[i]
        
    }
    return sum
}

//expenses amount
let pf = salary * (10/100)
let tds = salary * (1/100)
let insurance = 700
let vehicle = 1000
let fooding = 2000
let extra = 1500
let expenses = [pf,tds,insurance,vehicle,fooding,extra]

//returns total expenses
function getTotalExpenses(){
    let sum1 = 0
    for (let i = 0; i < income.length; i++) {
        sum1 += expenses[i]
        
    }
    return sum1
}

//returns gross salary 
function calculateGrossSalary(){
    let pfbycomp = 3000
    let gross = 0
    gross = salary + pf + pfbycomp
    return gross
}

//returns net salary 
function calculateNetSalary(){
    let net = 0
    net = salary - pf - tds
    return net
}

let totalgross = getTotalIncome() - getTotalExpenses()
console.log("PF is: " + pf)
console.log("TDS is: " + tds)
console.log("Gross Income is: " + totalgross)
console.log("Total Income is: " + getTotalIncome())
console.log("Gross Salary is: " + calculateGrossSalary())
console.log("Net Salary is: " + calculateNetSalary())