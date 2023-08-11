
import Single from './components/Single';
import Twopart from './components/Twopart';
import { useGetJoke } from './hooks/useGetJoke';
import './style.css';

export default function App() {
 
  const {joke, showDelivery, setShowDelivery, handleNewJoke} = useGetJoke()

  return (
    <div className="background">
      <div className="container">
        <h1>Joke</h1>
        <h3 className="category-container">
          Category: <span>{joke?.category}</span>
        </h3>
        <div
          style={{
            width: '100%',
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {joke?.type === 'single' ? (
            <Single joke={joke.joke} />
          ) : (
            <Twopart
              setup={joke?.setup}
              delivery={joke?.delivery}
              showDelivery={showDelivery}
              setShowDelivery={setShowDelivery}
            />
          )}
        </div>
        <button className="btn-next" onClick={handleNewJoke}>
          New Joke
        </button>
      </div>
    </div>
  );
}

