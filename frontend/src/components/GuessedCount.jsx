export default function GuessedCount({ numberOfGuesses }) {
  return (
    <div className='guessed-count'>
      <p>
        You have guessed <span>{numberOfGuesses}</span>
        {numberOfGuesses == 1 ? ' time' : ' times'}
      </p>
    </div>
  );
}
