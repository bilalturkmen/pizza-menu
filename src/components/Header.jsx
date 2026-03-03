import { useState } from "react";
import CloseIcon from "../assets/CloseIcon";
import OrderIcon from "../assets/OrderIcon";

export default function Header({ totalItems, totalPrice }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <>
      <header className="header-container">
        <h1 className="font-fraunces">Fast JSX Pizza</h1>
        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
              Your Cart
            </p>
            <p className="font-fraunces text-lg text-brand-tomato">
              {totalItems} items — ${totalPrice.toFixed(2)}
            </p>
          </div>

          <button
            onClick={toggleModal}
            disabled={totalItems === 0}
            className={`
              add-btn flex items-center gap-2 mt-3 md:mt-0 py-3! px-6!  transition-colors ${totalItems > 0 ? " bg-brand-tomato" : ""}`}
          >
            Order Now <OrderIcon />
          </button>
        </div>
      </header>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
          <div className="bg-white max-w-lg w-full rounded-2xl p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full"
            >
              <CloseIcon />
            </button>
            <h3 className="text-2xl font-fraunces font-bold mb-4">
              Confirm Your Order
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6 font-bold">
              You are about to order{" "}
              <span className="text-brand-tomato">{totalItems}</span> pizzas for
              a total of{" "}
              <span className="text-brand-tomato">
                ${totalPrice.toFixed(2)}.
              </span>
              <span className="flex">
                By clicking Accept, you agree to our product delivery terms and
                conditions.
              </span>
            </p>
            <button
              onClick={toggleModal}
              className="w-full py-3 bg-brand-tomato text-white font-bold rounded-xl hover:brightness-110 transition-all"
            >
              I Accept & Order
            </button>
          </div>
        </div>
      )}
    </>
  );
}
