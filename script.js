let userChoice = ""; 
document.getElementsByClassName('scissor')[0].addEventListener("click", () => {
    userChoice = "scissor";
    document.getElementsByClassName('box2')[0].innerHTML = `
        <img src="https://altenew.com/cdn/shop/files/tools-fine-blade-scissors-31741324230713_1080x.jpg?v=1702924808">
        <span>scissor</span>
    `;
});

document.getElementsByClassName('stone')[0].addEventListener("click", () => {
    userChoice = "stone";
    document.getElementsByClassName('box2')[0].innerHTML = `
        <img src="https://www.nerdswithknives.com/wp-content/uploads/2018/03/Fieldstone-1024x588.png">
        <span>stone</span>
    `;
});

document.getElementsByClassName('paper')[0].addEventListener("click", () => {
    userChoice = "paper";
    document.getElementsByClassName('box2')[0].innerHTML = `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYN6KlYNqFX9O8lfLs_i57ctv73yyxFXP2Ig&s">
        <span>paper</span>
    `;
});

const winning_arr = [["stone", "scissor"], ["paper", "stone"], ["scissor", "paper"]];
const draw_arr = [["stone", "stone"], ["scissor", "scissor"], ["paper", "paper"]];
const lose_arr = [["stone", "paper"], ["paper", "scissor"], ["scissor", "stone"]];


document.getElementsByClassName('go')[0].addEventListener("click", () => {
    if (userChoice === "") {
        alert("Please choose Stone, Paper, or Scissor first!");
        return;
    }

    let num = Math.floor(Math.random() * 3);
    let compChoice = ["stone", "paper", "scissor"][num];

    
    let compHTML = "";
    if (compChoice === "stone") {
        compHTML = `<img src="https://www.nerdswithknives.com/wp-content/uploads/2018/03/Fieldstone-1024x588.png"><span>stone</span>`;
    } else if (compChoice === "paper") {
        compHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYN6KlYNqFX9O8lfLs_i57ctv73yyxFXP2Ig&s"><span>paper</span>`;
    } else {
        compHTML = `<img src="https://altenew.com/cdn/shop/files/tools-fine-blade-scissors-31741324230713_1080x.jpg?v=1702924808"><span>scissor</span>`;
    }

    document.getElementsByClassName('box4')[0].innerHTML = compHTML;

    
    let result = "";
    if (winning_arr.some(pair => pair[0] === userChoice && pair[1] === compChoice)) {
        result = "YOU WIN! 🎉";
    } else if (draw_arr.some(pair => pair[0] === userChoice && pair[1] === compChoice)) {
        result = "DRAW 😐";
    } else {
        result = "YOU LOSE! 😢";
    }

    
    document.getElementsByClassName('box3')[0].innerHTML = `
        <button class="go">GO</button>
        <div class="result">${result}</div>
    `;
});


document.querySelector('.refresh').addEventListener("click", () => {
    location.reload();
});
