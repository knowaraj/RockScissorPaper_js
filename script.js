let uScore = 0;
let cScore = 0;

const choice = document.querySelectorAll(".choice");
const computerChoice = () =>{
    const choices = ["rock","paper","scissor"]
    const rand = Math.floor(Math.random()*3)
    console.log(choices[rand]) 
}

choice.forEach(choice => {
    
    console.log(choice);
    choice.addEventListener("click",()=>{
        const clicked = choice.getAttribute("id");
        console.log("you clicked " + clicked)
        computerChoice()
        game(clicked);
    })
});



const game = (clicked,computerChoice) =>{
    
}