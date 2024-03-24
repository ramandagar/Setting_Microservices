# Welcome to FLight Service

# #Project Setup
 --clone the project on your local
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
