let userscore = 0;
let compscore = 0;
const userscorepara = document.querySelector("#user-choice");
const compscorepara = document.querySelector("#comp-choice");

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const gencompchoice = () => {
     const options = ["rock","paper","scissors"] ;
     const randidx = Math.floor(Math.random()*3);
     return options[randidx];
};
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
    })
})
const drawgame = () => {
    msg.innerText="The Game Was Draw! Play Again";
    msg.style.backgroundColor = "#29274C";
}
const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText =userscore;
        msg.innerText=`you win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } 
    else{
        compscore++;
        compscorepara.innerText =compscore;
          msg.innerText=`you lose! ${compchoice} beats ${userchoice}`;
         msg.style.backgroundColor = "red";
    }
}


const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin=true;
    if(userchoice==="rock"){
         userwin = compchoice === "paper" ? false : true;
    }else if(userchoice === "paper"){
         userwin = compchoice === "scissors" ? false : true;
    }else{
         userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoice,compchoice);
}
};

