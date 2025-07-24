import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results({ results, audioUrl }) {
  if (!results) return null;
  

    return (
      <div className="Results">
        <h2>{results.word}</h2>

      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      
      {results.meanings && results.meanings.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </div>   
  );
}