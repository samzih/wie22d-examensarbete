# ByteBreeze

## Overview

### Project description
This app was created as my final degree project and is a webshop that sells prebuilt desktop computers. It comes with Stripe intregration for the checkout process.

### Tech stack
The application is built using the MERN-stack.

[![MongoDB](https://skillicons.dev/icons?i=mongodb)](https://www.mongodb.com/)
[![Express.js](https://skillicons.dev/icons?i=express)](https://expressjs.com/)
[![React](https://skillicons.dev/icons?i=react)](https://react.dev/)
[![NodeJS](https://skillicons.dev/icons?i=nodejs)](https://nodejs.org/)

### Some noticeable depencencies
* [React Bootstrap](https://react-bootstrap.github.io/)
* [React Router DOM](https://reactrouter.com/en/main)
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
* [joi](https://joi.dev/)
* [Mongoose](https://mongoosejs.com/)
* [Stripe](https://github.com/stripe/stripe-node)

## Running this project locally
> [!IMPORTANT]
> You will need NodeJS 20.10.0 (together with npm) installed.

**From the repo:**
1. Clone the project locally
2. Install all the necessary dependencies using `npm install` in both the client and server directories
3. In the server directory rename the *.env.example* file to simply *.env* and then provide both the Stripe API key and the MongoDB user credentionals
4. While being located in the server directory start the Express server with `npm run start`
5. Then in the client directory start the React app with `npm run dev`
6. Finally, navigate to [**localhost:5173**](http://localhost:5173) on your browser to view the webshop
