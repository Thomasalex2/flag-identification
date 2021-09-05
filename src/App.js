import React, { useState } from "react";
import "./styles.css";

// Database

const url =
  "https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis.pretty.json";

const flagDatabase = {
  "🇦🇪": "United Arab Emirates",
  "🇦🇫": "Afghanistan",
  "🇦🇲": "Armania",
  "🇦🇷": "Argentina",
  "🇨🇦": "Canada",
  "🇨🇭": "Switzerland",
  "🇩🇪": "Germany",
  "🇪🇬": "Egypt",
  "🇫🇷": "France",
  "🇷🇺": "Russia"
};

export default function App() {
  // var newDatabase = {}
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((jsonObj) => {
  //     for (var i = 0; i < jsonObj.length; i++) {
  //       newDatabase[jsonObj[i].emoji] = jsonObj[i].name;
  //     }
  //     console.log("current", newDatabase);
  //   })
  //   .catch(errorHandler);

  // function errorHandler(error) {
  //   console.log(error);
  // }

  const [meaning, setMeaning] = useState("");
  // console.log("hello", newDatabase);

  function getFlagMeaning(event) {
    var meaning = flagDatabase[event.target.value];
    if (meaning === undefined) {
      meaning = "Flag is not in the database";
    }
    setMeaning(meaning);
  }

  function retrieveFlagMeaning(flag) {
    var meaning = flagDatabase[flag];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="title">Flag Identification</h1>
      <h3 className="heading">
        Enter the flag below and see the country it belongs to
      </h3>
      <input onChange={getFlagMeaning} className="input-box"></input>
      <p className="answer">{meaning}</p>

      <h3> Current Database includes the following flags</h3>
      <ul className="no-bullets">
        {Object.keys(flagDatabase).map((flag) => (
          <li
            className="inline"
            onClick={() => retrieveFlagMeaning(flag)}
            key={flag}
          >
            {flag}
          </li>
        ))}
      </ul>
    </div>
  );
}
