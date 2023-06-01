import { useState } from "react";
import React from "react";
import style from "./style.css";
// var name=prompt("give me the username");
// var color=prompt("give me the color ");
var emojiDictionary = {
  "😊": "happiness, contentment, and satisfaction",
  "😳": "surprise, shock, or amazement",
  "😔": "sadness, disappointment, or regret",
  "😎": "coolness, confidence, or swagger",
  "❤️": "love, affection, or passion",
  "😑": "indifference, boredom, or apathy",
  "😶": "silence, secrecy, or mystery.",
  "😴": "sleepiness, tiredness, or fatigue",
  "🤑": " greed, materialism, or avarice",
  "🤕": "pain, injury, or illness",
  "🤗": "happiness, warmth, and acceptance",
  "😤": "anger, frustration, or annoyance",
  "🤮": "disgust, nausea, or aversion",
  "🤥": " disbelief, deception, or dishonesty",
  "😐": " apathy, tiredness, or disbelief",
  "😶": "shock, surprise, or secrecy",
  "🙄": "annoyance, disbelief, or impatience.",
  "😏": "amusement, sarcasm, or confidence",
  "😣": "discomfort, frustration, or sadness",
  "😥": "sadness, disappointment, or frustration",
  "😮": "surprise, shock, or awe.",
  "😛": "playfulness, teasing, or disgust.",
  "😌": "happiness, satisfaction, or gratitude.",
  "😪": "tiredness, boredom, or sadness",
  "🤐": "secrecy, discretion, or refusal to speak"
};
var emojiList = Object.keys(emojiDictionary);
const App = () => {
  var [meaning, setMeaning] = useState("");
  function displayUpdate(event) {
    var newEmo = event.target.value;
    meaning = emojiDictionary[newEmo];
    if (meaning == undefined) {
      meaning = "we do not have this in our database";
    }
    setMeaning(meaning);
  }
  function onClickEmo(emo) {
    setMeaning(emojiDictionary[emo]);
  }
  return (
    <>
      <h1 style={{ color: "goldenrod", fontFamily: "sans-serif" }}>EMO-MEA</h1>
      <input placeholder="plz type the emoji" onChange={displayUpdate} />
      <h2 style={{ color: "red" }}> {meaning}</h2>
      <h3 style={{ color: "green", fontFamily: "Arial" }}>Emojis we know</h3>
      {emojiList.map(function (emo) {
        return (
          <span
            style={{ cursor: "pointer", fontSize: "2rem", padding: "5px 10px" }}
            onClick={() => onClickEmo(emo)}
          >
            {emo}
          </span>
        );
      })}
    </>
  );
};
export default App;
