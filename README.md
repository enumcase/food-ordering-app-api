# food-ordering-app-api
Node.js REST API for iOS food ordering app

To run the server on your PC or laptop, clone the repo and install the dependencies:
```
git clone https://github.com/enumcase/food-ordering-app-api.git
npm install
```

To ensure that the server runs, do not forget to add DB_CONNECTION into your .env file, and initialize it with your MongoDB connection credential.

After installing the dependencies, run the server:
```
npm start
```

List of possible GET routes:
http://localhost:PORT_NUMBER/appetizers/
http://localhost:PORT_NUMBER/appetizers/appetizer_ID

List of possible POST routes:
http://localhost:PORT_NUMBER/appetizers/

List of possible DELETE routes:
http://localhost:PORT_NUMBER/appetizers/appetizer_ID

List of possible PATCH routes:
http://localhost:PORT_NUMBER/appetizers/appetizer_ID
