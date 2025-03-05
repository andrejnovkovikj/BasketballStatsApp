// src/components/Home.js
import React from 'react';
import Navbar from "../NavBar/Navbar.jsx";
import {Link} from "react-router-dom";

const Home = () => {
    return (
            <div className="mt-15 mb-20 fixed left-0 flex flex-col justify-start items-center min-h-screen  w-screen bg-[#FF5733] ">
                <div className="w-full max-w-4xl flex justify-center items-center p-4">
                    <h1 className="text-3xl font-extrabold text-center">
                        NBA Stats Dashboard
                    </h1>

                </div>
                <div className="w-full max-w-4xl flex justify-center items-center p-4">
                    <p className="text-lg mb-4 text-center">
                        Welcome to the NBA Stats App! Here you can explore player and team statistics.
                    </p>
                </div>


                <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-4">
                        <h2 className="text-xl font-bold mb-2">Top Scorer</h2>
                        <p className="text-lg">Player Name: LeBron James</p>
                        <p className="text-sm mt-1">Points: 27.4 PPG</p>
                    </div>
                    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-4">
                        <h2 className="text-xl font-bold mb-2">Most Assists</h2>
                        <p className="text-lg">Player Name: Chris Paul</p>
                        <p className="text-sm mt-1">Assists: 9.6 APG</p>
                    </div>
                    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-4">
                        <h2 className="text-xl font-bold mb-2">Top Rebounder</h2>
                        <p className="text-lg">Player Name: Andre Drummond</p>
                        <p className="text-sm mt-1">Rebounds: 14.8 RPG</p>
                    </div>
                </div>

                <Link
                    to="#"
                    className="mt-6 px-4 py-2 bg-green-600 !text-white rounded-lg hover:bg-blue-600"
                >
                    Get Started
                </Link>
            </div>

    );
};

export default Home;
