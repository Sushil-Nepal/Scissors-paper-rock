//switch to game-page;
const gotoGamepage=()=>{
    console.log("click");
    let homePage=document.querySelectorAll(".homePage")[0];
    let gamePage=document.querySelectorAll(".gamePage")[0];
    homePage.style.display="none";
    gamePage.style.display="flex";
    document.body.style.background="linear-gradient(135deg, #200122, #0A0F24, #200122)";
    document.body.style.color="#00FFFF";
    document.body.style.fontFamily="'Orbitron', sans-serif";
}