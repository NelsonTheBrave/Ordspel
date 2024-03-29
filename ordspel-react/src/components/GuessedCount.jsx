export default function GuessedCount({ numberOfGuesses }) {
  return (
    <div className='guessed-count'>
      <p>
        You have guessed <span>{numberOfGuesses}</span> times
      </p>
    </div>
  );
}
