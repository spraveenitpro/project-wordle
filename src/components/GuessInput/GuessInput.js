import React from 'react'

function GuessInput({handleSubmitGuess}) {
	const [tentativeGuess, setTentativeGuess] = React.useState('');

	const handleSubmit = (event) => {

		event.preventDefault();

		if (tentativeGuess.length !== 5) {
			window.alert('Please enter a 5 letter word.❤️');
			return;
		}
		console.log({tentativeGuess});
		console.log(tentativeGuess.length);
		handleSubmitGuess(tentativeGuess);
		setTentativeGuess('');

	}


	return (
		<>
			<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
		 	pattern="[a-zA-Z]{5}"
			id="guess-input"
			type="text"
			required
			value={tentativeGuess}
			onChange={(event) => {
				const nextGuess = event.target.value.toUpperCase()
				setTentativeGuess(nextGuess)
			}}

			/>
		</form>

		</>
	)
}

export default GuessInput
