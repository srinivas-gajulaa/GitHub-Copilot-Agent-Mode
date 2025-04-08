import './App.css';
import StudentProfile from './StudentProfile';
import TeamList from './components/TeamList';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">OctoFit Tracker</h1>
      <TeamList />
    </div>
  );
}

export default App;
