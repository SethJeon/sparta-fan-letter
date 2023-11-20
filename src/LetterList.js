import { Letter } from "./Letter";
import { MemberSelectButton } from "./MemberSelectButton";

export function LetterList({
  letters,
  options,
  selectedMember,
  onSelectedMember,
  onDeleteLetters,
}) {
  return (
    <div>
      <div>
        {options.map((option, index) => (
          <MemberSelectButton
            key={index}
            options={options}
            index={index}
            onSelectedMember={onSelectedMember}
          >
            {option}
          </MemberSelectButton>
        ))}
      </div>

      <ul key={letters.key}>
        {letters
          .filter((letter) => letter.toWhom === selectedMember)
          .map((letter) => (
            <Letter
              key={letter.id}
              letter={letter}
              onDeleteLetters={onDeleteLetters}
            />
          ))}
      </ul>
    </div>
  );
}
