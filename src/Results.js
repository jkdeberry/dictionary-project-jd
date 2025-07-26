import React from "react";
import "./Results.css";

export default function Results({ results, audioUrl, photos, keyword }) {
  if (!results || !results.word) return null;

  return (
    <div className="Results">
      <h2>{results.word}</h2>
      {results.phonetic && <p className="phonetic">/{results.phonetic}/</p>}

      {audioUrl && (
        <audio controls src={audioUrl}>
          Your browser does not support the audio element.
        </audio>
      )}

      <section className="definitions">
        {results.meanings?.map((meaning, index) => (
          <div key={index} className="meaning">
            <h3>{meaning.partOfSpeech}</h3>
            <p className="definition">{meaning.definition}</p>

            {meaning.example && (
              <p className="example">Example: <em>{meaning.example}</em></p>
            )}

            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <p className="synonyms">
                Synonyms: {meaning.synonyms.join(", ")}
              </p>
            )}

            {meaning.antonyms && meaning.antonyms.length > 0 && (
              <p className="antonyms">
                Antonyms: {meaning.antonyms.join(", ")}
              </p>
            )}
          </div>
        ))}
      </section>

      {photos && photos.length > 0 && (
        <section className="photos">
          <h3>Images related to "{keyword}"</h3>
          <div className="photo-grid">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo.src.medium}
                alt={keyword}
                className="photo"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}