import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import service from "../Services/service.jsx";

const DetailsForTeam = () => {
    const { teamId } = useParams(); // Get team ID from URL
    const [team, setTeam] = useState(null);

    useEffect(() => {
        const fetchTeamDetails = async () => {
            try {
                const teamData = await service.getTeamById(teamId);
                setTeam(teamData);
            } catch (error) {
                console.error("Error fetching team");
            }
        };

        fetchTeamDetails();
    }, [teamId]);

    if (!team) {
        return (
            <div className="min-h-screen w-screen flex flex-col items-center bg-[#FF5733] text-white p-6 pt-20">
                <h1 className="text-4xl font-extrabold text-white mt-10 mb-6">Loading...</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-screen flex flex-col items-center bg-[#FF5733] text-white pt-20">
            <h1 className="text-4xl font-extrabold text-white mt-10 mb-6">{team.full_name}</h1>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-lg w-full">
                <p className="text-xl"><span className="font-semibold text-gray-300">City:</span> {team.city}</p>
                <p className="text-xl"><span className="font-semibold text-gray-300">Conference:</span> {team.conference}</p>
                <p className="text-xl"><span className="font-semibold text-gray-300">Division:</span> {team.division}</p>
            </div>

            <Link
                to="/teams"
                className="mt-6 px-4 py-2 bg-green-600 !text-white rounded-lg hover:bg-blue-600"
            >
                Back to Teams
            </Link>

        </div>
    );
};

export default DetailsForTeam;
