# node-redis-user-management
Simple user management app using Node.js and Redis

## Screenshots
![screenshots](https://raw.githubusercontent.com/lirangofer-spec/node-redis-user-management/master/screenshots/add_user.gif)
![screenshots](https://raw.githubusercontent.com/lirangofer-spec/node-redis-user-management/master/screenshots/search_users.gif)
![screenshots](https://raw.githubusercontent.com/lirangofer-spec/node-redis-user-management/master/screenshots/user_details.gif)
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
