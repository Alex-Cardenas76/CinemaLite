import { useState } from 'react';

export const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query) return;

        setLoading(true);
        setError(null);
        setMovies([]);

        try {
            const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
            const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
            const data = await response.json();

            if (data.Response === 'True') {
                setMovies(data.Search);
            } else {
                setError(data.Error || 'No se encontraron resultados');
            }
        } catch (err) {
            console.error(err);
            setError('Error al conectar con la API');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-5xl mx-auto">
            <form onSubmit={handleSearch} className="flex gap-4 mb-8 justify-center">
                <input
                    type="text"
                    placeholder="Buscar películas (ej: Batman)..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full max-w-md p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                    type="submit"
                    className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition transform hover:scale-105"
                >
                    Buscar
                </button>
            </form>

            {loading && (
                <p className="text-center text-2xl text-yellow-500 animate-pulse font-semibold">
                    Cargando...
                </p>
            )}

            {error && (
                <p className="text-center text-red-400 text-lg bg-red-900/20 p-4 rounded-lg">
                    {error}
                </p>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie) => (
                    <div
                        key={movie.imdbID}
                        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border border-gray-700 group"
                    >
                        <div className="relative aspect-[2/3] overflow-hidden">
                            <img
                                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
                                alt={movie.Title}
                                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-white font-bold truncate text-lg" title={movie.Title}>{movie.Title}</h3>
                            <p className="text-gray-400 text-sm mt-1">{movie.Year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
