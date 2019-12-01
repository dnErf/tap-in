### Take in on the GraphQL

#### GraphQL : Good Points

- The schema can be written to represent the entire global state of an application without any assumptions.

#### GraphQL : Bad Points

- Each queries has to be retrieved from the data source before it can be queried further. Which means, it add more cost to the network (network latency, transport overhead, and etc.).


#### The Foxx

- Microservice Framework that runs directly within the database and have a native access to the data.
- Because it is residing on the database, it reduced the network overhead needed to do a query.
- It is Javascript.

<br />

---

https://www.arangodb.com/2016/02/using-graphql-nosql-database-arangodb/

https://www.arangodb.com/why-arangodb/foxx/
