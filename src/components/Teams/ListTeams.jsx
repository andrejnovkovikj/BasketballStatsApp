import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import service from "../Services/service.jsx";

const ListTeams = () => {
    const [teams, setTeams] = useState([]); // Store all teams
    const [filteredTeams, setFilteredTeams] = useState([]); // Store teams after applying the search filter
    const [searchTerm, setSearchTerm] = useState(''); // Search term

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const teamsData = await service.getAllTeams();
                const slicedTeams = teamsData.slice(0, teamsData.length - 15); // Remove the last 15 teams
                setTeams(slicedTeams); // Store all teams after slicing
                setFilteredTeams(slicedTeams); // Initially show all teams
            } catch (error) {
                console.error("Error fetching teams");
            }
        };

        fetchTeams();
    }, []);

    // Filter teams based on the search term
    useEffect(() => {
        if (!searchTerm) {
            // If search term is empty, show all teams
            setFilteredTeams(teams);
        } else {
            // Filter teams based on search term
            const filtered = teams.filter((team) =>
                team.full_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTeams(filtered);
        }
    }, [searchTerm, teams]);

    // Clear search term and reset the teams list
    const clearSearch = () => {
        setSearchTerm(''); // Clear the search term
    };

    return (
        <div className="min-h-screen w-screen flex flex-col items-center bg-[#FF5733] text-white p-6 pt-20">
            <h1 className="text-4xl font-extrabold text-center mt-8 mb-6">
                NBA Teams
            </h1>

            {/* Search Bar */}
            <div className="flex flex-col items-center">
                <input
                    type="text"
                    placeholder="Search teams..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-2 px-4 py-2 text-black rounded-lg w-80 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                />

                {/* Always visible Clear Search Button */}
                <button
                    onClick={clearSearch}
                    className={`mb-6 px-4 py-2 ${searchTerm ? 'bg-red-600' : 'bg-red-600'} text-white rounded-lg hover:bg-red-800`}
                    disabled={!searchTerm}
                >
                    Clear Search
                </button>
            </div>

            {/* Teams List */}
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredTeams.length > 0 ? (
                    filteredTeams.map((team) => (
                        <div
                            key={team.id}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <Link
                                to={`/teams/${team.id}`}
                                className="text-2xl font-bold text-blue-600 hover:underline"
                            >
                                {team.full_name}
                            </Link>
                            <p className="text-xl">
                                <span className="font-semibold text-gray-300">City:</span> {team.city}
                            </p>
                            <p className="text-xl">
                                <span className="font-semibold text-gray-300">Conference:</span> {team.conference}
                            </p>
                            <p className="text-xl">
                                <span className="font-semibold text-gray-300">Division:</span> {team.division}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-xl text-center text-gray-300">No teams found.</p>
                )}
            </div>
        </div>
    );
};

export default ListTeams;
