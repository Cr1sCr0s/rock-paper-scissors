let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  const randNum = Math.floor(Math.random() * 10); // 0-9

  if(randNum % 3 === 0){
    return 'rock';
  }else if(randNum % 3 === 1){
    return 'paper';
  }else if(randNum % 3 === 2){
    return 'scissors';
  }
}

function getHumanChoice(){
  const choice = prompt('Enter choice:', 'rock');
  return choice;
}