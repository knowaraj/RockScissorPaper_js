let uScore = 0;
let cScore = 0;
let userWin = true

const userDispdiv = document.querySelector("user-score");
const udisp = document.createElement("p");
const cdisp = document.querySelector("cscore");
const choice = document.querySelectorAll(".choice");
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
    
}
const winner = (userWin) => {

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

    }
    
}