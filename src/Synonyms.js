import React from "react";

export default function Synonyms({ synonyms }) {
  return (
    <div className="Synonyms">
      <strong>Synonyms:</strong>{" "}
      {synonyms.map((synonym, index) => (
        <span key={index}>
          {synonym}
          {index < synonyms.length - 1 ? ", " : ""}
        </span>
      ))}
    </div>
  );
}