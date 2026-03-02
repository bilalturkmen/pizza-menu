import { useState, useEffect } from "react";
import { pizzaData } from "../data/data";
import FavorIcon from "../assets/FavorIcon";

function PizzaItem({ pizza }) {
  const { name, ingredients, price, soldOut, photoName } = pizza;
  const [isAdded, setIsAdded] = useState(false);

  useEffect(
    function () {
      if (isAdded) {
        const timer = setTimeout(() => setIsAdded(false), 1500);
        return () => clearTimeout(timer);
      }
    },
    [isAdded],
  );

  return (
    <li
      className={`pizza-card ${soldOut ? "opacity-70 md:order-0 order-1" : ""}`}
    >
      <div className="relative shrink-0">
        <img
          src={photoName}
          alt={name}
          className={`h-32 w-32 rounded-lg object-cover ${soldOut ? "grayscale" : "shadow-sm"}`}
        />
        {soldOut && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 text-white font-bold uppercase text-xs rounded-lg backdrop-blur-[1px]">
            Sold Out
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-playfair font-bold text-stone-800">
            {name}
          </h3>
          <button
            onClick={() => !soldOut && setIsAdded(true)}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              soldOut
                ? "cursor-not-allowed opacity-20"
                : "hover:bg-amber-100 text-stone-400 hover:text-amber-600"
            }`}
          >
            <FavorIcon fill={isAdded ? "currentColor" : "none"} />
          </button>
        </div>

        <p className="text-sm text-stone-500 italic flex-1 my-2 leading-snug">
          {ingredients}
        </p>

        <div className="flex justify-between items-center">
          <span
            className={`font-mono font-bold ${soldOut ? "text-stone-400 line-through" : "text-stone-700 text-lg"}`}
          >
            {soldOut ? "OUT" : `$${price.toFixed(2)}`}
          </span>
          {isAdded && (
            <span className="text-[10px] font-bold uppercase text-amber-600 animate-bounce">
              Added!
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

function PizzaList({ pizzas }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 list-none">
      {pizzas.map(function (pizza) {
        return <PizzaItem key={pizza.name} pizza={pizza} />;
      })}
    </ul>
  );
}

export default function PizzaMenu() {
  const pizzas = pizzaData;

  return (
    <section className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-playfair font-black text-stone-800 uppercase ">
          Our Menu
        </h2>
        <p className="mt-6 text-stone-600 max-w-lg mx-auto leading-relaxed">
          Authentic Italian cuisine. <br></br>All from our stone oven, all
          organic, all delicious.
        </p>
      </div>

      {pizzas.length > 0 ? (
        <PizzaList pizzas={pizzas} />
      ) : (
        <p className="text-center italic text-stone-400">
          Our chefs are preparing the dough. Check back soon!
        </p>
      )}
    </section>
  );
}
