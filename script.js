let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());

function playRound(humanChoice, computerChoice){
  humanChoice.toLowerCase();
  console.log(`The computer chose ${computerChoice}`);

  switch(humanChoice){
    case 'rock':
      switch(computerChoice){
        case 'rock':
          console.log('Tie!');
          break;
        case 'paper':
          console.log('You lose! Paper beats rock.');
          computerScore++;
          break;
        case 'scissors':
          console.log('You won! Rock beats scissors.');
          humanScore++;
          break;
      }
      break;

    case 'paper':
      switch(computerChoice){
        case 'rock':
          console.log('You won! Paper beats rock.');
          humanScore++;
          break;
        case 'paper':
          console.log('Tie!');
          break;
        case 'scissors':
          console.log('You lose! Scissors beats paper.');
          computerScore++;
          break;
      }
      break;

    case 'scissors':
      switch(computerChoice){
        case 'rock':
          console.log('You lose! Rock beats paper.');
          computerScore++;
          break;
        case 'paper':
          console.log('You won! Scissors beats paper.');
          humanScore++;
          break;
        case 'scissors':
          console.log('Tie!');
          break;
      }
      break;
  }

}

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