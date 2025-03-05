import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Use the location hook to track current route

    // Close the menu when location changes (page changes)
    useEffect(() => {
        setIsMenuOpen(false); // Close menu on page navigation
    }, [location]);

    return (
        <nav className="fixed top-0 left-0 bg-[#09090a] w-full p-4 z-50">
            <div className="w-full flex justify-between items-center">
                {/* Left-Aligned Logo & Desktop Links */}
                <div className="flex items-center space-x-6">
                    <Link to="/" className="!text-white font-bold text-xl">
                        NBA STATS
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        <Link to="/teams" className="!text-white hover:text-gray-300">Teams</Link>
                        <Link to="/players" className="!text-white hover:text-gray-300">Players</Link>
                        <Link to="/about" className="!text-white hover:text-gray-300">About</Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden p-4">
                    <Link to="/teams" className="block !text-white py-2">Teams</Link>
                    <Link to="/players" className="block !text-white py-2">Players</Link>
                    <Link to="/about" className="block !text-white py-2">About</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
