let animals = ["lion", "lobster", "seagull", "skunk", "turtle", "bear", "deer", "frog", "horse"];
randomAnimals1 = shuffle([...animals]);
randomAnimals2 = shuffle([...animals]);
turns = 0

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

    if (twoCards.length !== 2) {
        document.getElementById(twoCards[0]).disabled = true
    } else {
        document.getElementById(twoCards[1]).disabled = true

        if (twoCards[0].replace(/.$/,"") === twoCards[1].replace(/.$/,"")){
            twoCards = []
            return
        }
        setTimeout(turnCardsBack,1000, twoCards)
        document.getElementById(twoCards[0]).disabled = false
        document.getElementById(twoCards[1]).disabled = false
        twoCards = []
    }
    let j = 0
    let disabledButtons = document.getElementsByTagName("button");
    for (let i = 0; i < disabledButtons.length; i++){
        if (disabledButtons[i].disabled === true){
            break
        } else {
            j++
            if (j===disabledButtons.length){
                alert("poggers")
            }
        }
    }

}

function turnCardsBack(twoCards){
    document.getElementById(twoCards[0]).style.backgroundImage = "url()";
    document.getElementById(twoCards[1]).style.backgroundImage = "url()";
}


for (let num = 0; num < animals.length; num++){
    let button = document.createElement("button");
    button.setAttribute("onClick", "turnAround(this);sameCards(this)")
    button.setAttribute("id", randomAnimals1[num]+String(1))
    row1.appendChild(button);
}

for (let num = 0; num < animals.length; num++){
    let button = document.createElement("button");
    button.setAttribute("onClick", "turnAround(this);sameCards(this)")
    button.setAttribute("id", randomAnimals2[num]+String(2))
    row2.appendChild(button);
}


