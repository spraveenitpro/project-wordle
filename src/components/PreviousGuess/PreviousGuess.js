import React from 'react'

function PreviousGuess({guesses}) {

	return (
		<>
			<div className="guess-results">Previous Guesses</div>

				{guessesgit .map((value,index) => <p className="guess" key={index}>{value}</p>)}

		</>
	)
}

export default PreviousGuess
