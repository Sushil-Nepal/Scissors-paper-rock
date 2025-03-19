document.addEventListener('DOMContentLoaded',()=>{
    start();//start from home page
});
let userScore=0,cpuScore=0;//score making globel
//starting
const start=()=>{
    document.querySelectorAll("#play")[0].addEventListener("click",()=>{
        let result="";
        gotoGamepage();//switch to game-page;
        startGame();//start game
    });
}
function gotoGamepage(){
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
function startGame(){
    let chooseOptions=Array.from(document.querySelectorAll(".choices"));//return is object so change into a array.
    let userChoice,cpuChoice,result="";
    console.log(chooseOptions);
    let option=["scissor","paper","rock"];
    let cpuIndex;
    chooseOptions.forEach((choice,i) => {
        choice.addEventListener("click",()=>{
            userChoice=option[i];
            cpuIndex=Math.floor(Math.random()*option.length);
            cpuChoice=option[cpuIndex];
            console.log("Cpu=",cpuChoice,"user=",userChoice);
            displayChoice(cpuChoice);
            displayChoice(userChoice);
            result=checkWiners(userChoice,cpuChoice);
            showResult(result);
        });
    });
}
let user=0;
function displayChoice(c){
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
    let parentDiv;
    console.log(icon);
    if(user==1){
        parentDiv=document.getElementById("choseOne");
        let chis= document.querySelectorAll(".choices");
        console.log(chis);
        chis.forEach((ch)=>{
            ch.style.display="none";
        })
        parentDiv.style.display="flex";
        parentDiv.appendChild(icon);
        user=0;
    }else{
        parentDiv=document.getElementById("displyChoice");
        parentDiv.appendChild(icon);
        user=1;
    }
}
function checkWiners(uC,cC){
    let r="";
    if(uC===cC){
        r="draw";
    }else if((uC=="scissor"&&cC=="paper")||(uC=="paper"&&cC=="rock")||(uC=="rock"&&cC=="scissor")){
        r="win";
        userScore++;
        document.getElementById("userScore").innerText=userScore;
    }else{
        r="loose";
        cpuScore++;
        document.getElementById("cpuScore").innerText=cpuScore;

    };
    console.log(r);
    return r;
}
function showResult(result){

    console.log("showResult=",result);
    if((userScore<3&&cpuScore<3)&&(userScore!=0||cpuScore!=0)){
            document.getElementById("minmsgCpu").style.display="flex";
            document.getElementById("minmsgUser").style.display="flex";
            if(result==="win"){
                document.getElementById("massageUser").innerText="yah!!o ho";
                document.getElementById("massageCpu").innerText="oppss!!";
            }
            else if(result==="loose"){
                document.getElementById("massageUser").innerText="oppss!!";
                document.getElementById("massageCpu").innerText="yah!!o ho";
            }else{
                document.getElementById("massageUser").innerText="Do it again";
                document.getElementById("massageCpu").innerText="Do it again";
            }
  
    }
    else if(result=="draw"&&(userScore==0&&cpuScore==0)){
        document.getElementById("massageUser").innerText="Do it again";
        document.getElementById("massageCpu").innerText="Do it again";

    }
    else if(userScore==3||cpuScore==3){
        document.getElementById("winMassage").style.display="flex";
        if(userScore==3){
            document.getElementById("massage").innerText="You Win";
        }else{
            document.getElementById("massage").innerText="You Loose";
        }
    }else{

    }
}