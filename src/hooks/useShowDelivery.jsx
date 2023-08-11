import { useState, useEffect } from "react";

export function useShowDelivery(setup) {
  const [showDelivery, setShowDelivery] = useState(false);

  useEffect(() => {
    setShowDelivery(false);
    const timer = setTimeout(() => {
      setShowDelivery(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setup]);

  return showDelivery;
}
