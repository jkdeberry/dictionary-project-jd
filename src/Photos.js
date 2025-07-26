import React from "react";
import "./Photos.css";

export default function Photos({ photos, keyword }) {
  if (photos && photos.length > 0) {
    return (
      <div className="Photos">
        <h3>Images for "{keyword}"</h3>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <a
                href={photo.src.original}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <img
                  src={photo.src.landscape}
                  alt={photo.photographer}
                  className="photo"
                />
              </a>              
            ))}
        </div>
      </div>
    );
  } else { 
    return (
      <div className="Photos">
        <h3>No images found</h3>
        <img
          src="https://source.unsplash.com/600x400/?nature"
          alt="Default"
          className="photo"
        />
      </div>
    );
  }
}