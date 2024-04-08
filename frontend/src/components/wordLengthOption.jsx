export default function WordLengthOption({ option, onSelectOption }) {
  const className = option.selected
    ? 'word-length-option selected'
    : 'word-length-option';
  return (
    <div
      className={className}
      onClick={() => {
        onSelectOption();
      }}
    >
      <p>{option.label}</p>
    </div>
  );
}
