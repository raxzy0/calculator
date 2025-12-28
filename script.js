function add(a,b) {
    if (!Number.isInteger(a+b)) {
        decBtn.disabled=true
        return (a+b).toFixed(7)
    }
    else return a+b
}

function subtract(a,b) {
    if (!Number.isInteger(a-b)) {
        decBtn.disabled= true
        return (a-b).toFixed(7)
    }
    else return a-b
}

function multiply(a,b) {
    if (!Number.isInteger(a*b)) {
        decBtn.disabled = true
        return (a*b).toFixed(7)
    }
    else return a*b
}

function divide(a,b) {
    if (b ==0) {
        return "Skibidi"
    }
    else {
        if (!Number.isInteger(a/b)) {
            decBtn.disabled = true 
            return (a/b).toFixed(7)
        }
        else return a/b
    }
}

let a = ''
let b = ''
let operator = 'add'
switchnum = false

let numBtn = document.querySelectorAll('.num')
let opBtn = document.querySelectorAll('.op')
let equalsBtn = document.querySelector('.sum')
let decBtn = document.querySelector('.dec')

equalsBtn.disabled = true

let clearBtn = document.querySelector('.clear')
let delBtn = document.querySelector('.del')

let display = document.querySelector('.inputbar')
let logbar = document.querySelector('.log')

numBtn.forEach(button => 
    button.addEventListener("click", (e)=> {
    let number = e.target.textContent
    display.value += number
    if (switchnum == false) {
        a += number
        console.log(a)
    }
    else if (switchnum == true) {
        b += number
        console.log(b)
    }

}))

opBtn.forEach(button =>
    button.addEventListener("click", (e) => {
        opBtn.forEach(button => (button.style.backgroundColor = 'grey') && (button.disabled = true))
        if (button.classList.contains("add")) {
            operator = 'add'
        }
        else if (button.classList.contains("subtract")) {
            operator = 'subtract'
        }
        else if (button.classList.contains("multiply")) {
            operator = 'multiply'
        }
        else if (button.classList.contains("divide")) {
            operator = 'divide'
        }
        display.value += e.target.textContent
        logbar.value = display.value
        display.value = ''
        switchnum = true
        decBtn.disabled = false
        equalsBtn.disabled = false
    })
)

equalsBtn.addEventListener("click", () => {
    logbar.value += display.value + '='
    display.value = operate(a,b, operator)
    a = display.value
    b = ''
    switchnum = false
    opBtn.forEach(button => (button.style.backgroundColor = 'white') && (button.disabled = false))
    decBtn.disabled = false
    equalsBtn.disabled= true
})

clearBtn.addEventListener("click", () => {
    switchnum = false
    opBtn.forEach(button => (button.style.backgroundColor = 'white') && (button.disabled = false))
    display.value = ''
    logbar.value = ''
    a = ''
    b = ''
    equalsBtn.disabled = true
})

decBtn.addEventListener("click", () => {
    if (switchnum == false) {
        display.value += '.'
        a += '.'
        console.log(a)
    }
    else if (switchnum == true) {
        display.value += '.'
        b += '.'
        console.log(b)
    }
    decBtn.disabled = true
})

delBtn.addEventListener("click", () => {
    if (switchnum == false) {
        copy = a
        a = copy.slice(0, a.length-1)
        display.value = a      
    }
    else if (switchnum == true) {
        copy = b
        b = copy.slice(0, b.length-1)
        display.value = b
    }
})


function operate(a,b, operator) {
    num1 = Number(a)
    num2 = Number(b)
    if(operator == "add") {
        return add(num1,num2)
    }
    else if (operator == "subtract") {
        return subtract(num1,num2)
    }
    else if (operator == "multiply") {
        return multiply(num1,num2)
    }
    else if (operator == "divide") {
        return divide(num1,num2)
    }
}