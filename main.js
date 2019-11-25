function main () {
    const container = document.querySelector('#container');
    var min = document.querySelector('#min');
    var max = document.querySelector('#max');
    var fizz = document.querySelector('#fizz');
    var buzz = document.querySelector('#buzz');

    console.log("this is befor the default elements are genetared");
    fizzBuzz();
    console.log("default elemets are: min value:" + min.value + "; max value: " + max.value + "; fizz value: " + fizz.value + "; buzz value: " + buzz.value);

    const generate = document.querySelector("#generate")
    // have to add an if if the values are empty
    console.log("we have made a button");
    generate.addEventListener('click', event => {
        console.log("we clicked on the generate button");
        container.innerHTML = ''; 
        console.log("just emptied the container div");
        fizzBuzz();
        console.log("default elemets are: min value:" + min.value + "; max value: " + max.value + "; fizz value: " + fizz.value + "; buzz value: " + buzz.value);
      });
    

    const clear = document.querySelector("#clear")
    console.log("we have made a clear all button");
    clear.addEventListener('click', event => {
        console.log("we clicked on the clear all button");
        container.innerHTML = ''; 
        console.log("just emptied the container div");
        min.value = '1';    
        max.value = '100'; 
        fizz.value = '3'; 
        buzz.value = '5';  
        console.log("all values are empty");
      });
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

    // add new div elements inside container element
    for (let i = min.value; i <= max.value; i++) {
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
}


main ();
