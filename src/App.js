import React, { useState } from "react";
import Footer from "./components/Footer";
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
  const [error, setError] = useState();

  function emojiClickHandler(emoji) {
    setOutput(emojiDictionary[emoji]);
  }
  function emojiInputHandler(event) {
    const emoji = event.target.value;
    if (emoji === "") {
      setOutput();
      setError();
      return;
    }
    const outputText = emojiDictionary[emoji];
    if (outputText) {
      setOutput(outputText);
    } else {
      setOutput();
      setError("We do not have this emoji in our database.");
    }
  }
  return (
    <>
      <div className="App">
        <h1>Emoji Dictionary</h1>
        <input
          type="text"
          placeholder="Enter Emoji Here"
          onChange={(e) => emojiInputHandler(e)}
        />
        {!output && !error && <p>Output Will be displayed here</p>}
        {!output && error && <p className="error">{error}</p>}
        {output && <p className="output">{output}</p>}
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
      <Footer />
    </>
  );
}
