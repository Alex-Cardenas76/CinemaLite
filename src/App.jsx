import { MovieSearch } from './components/MovieSearch';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-yellow-500 selection:text-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <MovieSearch />
      </main>
    </div>
  );
}

export default App;
