import React from 'react';

function StudentProfile() {
  const student = {
    name: 'Srinivas',
    stepsToday: 5000,
    dailyGoal: 10000,
    avatarUrl: 'https://i.pravatar.cc/100?u=srinivas',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={student.avatarUrl}
        alt="Student Avatar"
        style={{ borderRadius: '50%', width: '100px', height: '100px' }}
      />
      <h2>{student.name}</h2>
      <p>Steps Today: {student.stepsToday}</p>
      <p>Daily Goal: {student.dailyGoal}</p>
    </div>
  );
}

export default StudentProfile;
