import PizzaMenu from "./components/pizzamenu";
import Footer from "./components/footer";

const Header = () => (
  <header className="font-playfair  text-4xl md:text-5xl lg:text-6xl font-bold text-amber-300 header">
    <h1 className="bg-stone-600 mt-3 p-3">Fast JSX Pizza </h1>
  </header>
);

function App() {
  return (
    <div className="min-h-screen bg-amber-50 lg:w-240 md:w-210">
      <div className="flex flex-col items-center justify-between  p-3 border-r border-l border-stone-200/50">
        <Header />
        <PizzaMenu />
        <Footer />
      </div>
    </div>
  );
}

export default App;
