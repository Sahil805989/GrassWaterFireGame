let userScore=0;
let compScore=0;
let userWin=true;

const msg=document.querySelector(".msg");
const user= document.querySelector("#userScore")
const comp= document.querySelector("#compScore")
const rules= document.querySelector(".rules");

let choice= document.querySelectorAll(".choice");
const compSelect=()=>{
    let options=["grass", "water", "fire"];
    let comp=options[Math.floor(Math.random(options)*3)];
    return comp;
}
const matchdraw=()=>{
    console.log("Match Draw")
    msg.innerText="Match Draw";

}
const showWinner=(userWin,userChoice, compChoice)=>{
    if(userWin){
        console.log("You Win :)");
        msg.innerText=`You Win :) \n Your ${userChoice} beats ${compChoice}`;
        userScore++;
        user.innerHTML= userScore;
    }else{
        console.log("You Lose :(");
        msg.innerText=`You Lose :(  \n  ${compChoice} beats your ${userChoice}`;
        compScore++;
        comp.innerText= compScore;

    }
}
const showRules= rules.addEventListener("click", ()=>{
    alert(`

    1. You choose one of the three options: Grass, Water, or Fire.
    2. The computer randomly selects one of the three options as well.
    3. The outcomes are as follows:
       - Grass defeats Water.
       - Water defeats Fire.
       - Fire defeats Grass.
       - If both you and the computer choose the same option, it's a tie.
    4. Keep track of the results:
       - If you win, you earn a point.
       - If the computer wins, it earns a point.
       - In the case of a tie, no points are awarded.
    5. Repeat the process for a predetermined number of rounds.
    6. At the end of the rounds, the player (you or the computer) with the most points is the overall winner.
    
    Enjoy playing!`)
})

const playGame=(userChoice)=>{
    console.log(`userchoice is  ${userChoice}`);
    const compChoice= compSelect();
    console.log(`Computer choice is  ${compChoice}`);
    if(userChoice==compChoice){
        matchdraw();
    }else{
        if(userChoice=="grass"){
            userWin=compChoice=="fire"?false:true;
        }else if(userChoice=="fire"){
            userWin=compChoice=="grass"?true:false;
        }else{
            userWin=compChoice=="grass"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
    
    

    
}


choice.forEach((choice)=>{
    choice.addEventListener('click', ()=>
    {
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
   
})