import logo from "./logo.png"
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" img-fluid="true" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
      Coded by Jeanine DeBerry <a href="https://github.com/jkdeberry"></a>, 
      open-sourced on <a href="https://github.com/dictionary-project-jd">GitHub</a>
      Github and hosted on <a href="https://dictionary-project-jd.netlify.app/"></a>Netlify
      </footer>
    </div>
  );
}
