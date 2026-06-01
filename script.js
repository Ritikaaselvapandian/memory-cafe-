// Memory Cafe ☕

console.log("Memory Cafe Loaded ☕");

// Letter Open Function
function showLetter() {

    let letter = document.getElementById("letter");

    if(letter.style.display === "block"){
        letter.style.display = "none";
    }
    else{
        letter.style.display = "block";
    }

}

// Welcome Message
window.onload = function(){

    console.log("Welcome to Memory Cafe 🤍");

}