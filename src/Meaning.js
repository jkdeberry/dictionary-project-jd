import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
  return (
    <div className="MeaningCard">
      <h3>{meaning.partOfSpeech}</h3>

      {meaning.definition && (
      <p>
        <strong>Definition:</strong> {meaning.definition}
      </p>
      )}

      {meaning.example && (
        <p>
          <em>Example:</em> "{meaning.example}"
        </p>
      )}

      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <Synonyms synonyms={meaning.synonyms} />
      )}
    </div>
  );
}