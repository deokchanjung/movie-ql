# 강의노트

## 0.3 Problems solved by GraphQL

### GraphQL로 해결할 수 있는 두 가지 문제

1. Over-fetching

- 요청한 정보보다 많은 정보를 서버로부터 받는 것.
- GraphQL은 Over-fetching 없이 코드를 짤 수 있고, 개발자가 어떤 정보를 원하는지에 대해 통제할 수 있다.

2. Under-fetching

- 어떤 하나를 완성하기 위해 여러 요청들을 서버로 보내는 것

## 0.4 Creating a GraphQL Server with GraphQL Yoga

### Schema

schema는 서버에서 사용자에게 보내주거나 사용자로부터 받을 data에 대한 설명이다.

## 0.5 Creating the first Query and Resolver

### Query

```qraphql
# ./graphql/schema.graphql
type Query {
  name: String!
}

# ! -> required
```

### Resolver

Query를 해결(resolve)하는 것

```javascript
/**
 * ./graphql/resolvers.js
 */
const resolvers = {
  Query: {
    name: () => 'Quack Coder'
  }
};

export default resolvers;
```

## 0.6 Extending the Schema

## 알아볼 것들

- Query
- Subscription
- Mutation
