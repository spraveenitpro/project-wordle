import React from 'react'

function GuessInput() {
	const [guess, setGuess] = React.useState('');
	const handleSubmit = (event) => {

		event.preventDefault();

		if (guess.length !== 5) {
			window.alert('Please enter a 5 letter word.❤️');
			return;
		}
		console.log({guess});
		console.log(guess.length);
		setGuess('');

	}


	return (
		<>
			<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
			minLength={5}
			maxLength={5}
			id="guess-input"
			type="text"
			required
			value={guess}
			onChange={(event) => {
				const nextGuess = event.target.value.toUpperCase()
				setGuess(nextGuess)
			}}

			/>
		</form>

		</>
	)
}

export default GuessInput
