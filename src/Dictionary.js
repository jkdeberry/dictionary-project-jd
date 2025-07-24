import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary () {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({}); // Shecodes API result
  const [audioUrl, setAudioUrl] = useState(null); //Free Dictionary API audio

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  
  function handleSheCodesResponse(response) {
    setResults(response.data);
  }

  function handleFreeDictionaryResponse(response) {
    const audio = response.data[0]?.phonetics?.find(p => p.audio);
    if (audio && audio.audio){
      setAudioUrl(audio.audio);
    } else {
      setAudioUrl(null);
    }
  }

  function search(event) {
    event.preventDefault();

    //SheCodes API for word data
    let apiKey = "4e2df5aotaa983694533f2b4440ef095"
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleSheCodesResponse);

    //Free Dictionary ApI for audio only
    let freeDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(freeDictionaryUrl).then(handleFreeDictionaryResponse);
  }
   
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input 
          type="search" 
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
          />
        </form>
     </section>
    
    <Results results={results} audioUrl={audioUrl} />
    </div>
  )
}