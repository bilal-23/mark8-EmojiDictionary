import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😕": "Confused",
  "😞": "Disappointed",
  "😟": "Worried",
  "🤩": "Star-Struck",
  "😉": "Winking",
  "🤗": "Hugging",
  "👍": "Thumbs Up",
  "😴": "Sleeping",
  "😒": "Unamused"
};
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [output, setOutput] = useState();

  function emojiClickHandler(emoji) {
    setOutput(emojiDictionary[emoji]);
  }
  function emojiInputHandler(event) {
    const emoji = event.target.value;
    if (emoji === "") {
      setOutput(false);
      return;
    }
    const outputText = emojiDictionary[emoji];
    if (outputText) {
      setOutput(outputText);
    } else {
      setOutput("We do not have this emoji in our database.");
    }
  }
  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input
        type="text"
        placeholder="Enter Emoji Here"
        onChange={(e) => emojiInputHandler(e)}
      />
      {!output && <p>Output Will be displayed here</p>}
      {output && <p>{output}</p>}
      <p>Emoji's we have</p>
      <ul>
        {emojis.map((emoji, index) => {
          return (
            <li key={index} onClick={emojiClickHandler.bind(this, emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
