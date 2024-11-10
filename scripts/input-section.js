console.log(JSON.parse(localStorage.getItem("container")))
const input = document.querySelector(".js-input-row")
let array = []
inputValue = getInput()

//localStorage operations
let container = document.getElementById("js-container")
container.innerHTML = JSON.parse(localStorage.getItem("container"));

//sets default opacity to <li> depending on localStorage's data
if (container.innerHTML != '') {
    container.style = "opacity: 1"
} else {container.style = "opacity: 0";
    container.innerHTML += "<p>Moi</p>";
}


//gets the value from the search input
function getInput() {
    const inputValue = input.value;
    if (inputValue === '') {
        return;
    }
    container.style = "opacity: 1"

    array.push(inputValue);
    console.log(array);
    generateText()
    return inputValue;
}

// generates its content on the page
function generateText() {

    let result = ''
    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        result = value
    }


    let div = `<div>${result} </div>`
    container.innerHTML += div
    const storage = container.innerHTML
    localStorage.setItem("container", JSON.stringify(storage))
    console.log(JSON.parse(localStorage.getItem("container")))

}

// clears generated divs
document.addEventListener('keydown', function(event){
    if (event.key === 'Backspace') {
        localStorage.clear("storage")
    }
})
