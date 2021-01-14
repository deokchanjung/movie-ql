const quackCoder = {
  username: 'Deokchan Jung',
  nickname: 'Quack Coder',
  age: 32,
  gender: 'male'
};

const resolvers = {
  Query: {
    name: () => 'Quack Coder',
    age: () => 32,
    user: () => quackCoder
  }
};

export default resolvers;
