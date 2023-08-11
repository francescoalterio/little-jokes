import { useState, useEffect } from 'react';

export function useGetJoke() {
    const [joke, setJoke] = useState();
  
    useEffect(() => {
      fetch('https://v2.jokeapi.dev/joke/Any')
        .then((res) => res.json())
        .then((result) => setJoke(result));
    }, []);
  
    const handleNewJoke = () => {
      fetch('https://v2.jokeapi.dev/joke/Any')
        .then((res) => res.json())
        .then((result) => {
          setJoke(result);
        });
    };

    return {joke, handleNewJoke}
}