import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { name: 'Team Alpha', members: [{}, {}, {}] },
      { name: 'Team Beta', members: [{}, {}] },
    ]),
  })
);