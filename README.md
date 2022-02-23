## Salesflare application

### About Project
Salesflare is a enterprise customer relationship management application. 

## Application Features
-Dashboard for display of monthly amount of invoices issued, Quote, Payment and Due balance.
- Authentication and authorization system for login in and assigning admin role.
-Search functionality for easy search of items.
- Customer section for adding of new customer
- Invoice section for adding of invoice.
- Payment section for recored and adding of payment.
- Employee section for adding of new employee.
- Admin section for updating and adding of new admin

## Application Functionalities
- You can add a new customer by clicking on the custmer icon. An invoice is create for any customer or client to track their payment. Using the payment invoice, you can record a payment made by a particular client.

Using the employee feature, you can manage your employees by adding all your employees.

- On the setting button, you can add a payment mode and also assign role to a user.




#### Live view of the application Demo can be found here- [Salesflare application](https://salesfla)

### Pictorial View of the Application

Home page

![landing-page](https://user-images.githubusercontent.com/26815113/155301682-8ee0897e-5658-4108-8727-539f61e83a30.PNG)




Login Section:

[login](https://user-images.githubusercontent.com/26815113/155302086-f9d83015-fb6d-49c3-86a3-81aec3cd04fd.PNG)




Dashboard Display: 
![dashboard](https://user-images.githubusercontent.com/26815113/155302739-c28cebb5-9043-4748-82da-96f3a5272267.PNG)




Adding a Customer:
![Add customer section](https://user-images.githubusercontent.com/26815113/155303168-5511fe46-485f-46ef-88da-073c8ae184d0.PNG)


Adding a Employee:
![employee](https://user-images.githubusercontent.com/26815113/155303536-b7d85f1d-742b-4956-a96b-76b6beeeeb53.PNG)

Adding New Payment Invoice:
![Add-New-Payment](https://user-images.githubusercontent.com/26815113/155303877-2a1deb79-f062-4fcb-8f9c-a7ac5e6f8007.PNG)


## How to use the application

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Development](#development)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)

## Getting Started

#### Dependencies
##### Client Side

The project is built with;
* [React JS](https://beta.reactjs.org/) -Library for building user interfaces
* [Axios](https://axios-http.com) - Promise based HTTP client for the browser and node.js
* [Redux](https://redux.js.org/) - A Predictable State Container for JavaScript Applications.
* [Redux-Thunk](https://www.npmjs.com/package/redux-thunk) - A middleware that lets you call action creators that return a function instead of an action object.
* [React-router](https://reactrouter.com) - Enables the to implementation of dynamic routing in a web app.
* [Ant Design](https://ant.design) - A UI library that can be used with data flow solutions and application frameworks in any React ecosystem.


##### Server Side
* [Express JS](https://expressjs.com/) - flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Bcrypt JS](https://www.npmjs.com/package/bcrypt) - This module enables storing of passwords as hashed passwords instead of plaintext.
* [Mongoose](https://mongoosejs.com) - Provides a straight-forward, schema-based solution to model application data.
* [Node.js](https://nodejs.org/en)- Cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

* [dotenv](https://www.npmjs.com/package/dotenv)- dotenv allows you to separate secrets from your source code.

##### Database
* [MongoDB](https://www.mongodb.com)- As a document database, MongoDB makes it easy for developers to store structured or unstructured data

 
### Prerequisites
Ensure you have NodeJS installed by entering node -v on your terminal If you don't have NodeJS installed, go to the NodeJS Website, and follow the download instructions


### Tools Required
The following tools are required to run this application:

* A text editor like Visual Studio Code
* Command Line

### Getting the source code
You can clone the repository directly using this command:
git clone https://github.com/jamesoyanna/salesflare.git
OR clicking on the code button ontop to clone the application.

### Installation
Installation steps:

Node.js and Yarn or Npm
Your computer must have installed nodejs, and yarn to run this application You can download Node.js from https://nodejs.org and yarn from https://yarnpkg.com/lang/en/docs/install/ . NPM comes bundled with Node.js

![nodejs](https://user-images.githubusercontent.com/26815113/132867561-bf2ec1a2-cd63-461f-95dd-e95c1c6676c7.PNG)

## Install Npm Packages
After clonning the application, to run the client application locally, you will have to install all the dependencies and packages. 
Open your terminal and navigate into the client folder using the command:
cd client

 Run yarn or npm install from the root of the client folder.


#### Running the client App

  ``` 
Run yarn start or npm start from the root of the client folder to start the development server. 
Go to http://localhost:3000 on your browser. Your app should be running.
The app will automatically reload if you make changes to any of the source files.
  ```

#### Running the Server
Open the project folder you cloned. 
Create a .env file in the root folder
Fill in the following credentials:
PORT = 
DATABASE =
JWT_SECRET =

Run npm install from your terminal.
Then run npm start. 
Your server should start running on port 8888.

## Author

#### James Oyanna
* [GitHub](https://github.com/jamesoyanna)
* [LinkedIn](https://www.linkedin.com/in/jamesoyanna)


