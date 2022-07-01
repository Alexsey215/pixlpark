import './App.css';
import { useEffect, useState } from "react";
import OrdersList from './components/OrdersList';

function App() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('/orders')
      .then((res) => res.json())
      .then((res) => {
        setOrders(res.body)
        console.log(res.body)
      })

  }, []);
  return (
    <div className="App">
      <OrdersList orders={orders} />
    </div>
  );
}

export default App;
