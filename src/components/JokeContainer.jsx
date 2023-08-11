import { useGetJoke } from "../hooks/useGetJoke";
import Single from "./Single";
import Spinner from "./Spinner";
import Twopart from "./Twopart";
import "./styles/JokeContainer.css";

export default function JokeContainer() {
  const { joke, showButton, handleNewJoke } = useGetJoke();

  return (
    <>
      <h3 className="category-container">
        Category: <span>{joke?.category}</span>
      </h3>
      <div className="joke-box-container">
        {joke?.type === "single" ? (
          <Single joke={joke.joke} />
        ) : (
          <Twopart setup={joke?.setup} delivery={joke?.delivery} />
        )}
      </div>
      {showButton ? (
        <button className="btn-next" onClick={handleNewJoke}>
          New Joke
        </button>
      ) : (
        <Spinner />
      )}
    </>
  );
}
