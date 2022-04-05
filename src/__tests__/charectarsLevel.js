import sortingList from '../charectersLevel';

test('checked sorting list', () => {
  const result = sortingList([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(expected);
});

test('checked sorting list', () => {
  const result = sortingList([
    { name: 'мечник', health: 5 },
    { name: 'маг', health: 1 },
    { name: 'лучник', health: 8 },
  ]);
  const expected = [
    { name: 'лучник', health: 8 },
    { name: 'мечник', health: 5 },
    { name: 'маг', health: 1 },
  ];

  expect(result).toEqual(expected);
});
