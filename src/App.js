import logo from "./logo.svg";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Search Weather in Any City</h1>
      <WeatherSearch />
      <h6>
        {" "}
        <a
          href="https://github.com/niniantadze/my-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Nini Antadze 🧚‍♀️ with love 💖
      </h6>
    </div>
  );
}

export default App;
