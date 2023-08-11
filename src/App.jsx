import JokeContainer from './components/JokeContainer';
import { useGetJoke } from './hooks/useGetJoke';
import './style.css';

export default function App() {
 
  const {joke, handleNewJoke} = useGetJoke()

  return (
    <div className="background">
      <div className="container">
        <h1>Joke</h1>
        <h3 className="category-container">
          Category: <span>{joke?.category}</span>
        </h3>
        <JokeContainer joke={joke} />
        <button className="btn-next" onClick={handleNewJoke}>
          New Joke
        </button>
      </div>
    </div>
  );
}

