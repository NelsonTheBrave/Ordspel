export default function GameOptionsContainer({ onGameOptionsConfigured }) {
  return (
    <div className='options-wrapper'>
      <h1>Yet Another Wordle Clone</h1>
      <h2>
        Let's play some <span>YAWC</span>
      </h2>
      <p>Before you start, choose your type of game from the options below</p>
      <div className='no-of-letters-wrapper'>
        <div>
          <input type='radio' id='4' name='letters' value='4' checked />
          <label for='huey'>4</label>
        </div>
        <div>
          <input type='radio' id='5' name='letters' value='5' />
          <label for='5'>5</label>
        </div>
        <div>
          <input type='radio' id='6' name='letters' value='6' />
          <label for='6'>6</label>
        </div>
        <div>
          <input type='radio' id='7' name='letters' value='7' />
          <label for='7'>7</label>
        </div>
      </div>
      <button
        onClick={() => {
          onGameOptionsConfigured();
        }}
      >
        Move on!
      </button>
    </div>
  );
}
