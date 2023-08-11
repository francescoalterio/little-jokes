import { useState, useEffect } from "react";

export function useGetJoke() {
  const [joke, setJoke] = useState();
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((res) => res.json())
      .then((result) => setJoke(result));
  }, []);

  const handleNewJoke = () => {
    setShowButton(false);
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((res) => res.json())
      .then((result) => {
        setJoke(result);
      });
    setTimeout(() => setShowButton(true), 4000);
  };

  return { joke, showButton, handleNewJoke };
}
