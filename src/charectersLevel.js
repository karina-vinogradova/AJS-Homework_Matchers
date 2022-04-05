const dataList = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function sortingList(list) {
  const sortList = list.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    return 1;
  });
  return sortList;
}

sortingList(dataList);
