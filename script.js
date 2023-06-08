let animals = ["lion", "lobster", "seagull", "skunk", "turtle", "bear", "deer", "frog", "horse"];
randomAnimals1 = shuffle([...animals]);
randomAnimals2 = shuffle([...animals]);

twoCards = [];

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
    let animal = button.id.replace(/.$/,"")
    button.style.backgroundImage = "url(images/" +animal+".jpg)";
}

function sameCards (attribute) {
    twoCards.push(attribute.id)
    console.log(twoCards[0])
    console.log(twoCards[1])
    document.getElementById(twoCards[0]).disabled = true;
    if (twoCards.length > 1){
        if (twoCards[0] !== twoCards[1]){
            setTimeout(=>doc, 2000)
            twoCards = [];

        }
    }
}

function turnCardsBack(attribute){
    document.getElementById(twoCards[0]).style.backgroundImage = "url()";
    document.getElementById(twoCards[1]).style.backgroundImage = "url()";
}


for (let num = 0; num < animals.length-1; num++){
    let button = document.createElement("button");
    button.setAttribute("onClick", "turnAround(this);sameCards(this)")
    // button.setAttribute("onClick", "sameCards(this)")
    button.setAttribute("id", randomAnimals1[num]+String(1))
    row1.appendChild(button);
}

for (let num = 1; num < animals.length; num++){
    let button = document.createElement("button");
    button.setAttribute("onClick", "turnAround(this)")
    button.setAttribute("onClick", "sameCards(this)")
    button.setAttribute("id", randomAnimals1[num]+String(2))
    row2.appendChild(button);
}