import { useState } from "react";
import { LetterList } from "./LetterList";
import { Form } from "./Form";

function App() {
  const options = ["karina", "winter", "ningning", "giselle"];
  const [letters, setLetters] = useState([]);
  const [selectedMember, setSelectedMember] = useState(options[0]);

  function handleAddItems(letter) {
    setLetters((letters) => [...letters, letter]);
  }

  function handleSelectedMember(index) {
    const selectedMember = options[index];
    setSelectedMember(selectedMember);
  }

  function handleDeleteLetters(id) {
    setLetters((letters) => letters.filter((letter) => letter.id !== id));
  }

  return (
    <div>
      <Form
        onAddItems={handleAddItems}
        letters={letters}
        options={options}
        selectedMember={selectedMember}
      />
      <LetterList
        letters={letters}
        options={options}
        selectedMember={selectedMember}
        onSelectedMember={handleSelectedMember}
        onDeleteLetters={handleDeleteLetters}
      />
    </div>
  );
}

export default App;
