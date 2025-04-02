let uScore = 0;
let cScore = 0;
let userWin = true

const userdisp = document.querySelector("#uscore");
const compdisp = document.querySelector("#cscore");
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const btn = document.querySelector(".buttonreset");


const computerChoice = () =>{
    const choices = ["rock","paper","scissor"]
    const rand = Math.floor(Math.random()*3)
    return choices[rand] 
}

choice.forEach(choice => {
    
    console.log(choice);
    choice.addEventListener("click",()=>{
        const clicked = choice.getAttribute("id");
        const compChoice = computerChoice()
        game(clicked,compChoice);
    })
});
const draw = () => {
    msg.innerText = "Game is Draw ! Play Again.";
}
const winner = (userWin,compChoice) => {
    if(userWin){
        uScore++
        userdisp.innerText = `${uScore}`
        msg.innerText = `You Win ! Computer Choice was : ${compChoice} `
    }
    else{
        cScore++
        compdisp.innerText = `${cScore}`
        msg.innerText = `You Lost ! Computer Choice was : ${compChoice} `
    }
}

const game = (clicked,compChoice) =>{
    console.log("Uers choice " + clicked +" CompChoice " + compChoice)
    if(clicked === compChoice){
        draw();
    }
    else{
        
        if(clicked === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else if(clicked === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false: true;
        }
        winner(userWin,compChoice);
    }
    
}
btn.addEventListener("click" , () =>{
    location.reload();

})