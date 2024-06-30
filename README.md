# SYSDEV - Fullstack Assesment
This used as well in the frontend so download it to see the whole fullstack project in action.
- [Front end](https://github.com/khesir/SYSDEV-Fullstack-assessment-submission-frontend)

### Stages
1. Stage 1 : Basic nodejs application, access `/` endpoint to see the result. Navigate  to `index.js` to view the code for this stage.

2. Stage 2 : Database Connection, navigate to `database.js` to see the implementation for the database to use in the backend. 
3. Stage 3 : Query and Display Data, navigate to routes to see all endpoints, available. I have created a `user` and `programming_languages` endpoint access it, by visiting these endpoints `/user` `/programming_languages`

### Run this project

Create the database, follow the schema for user database check this file `user.schema.sql`


Here's the environment variables, create .env and follow this format, incase you cant fine the host use this `127.0.0.1` as default value for the host
```
PORT = 3000

MYSQL_HOST = '<host>'
MYSQL_USER = '<user>'
MYSQL_PASSWORD = '<password>'
MYSQL_DATABASE = '<database_name>'
```

Setup the project
```
npm install
```

Run this project
```
npm start
```
