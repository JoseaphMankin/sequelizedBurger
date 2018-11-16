# sequelizedBurger
Week 15 Sequelize Assignment

## Description

Simple application where users can create, "devour" and delete Burgers. Persistance maintained through MYSQL/JawsDB Database. The difference between this and the previous assignment is now Sequelize is being utilized for ORM functions/routing.

The application demonstrates the ability to use [Express](https://expressjs.com/) with a [Node.js](https://nodejs.org/en/) server while utilizing [Handlebars](https://handlebarsjs.com/) Template Views with [Bootstrap](https://getbootstrap.com/) CSS framework on the front end.

## Demo
	
*Burger* is deployed to Heroku. Please check it out [here](https://burger-mankin-sequelize.herokuapp.com/).

- What is the direct link to the project?
  * The code is hosted here: [burger](https://github.com/JoseaphMankin/sequelizedBurger).

![Alt text](/public/assets/images/burgerScreenShot.png?raw=true "Burger Screenshot")

## Installation

To install the application follow the instructions below:

	git clone https://github.com/JoseaphMankin/sequelizedBurger.git
	cd burger
	npm install
	
## Running Locally

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	export PORT=8080
	
After the `PORT` environment variable has been set, run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port 8080. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:8080`.