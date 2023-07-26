console.log("Hello World!")

let count = 0;

let minusBtn = document.querySelector("#minus-btn")
let plusBtn = document.querySelector("#plus-btn")
let resetBtn = document.querySelector("#reset-btn")

let counter = document.getElementById("counter")


function decrease() {
    count -= 1
    counter.textContent = count
}

function increase() {
    count += 1
    counter.textContent = count
}

function resetZero() {
    count = 0
    counter.textContent = count
}


minusBtn.addEventListener("click", decrease)

plusBtn.addEventListener("click", increase)

resetBtn.addEventListener("click", resetZero)

//---------------------------------------------------------------------

let themeBtns = document.querySelectorAll(".theme-buttons")


function selectTheme(event){
    document.body.className = event.target.textContent
    // document.querySelector("body").className = event.target.textContent

    document.querySelector("main").className = event.target.textContent

    let buttons = document.querySelectorAll("button")
    for(let i=0; i<buttons.length; i++) {
        buttons[i].classNane = event.target.textContent
    }    
}


for(let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener("click", selectTheme)
}


//---------------------------------------------------------------------


let input = document.querySelector("input")
let inputBtn = document.querySelector("#input-btn")

function getValue() {

    // console.log(input.value)
    let h2 = document.createElement("h2")
    h2.textContent = input.value
    // console.log(h2)
    document.body.appendChild(h2)
    input.value = ""
}
 
inputBtn.addEventListener("click", getValue)