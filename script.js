playGame(); // function call, starts game

function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  // plays 5 rounds
  for(let i=0; i<5; i++){
    const winner = playRound(getHumanChoice(), getComputerChoice());
    // increments score of the winner
    switch(winner){
      case 'human':
        humanScore++;
        break;
      case 'computer':
        computerScore++;
        break;
      default:
        break;
    }
    // prints updates scores
    console.log(`Player Score: ${humanScore}\nComputer Score: ${computerScore}`);
  }

  // prints results of the game
  console.log('GAME OVER');
  if(humanScore > computerScore){
    console.log('WINNER: human');
  }else if(humanScore < computerScore){
    console.log('WINNER: computer');
  }else{
    console.log('WINNER: none');
  }
}

// plays one round
function playRound(humanChoice, computerChoice){
  humanChoice.toLowerCase();
  console.log(`The computer chose ${computerChoice}`);

  let winner = 'none';

  switch(humanChoice){
    case 'rock':
      switch(computerChoice){
        case 'rock':
          console.log('Tie!');
          break;
        case 'paper':
          console.log('You lose! Paper beats rock.');
          winner = 'computer';
          break;
        case 'scissors':
          console.log('You won! Rock beats scissors.');
          winner = 'human';
          break;
      }
      break;

    case 'paper':
      switch(computerChoice){
        case 'rock':
          console.log('You won! Paper beats rock.');
          winner = 'human';
          break;
        case 'paper':
          console.log('Tie!');
          break;
        case 'scissors':
          console.log('You lose! Scissors beats paper.');
          winner = 'computer';
          break;
      }
      break;

    case 'scissors':
      switch(computerChoice){
        case 'rock':
          console.log('You lose! Rock beats paper.');
          winner = 'computer';
          break;
        case 'paper':
          console.log('You won! Scissors beats paper.');
          winner = 'human';
          break;
        case 'scissors':
          console.log('Tie!');
          break;
      }
      break;
  }

  return winner;
}

function getComputerChoice(){
  // this var gets a random number from 0 to 9;
  // ex: 0.59 -> 5.9 -> 5
  const randNum = Math.floor(Math.random() * 10);

  // rock -> 4/10, paper -> 3/10, scissors -> 3/10
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