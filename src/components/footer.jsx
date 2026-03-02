import { useState } from "react";
import CloseIcon from "../assets/CloseIcon";
import OrderIcon from "../assets/OrderIcon";
import FooterAttribution from "../assets/FooterAttribution";

function OrderButton({ closeHour }) {
  const [showTerms, setShowTerms] = useState(false);

  function toggleModal() {
    setShowTerms((s) => !s);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <p className="font-medium text-stone-700 italic">
          We're open! Visit us or order online until {closeHour}:00.
        </p>
        <button
          onClick={toggleModal}
          className="flex items-center gap-2 px-8 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-transform active:scale-95 font-bold uppercase text-sm tracking-widest shadow-lg cursor-pointer"
        >
          Order Now <OrderIcon />
        </button>
      </div>

      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
          <div className="bg-white max-w-xl w-full rounded-2xl p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full cursor-pointer"
            >
              <CloseIcon />
            </button>
            <h3 className="text-2xl font-fraunces font-bold mb-4">
              Order Terms
            </h3>
            <div className="text-stone-600 text-sm leading-relaxed space-y-4 max-h-[40vh] overflow-y-auto pr-2 text-left">
              <p>
                By ordering, you agree to receive a delightfully hot pizza at
                your doorstep.
              </p>
              <p>
                Deliveries are available within a 10km radius of our stone oven.
              </p>
            </div>
            <button
              onClick={toggleModal}
              className="mt-8 w-full py-3 bg-stone-800 text-white font-bold rounded-xl hover:bg-stone-900 cursor-pointer"
            >
              I Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="py-12 px-6 bg-stone-100 border-t border-stone-200 text-center">
      {isOpen ? (
        <OrderButton closeHour={closeHour} />
      ) : (
        <p className="text-stone-500 font-medium">
          We're currently closed. Doors open at {openHour}:00 tomorrow! 🍕
        </p>
      )}
      <div className="mt-10 opacity-70">
        <FooterAttribution />
      </div>
    </footer>
  );
}
