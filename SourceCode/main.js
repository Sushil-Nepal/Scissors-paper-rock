let user=1;//for check user choice and cpu choice
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
    document.getElementById("beforeTab").addEventListener("click",()=>{
       newTab=window.open("https://www.google.com", "_self");
       // Close the new empty tab
       newTab.close();
    });
}
function gotoGamepage(){
    userScore=0;
    cpuScore=0;
    document.getElementById("userScore").innerText=`${userScore}/3`;
    document.getElementById("cpuScore").innerText=`${cpuScore}/3`;
    let homePage=document.querySelectorAll(".homePage")[0];
    let gamePage=document.querySelectorAll(".gamePage")[0];
    homePage.style.display="none";//home layout display none
    gamePage.style.display="flex";//game page display flex
    document.body.style.background="linear-gradient(135deg, #200122, #0A0F24, #200122)";//bg-color for Game page
    document.body.style.color="#00FFFF";//change in color
    document.body.style.fontFamily="'Orbitron', sans-serif";//font change
}
function startGame(){
    nextRound("Start Game");
    document.querySelectorAll(".choices").forEach((choice)=>{
        choice.style.display="flex";
    });
    let chooseOptions=Array.from(document.querySelectorAll(".choices"));//return is object so change into a array.
    let userChoice,cpuChoice,result="";
    let option=["scissor","paper","rock"];
    let cpuIndex;
    chooseOptions.forEach((choice,i) => {
        choice.addEventListener("click",()=>{
            userChoice=option[i];
            cpuIndex=Math.floor(Math.random()*option.length);
            cpuChoice=option[cpuIndex];
            displayChoice(userChoice);
            displayChoice(cpuChoice);
            result=checkWiners(userChoice,cpuChoice);
            showResult(result);
        });
    });
    document.getElementById("resign").addEventListener("click",()=>{
        document.getElementById("massage").innerText="ARE YOU SURE?";
        document.getElementById("winMassage").style.display="flex"; 
        if(userScore!=3&&cpuScore!=3){
            document.getElementById("Resume").addEventListener("click",()=>{
                document.getElementById("winMassage").style.display="none";
                startGame();    
            });
            document.getElementById("back").addEventListener("click",()=>{
                document.getElementById("winMassage").style.display="none";
                backtoHome();
            });
        }
    });

}
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
    if(user==1){
        parentDiv=document.getElementById("choseOne");
        let chis= document.querySelectorAll(".choices");
        chis.forEach((ch)=>{
            ch.style.display="none";
        });
        parentDiv.innerHTML="";
        parentDiv.style.display="flex";
        parentDiv.appendChild(icon);
        user = 0; 
    }else if(user==0){
        parentDiv=document.getElementById("displyChoice");
        parentDiv.innerHTML="";
        parentDiv.style.display="flex";
        parentDiv.appendChild(icon);
        user = 1;
    }else{
        console.log("WrongChoice");
    }
}
function checkWiners(uC,cC){
    let r="";
    if(uC===cC){
        r="draw";
    }else if((uC=="scissor"&&cC=="paper")||(uC=="paper"&&cC=="rock")||(uC=="rock"&&cC=="scissor")){
        r="win";
        userScore++;
        console.log("userScore= ",userScore);
        console.log("cpuScore=",cpuScore);
            document.getElementById("userScore").innerText=`${userScore}/3`;
    }else{
        r="loose";
        cpuScore++;
        console.log("cpuScore=",cpuScore);
        console.log("userScore= ",userScore);
        document.getElementById("cpuScore").innerText=`${cpuScore}/3`;

    };
    return r;
}
function showResult(result){
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
            setInterval(()=>{
                document.getElementById("minmsgCpu").style.display="none";
                document.getElementById("minmsgUser").style.display="none";
            },2000);
        nextRound("Next Round");
  
    }
    else if(result=="draw"&&(userScore==0&&cpuScore==0)){
        document.getElementById("massageUser").innerText="Do it again";
        document.getElementById("massageCpu").innerText="Do it again";
        setInterval(()=>{
            document.getElementById("minmsgCpu").style.display="none";
            document.getElementById("minmsgUser").style.display="none";
        },2000);
        nextRound("Next Round");
    }
    else if(userScore==3||cpuScore==3){
        document.getElementById("winMassage").style.display="flex";
        if(userScore==3){
            document.getElementById("massage").innerText="You Win";
        }else{
            document.getElementById("massage").innerText="You Loose";
        }
        document.getElementById("Resume").addEventListener("click",()=>{
            document.getElementById("winMassage").style.display="none";
            document.getElementById("choseOne").style.display="none";
            document.getElementById("displyChoice").innerHTML="";
            document.querySelectorAll(".choices").forEach((choice)=>{
                choice.style.display="flex";
            });
            
            gotoGamepage();
        });
        document.getElementById("back").addEventListener("click",()=>{
            document.getElementById("winMassage").style.display="none";
            document.getElementById("displyChoice").innerHTML="";
            backtoHome();
        });
        userScore=0;
        cpuScore=0;  
    }else{
        userScore=0;
        cpuScore=0;
        document.getElementById("userScore").innerText=`${userScore}/3`;
        document.getElementById("cpuScore").innerText=`${cpuScore}/3`;
    }
}
function nextRound(msg){
    document.querySelector(".roundMsg").innerText=msg;
    setTimeout(()=>{
        document.querySelector(".roundMsg").style.display="flex";
    },1000);
    setTimeout(()=>{
        document.querySelector(".roundMsg").style.display="none";
    },3000);
    resetRound();
    document.getElementById("choseOne").style.display="none";//hide user choice
    document.querySelectorAll(".choices").forEach((choice)=>{
        choice.style.display="flex";});//display all choices
    document.getElementById("choseOne").innerHTML="";//remove user choice
    }
function resetRound(){
    setTimeout(()=>{
        document.getElementById("choseOne").style.display="none";//hide user choice
        document.querySelectorAll(".choices").forEach((choice)=>{
            choice.style.display="flex";});//display all choices
        document.getElementById("choseOne").innerHTML="";//remove user choice
    },3000);
}
//BACK TO HOME PAGE
function backtoHome(){
    let homePage=document.querySelectorAll(".homePage")[0];
    let gamePage=document.querySelectorAll(".gamePage")[0];
    homePage.style.display="flex";//home layout display none
    gamePage.style.display="none";//game page display flex
    document.getElementById("winMassage").style.display="none";
    document.body.style.background="linear-gradient(135deg, #6DD5FA, #9400D3, #FF0080)";//bg-color for Game page
    document.body.style.color=" #FFFFFF";//change in color
    document.body.style.fontFamily="'Poppins', sans-serif";//font change
} 