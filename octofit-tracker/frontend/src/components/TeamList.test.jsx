import { render, screen } from '@testing-library/react';
import TeamList from './TeamList';
import 'whatwg-fetch'; // polyfill

beforeEach(() => {
  // Mock the fetch response
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: async () => [
      { id: 1, name: 'Team Alpha' },
      { id: 2, name: 'Team Beta' },
    ],
  });
});

afterEach(() => {
  global.fetch.mockRestore();
});

test('renders team list correctly', async () => {
  render(<TeamList />);

  const teamAlpha = await screen.findByText('Team Alpha');
  const teamBeta = await screen.findByText('Team Beta');

  expect(teamAlpha).toBeInTheDocument();
  expect(teamBeta).toBeInTheDocument();
});
