# Title

## Header

- Authentication.
- Express Middleware.
- Password Hashing.
- Sessions
- Cookies

## Header

Use `Node.js`, `Express` and `Knex` to build an API that provides **Register** and **Login** functionality using `SQLite` to store _User_ information. Make sure the password is not stored as plain text.

## Header

{
  "name": "node-auth1-project",
  "version": "1.0.0",
  "description": "- Authentication.\r - Express Middleware.\r - Password Hashing.\r - Sessions\r - Cookies",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
    "db:update": "knex migrate:latest",
    "db:undo": "knex migrate:rollback",
    "test": "cross-env DB_ENV=testing jest --watch"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sjeremich23/node-auth1-project.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/sjeremich23/node-auth1-project/issues"
  },
  "homepage": "https://github.com/sjeremich23/node-auth1-project#readme",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "connect-session-knex": "^1.5.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-session": "^1.17.0",
    "helmet": "^3.21.2",
    "jsonwebtoken": "^8.5.1",
    "knex": "^0.20.8",
    "knex-cleaner": "^1.3.0",
    "morgan": "^1.9.1",
    "pg": "^7.15.0",
    "prettier": "^1.19.1",
    "sqlite3": "^4.1.1"
  },
  "devDependencies": {
    "cross-env": "^6.0.3",
    "dotenv": "^8.2.0",
    "eslint": "^6.1.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-prettier": "^6.10.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-prettier": "^3.1.2",
    "jest": "^24.9.0",
    "nodemon": "^2.0.2",
    "supertest": "^4.0.2"
  },
  "jest": {
    "testEnvironment": "node"
  }
}
