# Welcome to FLight Service

# #Project Setup
 --Clone the project on your local
 - Execute the 'npm inistall' on the same path as of your root directory 
 - Create a .env file in the root directory and add the folliwing environmental variable
    PORT = 3000
 - Inside the src/config folder create file config.json and then add the following pice
   json 

   "development": {
    "username": "<Your Database login name>",
    "password": <Database password>,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

- Once you've added your db config is listed above,
  go to the src folder from terminal and execute 
  `npx sequelize db:create`


# # DB Design
 - Airplane Table
 - Flight
 - Airport
 - City

- A flight belongs to an ariplane but one airplane can be used in multiple flights

- A city has many airports but one airport belongs to a city

- One airport can have many flights, but a flight belongs to one airport
