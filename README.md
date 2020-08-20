<h1 align="center">Hasearch</h1>

<img align="center" src="https://github.com/ca-sousa/hash-search/blob/master/.github/hash.png">

<p align="center">Web application for searching hashtags, with Twitter Authentication</p>

Summary
=================
<!--ts-->
   * Instructions
      * Back-end
      * Front-end
   * Software
<!--te-->
### Instructions
First make a git clone on this repository, don't forget to install [Node.js](https://nodejs.org/en/), and [Docker](https://docs.docker.com/get-docker/).
### Back-end
```bash
# Go to Server Directory
$ cd server

# Install the dependencies
$ yarn install

# Run dockerfile, the database is here
$ docker-compose up

# Execute a aplicação em modo de desenvolvimento
$ yarn run

# The server will start on the port:3333 - acess <http://localhost:3333>
```
### Front-end
```bash
# Go to Web Directory
$ cd web

# Install the dependencies
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn run

# The server will start on the port:3000 - acess <http://localhost:3000>
```

### Software
The following softwares were used in the construction of the project:
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
