# node-redis-user-management
Simple user management app using Node.js and Redis

## Screenshots
![screenshots](https://github.com/lirangofer-spec/node-redis-users-management/blob/master/screenshots/add_user.png)
![screenshots](https://github.com/lirangofer-spec/node-redis-users-management/blob/master/screenshots/search_users.png)
![screenshots](https://github.com/lirangofer-spec/node-redis-users-management/blob/master/screenshots/user_details.png)
## Usage

Make sure you have Redis installed and running.
For Redis Cloud made the following:
- Uncomment the relevant part on app.js
- Add keys.json file with the following:
{
  "redisHost": [redisHost],
  "redisPort": [redisPort],
  "redisKey": [redisKey]
} 

Install Dependencies

```sh
$ npm install
```

Run Server

```sh
$ npm start
```
