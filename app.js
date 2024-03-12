let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#Comp-score")



const genCompChoice = () =>{
   const option=["rock","paper","scissor"];
  const randIdx =  Math.floor(Math.random() * 3);
  return option[randIdx];
    //rock,paper,scissor

}
const drawGame = () =>{
   
    msg.innerText="Match Draw play again!";
    msg.style.backgroundColor="orange";
}

const showWinner=(userWin , userChoice,compChoice) =>{

    if(userWin){

        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }else {

        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You loose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}

const playGame = (userChoice) =>{
    console.log("user-choice=",userChoice);
    //Generate comp choice
    const compChoice=genCompChoice();
    console.log("comp-choice=",compChoice);

    if(userChoice ===compChoice){
          drawGame();
    }else {
        let userWin =true;
        if(userChoice==="rock"){
           userWin= compChoice==="paper" ? false :true;
        }else if (userChoice==="paper"){
            userWin=compChoice==="scissor" ? false:true;
        }else {
           userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    }

}



choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("Id");
        playGame(userChoice);
    })
})