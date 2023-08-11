import Single from "./Single";
import Twopart from "./Twopart";
import './styles/JokeContainer.css'

export default function JokeContainer({joke}) {
    return <div className="joke-box-container">
        {joke?.type === 'single' ? 
        (
            <Single joke={joke.joke} />
        ) : (
            <Twopart
                setup={joke?.setup}
                delivery={joke?.delivery}
            />
        )}
    </div>
}