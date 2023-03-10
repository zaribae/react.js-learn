import React from "react";
import Entry from "./Entry";
import "../styles.css";
import emojipedia from "../emojipedia";


function createEntry(emojis) {
  return (
    <Entry
        key={emojis.id}
        emoji={emojis.emoji}
        name={emojis.name}
        desc={emojis.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
      
    </div>
  );
}

export default App;
