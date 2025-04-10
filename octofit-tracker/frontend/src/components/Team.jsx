import React, { useEffect, useState } from 'react';

function Team() {
  const [teams, setTeams] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    members: '',
    goal_description: '',
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/teams/')
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error('Error fetching teams:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/teams/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newTeam) => setTeams([...teams, newTeam]))
      .catch((error) => console.error('Error adding team:', error));
  };

  return (
    <div>
      <h2>Teams</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
            <th>Goal Description</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.members}</td>
              <td>{team.goal_description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Team</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="members"
          placeholder="Members"
          value={formData.members}
          onChange={handleChange}
        />
        <textarea
          name="goal_description"
          placeholder="Goal Description"
          value={formData.goal_description}
          onChange={handleChange}
        />
        <button type="submit">Add Team</button>
      </form>
    </div>
  );
}

export default Team;
