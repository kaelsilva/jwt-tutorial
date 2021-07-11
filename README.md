# JWT Tutorial

This is an implementation of authentication API with Node based on [Linus Muema's tutorial](https://www.section.io/engineering-education/node-authentication-api/), except that I've decided to make some changes, so it would work just fine with Typescript (Muema's tutorial utilizes Javascript).

Also, I've decided to add a shell script which creates and starts a MongoDB container and set up a standard `.env` file that is required to run this project.

## How to run it

### Pre-requirements

- __Node__
- __NPM__ or __Yarn__
- __Docker__

### Setup

- Execute the `create-mongo.sh` file. It will create the MongoDB container and the `.env` file with the environment variables required for the project. You might need to add permissions for execution to the script (`chmod +x create-mongo.sh` will fix this). You can change the values as you wish after the file is created.

- Run `npm i` or `yarn` in the root directory, so `node_modules` will be created.

- Run `npm run dev` or `yarn dev`, so the project will start and you are good to go.

## Screenshots

<img src="https://imgur.com/hwaI2AP.png" width="45%"> <img src="https://imgur.com/hwaI2AP.png" width="45%"> <img src="https://imgur.com/hwaI2AP.png" width="45%">