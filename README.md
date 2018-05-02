# Swagger based RESTful Express+Mongoose API

This is a straightforward boilerplate for building REST APIs with Express based on your Swagger api design.

## Features

* Founded base on the API Swagger file
  * Automatic mapping routes to controllers based on the swagger api file using [Swagger Router](https://github.com/apigee-127/swagger-tools/blob/master/docs/Middleware.md#swagger-router).
  * Providing API definition metadatas in controllers for handling custome keys and functionalities based on the api definition using [Swagger Metadata](https://github.com/apigee-127/swagger-tools/blob/master/docs/Middleware.md#swagger-metadata).
  * Automatic deep parametter validation on all routes based on the swagger api file using [Swagger Validator](https://github.com/apigee-127/swagger-tools/blob/master/docs/Middleware.md#swagger-validator).
  * Handling security (authenticate/authorize) strategiees based on the swagger api file on all rouret using [Swagger Security](https://github.com/apigee-127/swagger-tools/blob/master/docs/Middleware.md#swagger-security).
  * Serving online api documentations using [Swagger UI](https://github.com/apigee-127/swagger-tools/blob/master/docs/Middleware.md#swagger-ui).
  * Automatic Generating mongoose schemas and models from swagger documents using [swagger-mongoose](https://github.com/simonguest/swagger-mongoose)
  * Integrated Unit Tests based on the swagger api file using [Dredd](https://github.com/apiaryio/dredd) plus using an isolate local mongodb sandbox for testing with sample data records.
* Necessary packages included
  * CORS support via [cors](https://github.com/troygoode/node-cors)
* Easy and Standard Development, Linting and Debugging
  * Saparated swagger .yaml source codes using [js-yaml](https://github.com/nodeca/js-yaml) for easy large scale API development.
  * Visual Studio Code friendy for linting and debugging.
  * Linting using [ESLint](https://eslint.org/) with [Airbnb](https://github.com/airbnb/javascript) code style.

## Getting Started

1- Clone the boilerplate.

```sh
git clone https://github.com/motdotla/dotenv.git
```

2- Install dependencies.

```sh
npm install
```

3- Create a text file and name it `.env` into the root and fill it with your configuration.

```conf
PORT=8001
MONGO_URL=mongodb://<dbuser>:<dbpassword>@<dbhost>:<dboport>/<dbname>
NODE_ENV=development
DEBUG=swagger-tools:middleware:*
```

4- Start defining your api inside `./swagger` directory.

5- Fill controllers inside `./src/controllers` .

6- Start your server in local

```sh
npm start
```

7- Run unit tests

```sh
npm test
```

8- Commite and push changes into the repository for automatic testing and deployment.

## License

MIT
