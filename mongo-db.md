### MongoDB
- schema-less
  - flexible
  - no single key
- stored merged as document nested in a collections
- horizontal scaling made less difficult
- great perfomance on simple single queries
- single master architecture
  - favor consistency
- shell is full javascript interpreter
- supports many indices
  - only one can be used for sharding
- built-in aggregation capabilities ( MapReduce, GridFS )
  - integration with software like hadoop or spark is optional

<br>

```
{
  "_id": 2bsliejn3342342,
  "title: "sample document data"
  "feedback": [
    {
      "name": "user",
      "comment": "done"
    }
  ]
}
```

<br>

#### Terminology in MongoDB
- Databases
- Collections
- Documents


#### Replica Sets
- automatic replication
- copies of your database instance
- needs to be uneven number to have majority vote in selection of primary
  - can have only one arbiter
- can delay replication ( delayed secondaries )

#### Sharding
- multiple replica set
- ranges of some indexed value assigned to different replica set
- must have 3 config server
- mongos

<br>

#### Queries
```
[db].[collection].find(); // get all data on collection inside the db
```

<br>

#### figures
<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/mongodb-sharding-0.jpg"/>
</p>

<br>
---

https://www.youtube.com/watch?v=UFVFIKduXpo&list=WL&index=88&t=0s