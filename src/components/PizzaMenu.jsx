import { pizzaData } from "../data/data.js";

function PizzaItem({ pizza, quantity, onAdd, onRemove }) {
  const { name, ingredients, price, soldOut, photoName } = pizza;

  return (
    <li className={`pizza-card ${soldOut ? "sold-out" : ""}`}>
      <div className="relative shrink-0 overflow-hidden rounded-xl">
        <img
          src={photoName}
          alt={name}
          className="h-32 w-32 md:h-36 md:w-36 object-cover"
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-fraunces font-bold text-stone-900">
            {name}
          </h3>
          <span className="font-bold text-brand-tomato text-lg">
            ${price.toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-stone-500 italic flex-1 my-2 leading-tight">
          {ingredients}
        </p>

        <div className="flex justify-end items-center h-12 mt-auto">
          {quantity > 0 ? (
            <div className="qty-controls">
              <button
                onClick={() => onRemove(name)}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center font-bold text-sm">
                {quantity}
              </span>
              <button
                onClick={() => onAdd(name)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          ) : (
            <button
              disabled={soldOut}
              onClick={() => onAdd(name)}
              className="add-btn min-w-30"
            >
              {soldOut ? "Sold Out" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default function PizzaMenu({ cart, onAdd, onRemove }) {
  return (
    <section className="menu-section">
      <ul className="pizza-list">
        {pizzaData.map((pizza) => (
          <PizzaItem
            key={pizza.name}
            pizza={pizza}
            quantity={cart[pizza.name] || 0}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </section>
  );
}
