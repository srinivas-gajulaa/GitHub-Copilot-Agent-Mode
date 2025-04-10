import React, { useEffect, useState } from 'react';

function FitnessActivity() {
  const [activities, setActivities] = useState([]);
  const [formData, setFormData] = useState({
    student: '',
    date: '',
    activity_type: '',
    duration_minutes: 0,
    steps: 0,
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/fitness-activities/')
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch((error) => console.error('Error fetching fitness activities:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/fitness-activities/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newActivity) => setActivities([...activities, newActivity]))
      .catch((error) => console.error('Error adding fitness activity:', error));
  };

  return (
    <div>
      <h2>Fitness Activities</h2>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Date</th>
            <th>Activity Type</th>
            <th>Duration (Minutes)</th>
            <th>Steps</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.student}</td>
              <td>{activity.date}</td>
              <td>{activity.activity_type}</td>
              <td>{activity.duration_minutes}</td>
              <td>{activity.steps}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Fitness Activity</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="student"
          placeholder="Student"
          value={formData.student}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="activity_type"
          placeholder="Activity Type"
          value={formData.activity_type}
          onChange={handleChange}
        />
        <input
          type="number"
          name="duration_minutes"
          placeholder="Duration (Minutes)"
          value={formData.duration_minutes}
          onChange={handleChange}
        />
        <input
          type="number"
          name="steps"
          placeholder="Steps"
          value={formData.steps}
          onChange={handleChange}
        />
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
}

export default FitnessActivity;
