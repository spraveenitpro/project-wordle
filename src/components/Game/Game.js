import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Guess from '../Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS) ;

console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);

	function handleSubmitGuess(tentativeGuess) {
		console.log("Received guess: ", tentativeGuess);
		setGuesses([...guesses, tentativeGuess])
	}
  return (
	<>
		<Guess />
		<GuessResults guesses={guesses} answer={answer}/>
		<GuessInput handleSubmitGuess={handleSubmitGuess} />
	</>
  )
}

export default Game;
