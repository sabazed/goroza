import Navbar from './Components/NavBar/Navbar';
import CartView from './Components/Cart/CartView';
import { useEffect, useState } from 'react';

import Data from './Data/data.json';

function App() {
  
  const [items, setItems] = useState([]);
  const [isLoaded, setLoaded ] = useState(false);

  useEffect(() => {
    setItems(Data.items);
    setLoaded(true);
  }, []);


  const setQty = (qty, index) => {
    if (qty == 0) {
      items.splice(index, 1);
    }
    else {
      items[index].qty = qty;
    }
    setItems([...items]);
  }

  const clearCart = () => {
    setItems([]);
  }

  return (
    <>
      <Navbar items={items} />
      <CartView items={items} setQty={setQty} clearCart={clearCart} isLoaded={isLoaded} />
    </>
  );
}

export default App;
