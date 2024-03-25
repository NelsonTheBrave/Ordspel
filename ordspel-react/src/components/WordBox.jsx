export default function WordBox({ box, selectBox }) {
  const className = box.selected ? 'wordBox selected' : 'wordBox';
  console.log('wordbox rendered');
  return (
    <div
      className={className}
      onClick={() => {
        selectBox();
      }}
    >
      <p>{box.letter.toUpperCase()}</p>
    </div>
  );
}
