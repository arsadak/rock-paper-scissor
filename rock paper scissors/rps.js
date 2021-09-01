
const handoption = {
    "paper":"assets/paper.png",
    "scissor":"assets/scissors.png",
    "rock":"assets/rock.png"
}

let SCORE = 0;

const userhand = (hand) => {

    let hands = document.querySelector(".hands-container");
    hands.style.display = "none";


    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    document.getElementById("userpickhand").src = handoption[hand] ;

    let cphand = comphand();

    result(hand,cphand);

}

const comphand = () => {

    let hand = ["rock","paper","scissor"];
    let cphand = hand[Math.floor(Math.random() * 3)];

    document.getElementById("comppickhand").src = handoption[cphand];

    return cphand;
}

const result = (userhand,comphand) => {

    if(userhand == "paper" && comphand == "scissor"){
        setdecision("YOU LOSE");
    }

    if(userhand == "paper" && comphand == "rock"){
        setdecision("YOU WIN");
        setscore(SCORE + 1);
    }

    if(userhand == "paper" && comphand == "paper"){
        setdecision("TIE");
    }

    if(userhand == "ROCK" && comphand == "scissor"){
        setdecision("YOU WIN");
        setscore(SCORE + 1)
    }

    if(userhand == "ROCK" && comphand == "paper"){
        setdecision("YOU LOSE");
    }

    if(userhand == "rock" && comphand == "rock"){
        setdecision("TIE");
    }

    if(userhand == "scissor" && comphand == "scissor"){
        setdecision("TIE");
    }

    if(userhand == "scissor" && comphand == "rock"){
        setdecision("YOU LOSE");
    }

    if(userhand == "scissor" && comphand == "paper"){
        setdecision("YOU WIN");
        setscore(SCORE + 1);
    }

}


const setdecision = (decision) => {
    document.querySelector(".decision").innerHTML = decision ;
}

const setscore = (score) => {
    SCORE = score
    document.querySelector(".score h1").innerText = score ;
}



const reset = () => {

    document.querySelector(".contest").style.display = "none";
    
    document.querySelector(".hands-container").style.display = "flex";
}
