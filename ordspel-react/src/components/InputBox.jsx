export default function InputBox({ box, selectBox }) {
  const className = box.selected ? 'input-box selected' : 'input-box';
  return (
    <div
      onClick={() => {
        selectBox();
      }}
    >
      <p className={className}>{box.letter.toUpperCase()}</p>
    </div>
  );
}
