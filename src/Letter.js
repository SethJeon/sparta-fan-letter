export function Letter({ letter, onDeleteLetters }) {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <span>
        From {letter.nickname} to {letter.toWhom}
      </span>
      <p>{letter.content}</p>
      <button onClick={() => onDeleteLetters(letter.id)}>Delete</button>
      <button>edit</button>
    </div>
  );
}
