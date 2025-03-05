import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = "c77b5e0f-8ef9-4400-b07d-2e54dbe5b379";
const API_URL = "https://api.balldontlie.io/v1/players";

const ListPlayers = () => {
    const [players, setPlayers] = useState([]); // Stores players based on search
    const [searchTerm, setSearchTerm] = useState(''); // Stores the search input
    const [loading, setLoading] = useState(false); // Loading state

    // Debounce function
    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    // Fetch players based on search term
    const searchPlayers = async (searchTerm) => {
        if (!searchTerm) {
            // If search term is empty, keep the list empty and do not fetch players
            setPlayers([]);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${API_URL}?search=${searchTerm}`, {
                headers: {
                    "Authorization": `${API_KEY}`,
                },
            });

            const data = await response.json();
            setPlayers(data.data || []);
        } catch (error) {
            console.error("Error fetching players:", error);
        } finally {
            setLoading(false);
        }
    };

    // Call searchPlayers when the search term changes
    useEffect(() => {
        const debouncedSearch = debounce(searchPlayers, 300);
        debouncedSearch(searchTerm);
    }, [searchTerm]);

    // Clear search term and reset players list
    const clearSearch = () => {
        setSearchTerm('');
        setPlayers([]);
    };

    return (
        <div className="min-h-screen w-screen flex flex-col items-center bg-[#FF5733] text-white p-6 pt-20">
            <h1 className="text-4xl font-extrabold text-center mt-8 mb-6">NBA Players</h1>

            {/* Search Bar and Clear Button */}
            <div className="flex flex-col items-center mb-6">
                <input
                    type="text"
                    placeholder="Search players..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 text-black rounded-lg w-80 border-2 border-gray-300 focus:border-blue-500 focus:outline-none mb-2"
                />

                {/* Always visible Clear Search Button */}
                <button
                    onClick={clearSearch}
                    className={`px-4 py-2 ${searchTerm ? 'bg-red-600' : 'bg-red-600'} text-white rounded-lg hover:bg-red-800`}
                    disabled={!searchTerm}
                >
                    Clear Search
                </button>
            </div>

            {/* Loading Message */}
            {loading && <p className="mt-4 text-xl text-gray-300">Searching...</p>}

            {/* Players List */}
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {players.length > 0 ? (
                    players.map((player) => (
                        <div
                            key={player.id}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <Link
                                to={`/players/${player.id}`}
                                className="text-2xl font-bold text-blue-600 hover:underline"
                            >
                                {player.first_name} {player.last_name}
                            </Link>
                            <p className="text-xl">
                                <span className="font-semibold text-gray-300">Team:</span> {player.team?.full_name || "N/A"}
                            </p>
                            <p className="text-xl">
                                <span className="font-semibold text-gray-300">Position:</span> {player.position || "N/A"}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="fixed left-0 flex flex-col justify-start items-center min-h-full w-screen bg-[#FF5733] ">
                        <p className="text-xl text-center text-gray-300">No players found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListPlayers;
