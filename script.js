const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);

let humanScore = 0;
let computerScore = 0;

// plays one round
function playRound(e){
  const humanChoice = e.target.value;
  const computerChoice = getComputerChoice();
  const results = document.querySelector('.results');
  const output = document.createElement('p');

  output.appendChild(
    document.createTextNode(
    `The computer chose ${computerChoice}`
    )
  );

  let winner = 'none';
  let outcome = '';

  switch(humanChoice){
    case 'rock':
      switch(computerChoice){
        case 'rock':
          outcome = 'Tie!';
          break;
        case 'paper':
          outcome = 'You lose! Paper beats rock.';
          winner = 'computer';
          break;
        case 'scissors':
          outcome = 'You won! Rock beats scissors.';
          winner = 'human';
          break;
      }
      break;

    case 'paper':
      switch(computerChoice){
        case 'rock':
          outcome = 'You won! Paper beats rock.';
          winner = 'human';
          break;
        case 'paper':
          outcome = 'Tie!';
          break;
        case 'scissors':
          outcome = 'You lose! Scissors beats paper.';
          winner = 'computer';
          break;
      }
      break;

    case 'scissors':
      switch(computerChoice){
        case 'rock':
          outcome = 'You lose! Rock beats paper.';
          winner = 'computer';
          break;
        case 'paper':
          outcome = 'You won! Scissors beats paper.';
          winner = 'human';
          break;
        case 'scissors':
          outcome = 'Tie!';
          break;
      }
      break;
  }

  output.appendChild(document.createElement('br'));
  output.appendChild(
    document.createTextNode(outcome)
  );

  if(winner === 'none'){
    results.appendChild(output);
    return;
  }

  output.appendChild(document.createElement('br'));
  output.appendChild(
    document.createTextNode(winner)
  );

  const status = scoresTrack(winner, results, output);

  return;
}

function scoresTrack(winner, results, output){
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
  output.appendChild(document.createElement('br'));
  output.appendChild(
    document.createTextNode(
      `Player Score: ${humanScore}`
    )
  );
  output.appendChild(document.createElement('br'));
  output.appendChild(
    document.createTextNode(
      `Computer Score: ${computerScore}`
    )
  );

  if(humanScore === 5 || computerScore === 5){
    // prints results of the game
    output.appendChild(document.createElement('br'));
    output.appendChild(document.createElement('br'));
    output.appendChild(
      document.createTextNode('GAME OVER')
    );
    if(humanScore > computerScore){
      output.appendChild(document.createElement('br'));
      output.appendChild(
        document.createTextNode(
          'WINNER: human'
        )
      );
    }else if(humanScore < computerScore){
      output.appendChild(document.createElement('br'));
      output.appendChild(
        document.createTextNode(
          'WINNER: computer'
        )
      );
    }else{
      output.appendChild(document.createElement('br'));
      output.appendChild(
        document.createTextNode(
          'WINNER: none'
        )
      );
    }

    humanScore = 0;
    computerScore = 0;
  }

  results.appendChild(output);
  return;
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
