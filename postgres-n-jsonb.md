### Postgres and jsonb

- JSONB is json kind object that's stored as a decomposed binary format.

#### known consequenses
- takes more diskspace due to large table footprint
- slightly slower update or aggregate queries (AVG, SUM, etc)

#### benefits
- supports indexing
- more efficient and faster to process the simple queries due to indexing

<br />

---

##### examples by define

```
CREATE TABLE users (
  user_id SERIAL,
  data jsonb
)
```

```
// common operators need to know

->    get as unformatted data
->>   get as text
#>    get unformatted data at path
#>>   get text at path
@>    compare left if exists at right
<@    compare right if exists at left
?     check if contains

jsonb_set(target,key/index,data,boolean_create_if_missing)
jsonb_typeof(json_data.value)


```

```
INSERT users (data) VALUES ('{"username":"newUserJsonObj"}') 
```

```
SELECT data FROM users
SELECT data FROM users WHERE data ->> 'username' = 'newUserJsonObj'
SELECT data FROM users WHERE data @> '{"username":"newUserJsonObj"}'
SELECT data FROM users WHERE data ? 'username'
```

```
UPDATE users SET data = jsonb_set(data, {username}, '{"username":"newValue"}') where user_id = 1 
// --- replace specific key/index
UPDATE users SET data = '{"username":"newValue"}' where user_id = 1 // --- replace all
```

```
// delete row
DELETE FROM users WHERE id = 1 
// delete field
UPDATE users SET data = data - 'username' 
// rename username to user
UPDATE users SET data = data - 'username' || jsonb_build_object('user', data->'username')
```

```
CREATE INDEX idx_user on users (data->'username')
CREATE INDEX idx_user_gin on users USING GIN(body jsonb_path_ops) // all
```

<br>

---

<br>

https://www.youtube.com/watch?v=rg_GiOZ5Owk&t=1207s
