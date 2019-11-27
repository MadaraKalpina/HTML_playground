function main () {
    fizzBuzz();
    console.log("this is after the default elements are genetared");
    console.log("min value: " + min.value);
    console.log("max value: " + max.value);
    console.log("fizz value: " + fizz.value);
    console.log("buzz value: " + buzz.value);
    
    addHandlers ();
    console.log("Added event handlers");    
}

function addHandlers () {

    document.querySelector("#generate").onclick = () => {
        console.log("we clicked on the generate button");
        clearDivs();
        console.log("it cleared the previous divs");
        fizzBuzz(); 
        console.log("it generated these divs");
    }

    document.querySelector("#clear").onclick = () => {
        console.log("we clicked on the clear all button");
        clearDivs();
        resetValues(); 
    }
}

function clearDivs () {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    console.log("just emptied the container div");
}

function resetValues () {
    min.value = 1;    
    max.value = 100; 
    fizz.value = 3; 
    buzz.value = 5; 
    console.log("just reset the values to default");
    console.log("min value: " + min.value);
    console.log("max value: " + max.value);
    console.log("fizz value: " + fizz.value);
    console.log("buzz value: " + buzz.value);
}

function addElemObj (parent, obj) {
    const elem = document.createElement(obj.tag); 
    elem.id = obj.id; 
    elem.innerText = obj.innerText;
    elem.classList = obj.classList;
    parent.appendChild(elem); 
    return elem;
}

function fizzBuzz () {
    console.log("fizbuzz started");
    const container = document.querySelector('#container');
    const min = document.querySelector('#min');
    const max = document.querySelector('#max');
    const fizz = document.querySelector('#fizz');
    const buzz = document.querySelector('#buzz');

    for (let i = parseFloat(min.value); i <= parseFloat(max.value); i++) {
        const boxDiv = addElemObj(container, {id: "box" + i, tag: 'div', innerText: "box " + i, classList: "box"});
        if (i % fizz.value == 0 && i % buzz.value == 0) {
            boxDiv.classList.add("both"); // dalās ar abiem
            boxDiv.innerText = "FizzBuzz"; 
        }
        else if (i % fizz.value != 0 && i % buzz.value != 0) {
            boxDiv.classList.add("none"); // nedalās ne ar vienu
            boxDiv.innerText = i; 
        }
        else if (i % fizz.value == 0 && i % buzz.value != 0) {
            boxDiv.classList.add("fizz"); // dalās tikai ar 3
            boxDiv.innerText = "Fizz"; 
        }
        else if (i % fizz.value != 0 && i % buzz.value == 0) {
            boxDiv.classList.add("buzz"); // dalās tikai ar 5
            boxDiv.innerText = "Buzz";  
        }
    }
    console.log("min value: " + min.value);
    console.log("max value: " + max.value);
    console.log("fizz value: " + fizz.value);
    console.log("buzz value: " + buzz.value);
    console.log("fizbuzz finished");
}

main ();