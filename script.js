animals = ["lion", "lobster", "seagull", "skunk", "turtle", "bear", "deer", "frog", "horse"];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function turnAround(button){
    button.style.backgroundImage = "url(./images/lion.jpg)"
}

// for (let animal in animals){
//
//         document.getElementById("row1").innerHTML=animals[animal];
// }


for (let num = 1; num < animals.length; num++){
    let button = document.createElement("button")
    // button.setAttribute("onClick", "turnAround(this)")
    // button.setAttribute("id", animals[num])
    row1.appendChild(button)
    console.log(num)
}
