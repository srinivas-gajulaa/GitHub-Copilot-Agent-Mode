import React, { useState, useEffect } from 'react';

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('/api/teams/')
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error('Error fetching teams:', error));
  }, []);

  return (
    <ul>
      {teams.map((team) => (
        <li key={team.id}>{team.name}</li>
      ))}
    </ul>
  );
};

export default TeamList;
