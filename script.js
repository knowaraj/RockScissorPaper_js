let uScore = 0;
let cScore = 0;

const choice = document.querySelectorAll(".choice");


choice.forEach(choice => {
    
    console.log(choice);
    choice.addEventListener("click",()=>{
        const clicked = choice.getAttribute("id");
        console.log("you clicked " + clicked)
        game(clicked);
    })
});



const game = (clicked) =>{
    
}