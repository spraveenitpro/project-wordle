import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import PreviousGuess from '../PreviousGuess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);

	function handleSubmitGuess(tentativeGuess) {
		console.log("Received guess: ", tentativeGuess);
		setGuesses([...guesses, tentativeGuess])
	}
  return (
	<>
		<PreviousGuess guesses={guesses} />
		<GuessInput handleSubmitGuess={handleSubmitGuess} />
	</>
  )
}

export default Game;
