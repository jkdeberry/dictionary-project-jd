import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary () {
  let [keyword, setKeyword] = useState("")
  let [audioUrl, setAudioUrl] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  
  function handleSheCodesResponse(response) {
    console.log(response.data[0]);
  }

  function handleFreeDictionaryResponse(response) {
    console.log("Free Dictionary API", response.data);
    const phonetics = response.data[0].phonetics;
    const audioObj = phonetics.find((p) => p.audio);
    if (audioObj && audioObj.audio){
      setAudioUrl(audioObj.audio);
    } else {
      console.warn("No audio available for this word");
      setAudioUrl(null);
    }
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://api.shecodes.io/dictionary
    const apiKey = "4e2df5aotaa983694533f2b4440ef095"
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleSheCodesResponse);

    const freeDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(freeDictionaryUrl).then(handleFreeDictionaryResponse);
  }
 
    
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>

      {audioUrl && (
        <div className="Audio">
          <audio controls src={audioUrl}>
            Your browser does not support audio element.
          </audio>
        </div>
      )}
    </div>
  )
}