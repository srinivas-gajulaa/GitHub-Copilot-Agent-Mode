const API_BASE_URL = "https://psychic-halibut-7jj4pv7q7q4cpq5v-8000.app.github.dev/api/leaderboard";

// Update fetch calls to use API_BASE_URL.
fetch(`${API_BASE_URL}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error fetching leaderboard:', error));