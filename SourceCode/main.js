document.addEventListener('DOMContentLoaded',()=>{
    lodingAnimation();
   // start();//start from home page
});
let userChoice=0,cpuChoice;//score making globel
//starting
function start(){
    document.querySelectorAll("#play")[0].addEventListener("click",()=>{
        let result;
        gotoGamepage();//switch to game-page;
        result=startGame();// starting game
        showResult();
    })
}
const gotoGamepage=()=>{
    console.log("click");
    let homePage=document.querySelectorAll(".homePage")[0];
    let gamePage=document.querySelectorAll(".gamePage")[0];
    console.log(homePage);
    console.log(gamePage);
    homePage.style.display="none";//home layout display none
    gamePage.style.display="flex";//game page display flex
    document.body.style.background="linear-gradient(135deg, #200122, #0A0F24, #200122)";//bg-color for Game page
    document.body.style.color="#00FFFF";//change in color
    document.body.style.fontFamily="'Orbitron', sans-serif";//font change
}
const startGame=()=>{
    let chooseOptions=Array.from(document.querySelector("#userChoice").children);//return is object so change into a array.
    let userChoice,cpuChoice,result;
    console.log(chooseOptions);
    let option=["scissor","paper","rock"];
    let cpuIndex;
    chooseOptions.forEach((choice,i) => {
        choice.addEventListener("click",()=>{
            userChoice=option[i];
            cpuIndex=Math.floor(Math.random()*option.length);
            cpuChoice=option[cpuIndex];
            console.log("Cpu=",cpuChoice,"user=",userChoice);
            displayCpuChoice(cpuChoice);
            result=checkWiners(userChoice,cpuChoice);
        })
    });
    return result;
}
const displayCpuChoice=(c)=>{
    let icon=document.createElement("i");
    if(c==="scissor"){
        icon.classList.add("fa-regular","fa-hand-scissors");
    }else if(c==="paper"){
        icon.classList.add("fa-solid","fa-hand");
    }else if(c==="rock"){
        icon.classList.add("fa-solid","fa-hand-back-fist");
    }else{
        console.log("WrongChoice");
    }
    console.log(icon);
    let parentDiv=document.getElementById("displyChoice");
        parentDiv.appendChild(icon);
}
const checkWiners=(uC,cC)=>{
    let r="";
    if(uC===cC){
        r="draw";
    }else if((uC=="scissor"&&cC=="paper")||(uC=="paper"&&cC=="rock")||(uC=="rock"&&cC=="scissor")){
        r="win";
    }else{
        r="loose"
    };
    console.log(r);
    return r;
}
const showResult=()=>{
    
}
const lodingAnimation=()=>{
    const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const scissor = new Image();
scissor.src = 'scissor.png'; // Load your scissor image here

const rock = new Image();
rock.src = 'rock.png'; // Load your rock image here

const paperWidth = 200;
const paperHeight = 300;
const paperX = canvas.width / 2 - paperWidth / 2;
const paperY = canvas.height / 2 - paperHeight / 2;
let paperCutY = paperY + paperHeight / 2;

let scissorX = 0;
let rockY = -100;
let paperFallY = paperCutY;
let animationStep = 0;

function drawPaper() {
    ctx.fillStyle = 'white';
    ctx.fillRect(paperX, paperY, paperWidth, paperHeight);
    ctx.fillRect(paperX, paperCutY, paperWidth, paperHeight / 2);
}

function drawScissor() {
    ctx.drawImage(scissor, scissorX, paperCutY - scissor.height / 2);
}

function drawRock() {
    ctx.drawImage(rock, canvas.width / 2 - rock.width / 2, rockY);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaper();
    drawScissor();
    drawRock();

    switch (animationStep) {
        case 0:
            scissorX += 5;
            if (scissorX > canvas.width / 2 - scissor.width / 2) {
                animationStep++;
            }
            break;
        case 1:
            rockY += 8;
            if (rockY > paperCutY - rock.height / 2) {
                animationStep++;
            }
            break;
        case 2:
            paperFallY += 3;
            ctx.fillRect(paperX, paperFallY, paperWidth, paperHeight / 2);
            if (paperFallY > canvas.height) {
                animationStep++;
            }
            break;
        default:
            break;
    }

    requestAnimationFrame(draw);
}

scissor.onload = () => rock.onload = draw;
   
}