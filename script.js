let input = document.querySelector('input');
let content = document.getElementById('content');
let shoes = ["Adidas", "Nike", "World balance", "Polo", "FUBU", "Penshoppe"];
content.innerHTML = shoes.toString();
function pushArr(){
    let inputValue = input.value;
    shoes.push(inputValue);
    content.innerHTML += "<p>After push: " + shoes.toString() + "</p>";
}

function popArr(){
    shoes.pop();
    content.innerHTML += "<p>After pop: " + shoes.toString() + "</p>";
}

function sliceArr(){
    let slicedShoes = shoes.slice(5);
    content.innerHTML += "<p>After slice: " + slicedShoes.toString() + "</p>";
}
