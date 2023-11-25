// define
var player = document.querySelector('.player');
var computer = document.querySelector('.computer');
var winner = document.querySelector('.winner');
var random;
var computerChoice;
var point=0;
var point1=0;
var yourPoint = document.querySelector('.yourPoint');
var kpoint = document.querySelector('.kpoint');
// check
console.log(player);
console.log(computer);
console.log(winner);
// uildel
function play(playerChoice){
    if(playerChoice=="paper"){
        player.innerText = "Your choices: Paper"
    }else if(playerChoice=="scissors"){
        player.innerText = "Your choices: Scissors"
    }else if(playerChoice=="rock")
        player.innerText = "Your choiced: Rock"
    // computer choice
    random =Math.floor(Math.random()*3);
    console.log(random);
    if(random==0){
        computerChoice="paper"
        computer.innerText="Computer choices : Paper"
    }else if(random==1){
        computerChoice="scissors"
        computer.innerText="Computer choices : Scissors"
    }else if(random==2){
        computerChoice="rock"
        computer.innerText="Computer choices : Rock"
    }
    // wiiner -> papar>rock Paper<scissors 
    if((playerChoice=="paper" && computerChoice=="rock") || 
    (playerChoice=="scissors" && computerChoice=="paper") || 
    (playerChoice=="rock" && computerChoice=="scissors")){
        point++;
        yourPoint.innerText="You: " + point;
        if(point==10){
            winner.innerText="Result: Player wins!";
        }else if(point1==10){
            winner.innerText="Result: Computer wins!";
        }
        if(point==11){
            point=0
            point1=0
            player.innerText ="You choice:"
            computer.innerText ="Computer choice:"
            winner.innerText= "Result:"
            yourPoint.innerText="You:" + point;
            kpoint.innerText="Computer:"+ point1;
        }else if(point1==11){
            point=0
            point1=0
            player.innerText ="You choice:"
            computer.innerText ="Computer choice:"
            winner.innerText= "Result:"
            yourPoint.innerText="You:" + point;
            kpoint.innerText="Computer:"+ point1;
        }
    }else if((playerChoice=="paper" && computerChoice=="scissors") || 
    (playerChoice=="scissors" && computerChoice=="rock") || 
    (playerChoice=="rock" && computerChoice=="paper")){
        point1++;
        kpoint.innerText = "Computer: " + point1;
        if(point==10){
            winner.innerText="Result: Player wins!";
        }else if(point1==10){
            winner.innerText="Result: Computer wins!";
        }
        if(point==11){
            point=0
            point1=0
            player.innerText ="You choice:"
            computer.innerText ="Computer choice:"
            winner.innerText= "Result:"
            yourPoint.innerText="You:" + point;
            kpoint.innerText="Computer:"+ point1;
        }else if(point1==11){
            point=0
            point1=0
            player.innerText ="You choice:"
            computer.innerText ="Computer choice:"
            winner.innerText= "Result:"
            yourPoint.innerText="You:" + point;
            kpoint.innerText="Computer:"+ point1;
        }
    

    }
    
    
}
function restart(){
    point=0
    point1=0
    player.innerText ="You choice:"
    computer.innerText ="Computer choice:"
    winner.innerText= "Result:"
    yourPoint.innerText="You:" + point;
    kpoint.innerText="Computer:"+ point1;
}
