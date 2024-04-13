export default function AllowDuplicatesOption({ option, onSelectOption }) {
  const className = option.selected
    ? 'allow-duplicates-option selected'
    : 'allow-duplicates-option';
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
