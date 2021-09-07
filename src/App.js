import React, { useState } from "react";
import "./styles.css";

// Database
const url =
  "https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis.pretty.json";

export default function App() {
  const [meaning, setMeaning] = useState("Type in a flag emoji above");
  const [flagDatabase, setFlagDatabase] = useState([]);

  fetch(url)
    .then((response) => response.json())
    .then((jsonObj) => {
      for (var i = 0; i < jsonObj.length; i++) {
        flagDatabase[jsonObj[i].emoji] = jsonObj[i].name;
        flagDatabase[jsonObj[i].emoji] = jsonObj[i].name;
      }
      // console.log("current", Object.keys(flagDatabase));
      setFlagDatabase(flagDatabase);
    })
    .catch(errorHandler);

  function errorHandler(error) {
    console.log(error);
  }

  function getFlagMeaning(event) {
    // console.log(Object.keys(flagDatabase))
    if (event.target.value !== "") {
      var meaning;
      var ident = flagDatabase[event.target.value];
      if (ident === undefined) {
        meaning = "Flag is not in the database";
      } else {
        meaning = event.target.value + " " + ident;
      }
    } else {
      meaning = "Type in a flag emoji above";
    }
    setMeaning(meaning);
  }

  function retrieveFlagMeaning(flag) {
    var ident = flagDatabase[flag];
    var meaning = flag + " " + ident;
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="title">Flag Identifier</h1>
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
      <footer>
        <p> Created by Thomas Alex </p>
        <p> As a part of markEight neoGCamp </p>
      </footer>
    </div>
  );
}
