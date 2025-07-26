import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({});
  const [audioUrl, setAudioUrl] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleSheCodesResponse(response) {
    setResults(response.data);
  }

  function handleSheCodesDictionaryResponse(response) {
    const audio = response.data[0]?.phonetics?.find(p => p.audio);
    setAudioUrl(audio?.audio || null);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
  event.preventDefault();
  const form = event.target;
  const word = form.elements.keyword.value; 
  

  const apiKey = "4e2df5aotaa983694533f2b4440ef095";
  const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
  axios.get(apiUrl).then(handleSheCodesResponse);

  const SheCodesDictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
  axios.get(SheCodesDictionaryUrl).then(handleSheCodesDictionaryResponse);

  const pexelsApiKey = "uOGK1BU3SckmYVPjjU8iySbEYl56jXWTQilIKNSOZieuKdRB6ka4GOA3";
  const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;

  axios
    .get(pexelsApiUrl, {
      headers: {
        Authorization: pexelsApiKey
      }
    })
    .then(handlePexelsResponse)
    .catch(error => {
      console.error("Pexels API error:", error.message);
    });
}

  return (
    <div className="Dictionary">
      <h1>DeBerry's Dictionary</h1>
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            name="keyword"
            placeholder="Enter a word..."
            onChange={handleKeywordChange}
            value={keyword}
          />
        <button type="submit">Search</button>
        </form>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </section>

      <Results
        results={results}
        audioUrl={audioUrl}
        photos={photos}
        keyword={keyword}
      />
    </div>
  );
}