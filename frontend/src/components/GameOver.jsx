export default function GameOver({ results }) {
  const points =
    Math.floor(
      (results.gameOptions[0] / results.timeTaken / results.numberOfGuesses) *
        10000
    ) + 2;
  const targetWordLength = results.targetWord.length;
  return (
    <div className='game-over-wrapper'>
      <p className='celebration-message'>You guessed the right word!</p>
      <div className='result-wrapper'>
        <h2>These are your results</h2>
        <ul>
          <li>
            <span>Total guesses</span>
            <span>{results.numberOfGuesses}</span>
          </li>
          <li>
            <span>Time taken</span>
            <span>{`${results.timeTaken} seconds`}</span>
          </li>
          <li className='score-item'>
            <span>Your score</span>
            <span>{`${points} points`}</span>
          </li>
        </ul>
      </div>
      <div className='btn-wrapper'>
        <button
          onClick={() => {
            const submitModal = document.querySelector('.submit-modal');
            submitModal.classList.toggle('open');
          }}
          className='submit-result-btn'
        >
          submit result to highscore
        </button>
        <button className='new-game-btn'>
          <a href='/'>go for another game</a>
        </button>
      </div>
      <div className='submit-modal'>
        s
        <div className='submit-modal-content'>
          <button
            className='close-modal-btn'
            onClick={() => {
              const submitModal = document.querySelector('.submit-modal');
              submitModal.classList.toggle('open');
            }}
          >
            X
          </button>
          <label htmlFor='name'>Name for highscore</label>
          <input type='text' id='name' placeholder='My name'></input>
          <div className='input-reminder'>
            Please write a name before submitting
          </div>
          <button
            className='submit-btn'
            onClick={() => {
              const playerName = document.querySelector('input').value;
              if (playerName) {
                console.log(playerName);
                postScore();
                async function postScore() {
                  await fetch('/api/highscore', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      ...results,
                      playerName,
                      points,
                      targetWordLength,
                    }),
                  });
                  window.location.href = '/';
                }
              } else {
                const inputReminder = document.querySelector('.input-reminder');
                inputReminder.classList.toggle('open');
                setTimeout(() => {
                  inputReminder.classList.toggle('open');
                }, 1000);
              }
            }}
          >
            Submit and start a new game
          </button>
        </div>
      </div>
    </div>
  );
}
