import PizzaMenu from "./components/pizzamenu";
import Footer from "./components/footer";

function Header() {
  return (
    <header className="py-10 text-center bg-stone-800 text-amber-50">
      <h1 className="header-ornament text-4xl md:text-6xl font-fraunces font-black uppercase tracking-tighter">
        Fast JSX Pizza
      </h1>
    </header>
  );
}

export default function App() {
  return (
    <div className="w-full max-w-5xl min-h-screen flex flex-col border-x border-stone-200 bg-white/30 shadow-2xl mx-auto">
      <Header />
      <main className="flex-1 flex flex-col items-center py-12 px-6">
        <PizzaMenu />
      </main>
      <Footer />
    </div>
  );
}
