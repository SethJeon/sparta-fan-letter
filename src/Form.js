import { useState } from "react";

export function Form({ onAddItems, options, selectedMember }) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [toWhom, setToWhom] = useState("karina");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nickname || !content) return;

    const newLetter = { nickname, content, toWhom, id: Date.now() };

    onAddItems(newLetter);
    console.log(newLetter);

    setNickname("");
    setContent("");
    setToWhom("karina");
  }

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setToWhom(selectedValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>누구에게 보내실건가요?</h3>
        <select value={toWhom} onChange={handleSelectChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div>
          <input
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder={`Wirte you letter to ${toWhom}`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <button>Send</button>
        <p>{selectedMember}</p>
      </form>
    </div>
  );
}
