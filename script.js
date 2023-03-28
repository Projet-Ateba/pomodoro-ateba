const affichageTravail = document.querySelector('.affichageT');
const affichagePause = document.querySelector('.affichageP');
const btnGo = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2');

let tempsInitial = 1500;
let tempsDeRepos = 300;
let pause = false;
let nbDeCycles = 0;
cycles.innerText =`Nombre de cycles ${nbDeCycles}`;

let check = false; //empecher le spam de commencer

affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial%60 < 10)? `0${tempsInitial % 60}` : tempsInitial%60}`;
affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos%60 < 10)? `0${tempsDeRepos % 60}` : tempsDeRepos%60}`;

btnGo.addEventListener('click', () => {
    if(check === false){
        check=true      // explication en deuxieme partie
    
    tempsInitial--;
    affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial%60 < 10)? `0${tempsInitial % 60}` : tempsInitial%60}`;

    let timer = setInterval(() =>{
        if(pause === false && tempsInitial>0){
            tempsInitial--;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial%60 < 10)? `0${tempsInitial % 60}` : tempsInitial%60}`;
        }else if(pause === false && tempsDeRepos === 0 && tempsInitial === 0){
            tempsInitial = 1500;
            tempsDeRepos = 300;
            nbDeCycles++
            cycles.innerText =`Nombre de cycles ${nbDeCycles}`;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial%60 < 10)? `0${tempsInitial % 60}` : tempsInitial%60}`;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos%60 < 10)? `0${tempsDeRepos % 60}` : tempsDeRepos%60}`;
        }
        else if(pause === false && tempsInitial === 0){
            tempsDeRepos--
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos%60 < 10)? `0${tempsDeRepos % 60}` : tempsDeRepos%60}`;
        }
    },1000)

    //reset
    
    btnReset.addEventListener('click', () => {
        clearInterval(timer);
        check=false;
        tempsDeRepos=300;
        tempsInitial=1500;
        affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial%60 < 10)? `0${tempsInitial % 60}` : tempsInitial%60}`;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos%60 < 10)? `0${tempsDeRepos % 60}` : tempsDeRepos%60}`; 

    })
} else {
    return;
}
   
})

btnPause.addEventListener('click', () => {
     if(pause === false){
        btnPause.innerText = "Play";
    }else if(pause === true){
        btnPause.innerText = "Pause";

    } 
    pause = !pause
})