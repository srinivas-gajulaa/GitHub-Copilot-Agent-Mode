import React, { useEffect, useState } from 'react';

function TeacherProfile() {
  const [profiles, setProfiles] = useState([]);
  const [formData, setFormData] = useState({
    user: '',
    subject: '',
    bio: '',
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/teacher-profiles/')
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error('Error fetching teacher profiles:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/teacher-profiles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newProfile) => setProfiles([...profiles, newProfile]))
      .catch((error) => console.error('Error adding teacher profile:', error));
  };

  return (
    <div>
      <h2>Teacher Profiles</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Subject</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td>{profile.user}</td>
              <td>{profile.subject}</td>
              <td>{profile.bio}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Teacher Profile</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="User"
          value={formData.user}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={formData.bio}
          onChange={handleChange}
        />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
}

export default TeacherProfile;
