import FooterAttribution from "../assets/FooterAttribution";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="p-6 bg-stone-50 border-t border-stone-200 text-center mt-auto">
      {isOpen ? (
        <p className="font-medium text-stone-600 italic">
          We're open! Visit us or order online until {closeHour}:00
        </p>
      ) : (
        <p className="text-stone-400">
          We are currently closed. We'd be happy to welcome you between{" "}
          {openHour}:00 and {closeHour}:00
        </p>
      )}
      <div className="mt-8 opacity-30 hover:opacity-100 transition-opacity">
        <FooterAttribution />
      </div>
    </footer>
  );
}
