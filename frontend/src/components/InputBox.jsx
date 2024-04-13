export default function InputBox({ box, onSelectBox }) {
  const className = box.selected ? 'input-box selected' : 'input-box';
  return (
    <div
      onClick={() => {
        onSelectBox();
      }}
    >
      <p className={className}>{box.letter.toUpperCase()}</p>
    </div>
  );
}
