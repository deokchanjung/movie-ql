export const people = [
  {
    id: 1,
    name: 'User 1',
    age: 16,
    gender: 'male'
  },
  {
    id: 2,
    name: 'User 2',
    age: 32,
    gender: 'female'
  },
  {
    id: 3,
    name: 'User 3',
    age: 29,
    gender: 'male'
  },
  {
    id: 4,
    name: 'User 4',
    age: 42,
    gender: 'female'
  },
  {
    id: 5,
    name: 'User 5',
    age: 19,
    gender: 'male'
  }
];

export const getById = id => people.find(person => id === person.id);
