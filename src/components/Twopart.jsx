
import { useShowDelivery } from '../hooks/useShowDelivery';
import './styles/Twopart.css';

export default function Twopart({
  setup,
  delivery,
}) {

  const showDelivery = useShowDelivery(setup)

  return (
    <>
      <div className="joke-container">
        <p className="joke">{setup}</p>
      </div>
      {showDelivery && (
        <div className="joke-container delivery-container">
          <p style={{ color: 'white' }}>{delivery}</p>
        </div>
      )}
    </>
  );
}
