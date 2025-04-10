import React, { useEffect, useState } from 'react';

function StudentProfile() {
  const [profiles, setProfiles] = useState([]);
  const [formData, setFormData] = useState({
    user: '',
    age: '',
    grade: '',
    total_steps: 0,
    total_minutes_exercised: 0,
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/student-profiles/')
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error('Error fetching student profiles:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/student-profiles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newProfile) => setProfiles([...profiles, newProfile]))
      .catch((error) => console.error('Error adding student profile:', error));
  };

  return (
    <div>
      <h2>Student Profiles</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Total Steps</th>
            <th>Total Minutes Exercised</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td>{profile.user}</td>
              <td>{profile.age}</td>
              <td>{profile.grade}</td>
              <td>{profile.total_steps}</td>
              <td>{profile.total_minutes_exercised}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Student Profile</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="User"
          value={formData.user}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
        />
        <input
          type="number"
          name="total_steps"
          placeholder="Total Steps"
          value={formData.total_steps}
          onChange={handleChange}
        />
        <input
          type="number"
          name="total_minutes_exercised"
          placeholder="Total Minutes Exercised"
          value={formData.total_minutes_exercised}
          onChange={handleChange}
        />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
}

export default StudentProfile;
