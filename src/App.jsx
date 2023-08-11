import JokeContainer from "./components/JokeContainer";
import "./style.css";

export default function App() {
  return (
    <div className="background">
      <div className="container">
        <h1>Joke</h1>
        <JokeContainer />
      </div>
    </div>
  );
}
