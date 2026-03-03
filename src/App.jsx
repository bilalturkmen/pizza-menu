import { useState } from "react";
import { pizzaData } from "./data/data";
import Header from "./components/Header";
import PizzaMenu from "./components/PizzaMenu";
import Footer from "./components/Footer";

export default function App() {
  const [cart, setCart] = useState({});

  function addItem(name) {
    setCart((prev) => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
  }

  function removeItem(name) {
    setCart((prev) => {
      const qty = prev[name] || 0;
      if (qty <= 1) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [name]: qty - 1 };
    });
  }

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = pizzaData.reduce(
    (sum, p) => sum + (cart[p.name] || 0) * p.price,
    0,
  );

  return (
    <div className="app-layout">
      <Header totalItems={totalItems} totalPrice={totalPrice} />
      <main>
        <PizzaMenu cart={cart} onAdd={addItem} onRemove={removeItem} />
      </main>
      <Footer />
    </div>
  );
}
