import React from "react";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <p><strong>Definition:</strong> {meaning.definition}</p>

      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <p><strong>Synonyms:</strong> {meaning.synonyms.join(", ")}</p>
      )}
    </div>
  );
}