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

[landing-page](https://user-images.githubusercontent.com/26815113/155301682-8ee0897e-5658-4108-8727-539f61e83a30.PNG)




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
The project is built with;
* [React JS](https://beta.reactjs.org/) -Library for building user interfaces
* [GraphQL](https://graphql.org/learn/) - Open-source data query and manipulation language for APIs
* [Apollo Client](https://www.apollographql.com/docs/react/) - Production-ready, caching GraphQL client
* [CSS]()

It uses [Node.js >= 12.18.3](https://nodejs.org/en/) 


```
### Prerequisites
Ensure you have NodeJS installed by entering node -v on your terminal If you don't have NodeJS installed, go to the NodeJS Website, and follow the download instructions


### Tools Required
The following tools are required to run this application:

* A text editor like Visual Studio Code
* Command Line

### Getting the source code
You can clone the repository directly using this command:
git clone git@github.com:jamesoyanna/QuidaxBook-App.git

### Installation
Installation steps:

Node.js and Yarn or Npm
Your computer must have installed nodejs, and yarn to run this application You can download Node.js from https://nodejs.org and yarn from https://yarnpkg.com/lang/en/docs/install/ . NPM comes bundled with Node.js

![nodejs](https://user-images.githubusercontent.com/26815113/132867561-bf2ec1a2-cd63-461f-95dd-e95c1c6676c7.PNG)

## Install Npm Packages
After clonning the application, You will have to install all the dependencies and packages. You can do this by running yarn or npm install from the root of the project folder to install.

### Development server


#### Running the App

  ``` 
Run yarn start or npm stall from the root of your project to start a dev server. 
Navigate to http://localhost:3000/. 
The app will automatically reload if you make changes to any of the source files.
  ```

## Deployment

You can deploy the application on any server. You can make use of Netlify,a git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps. Visit [Netlify](https://www.netlify.com/)

## Assumptions/ Thought process: 
- I have assumed that this is a not-so-large application and may require minimal state management. 
So to avoid over-engineering the solution,  I used the React Context API for my state management compared to using other state management libraries like Redux.

 The Context API enables me to share my application state, data, and functionalities between components without having to explicitly pass a prop through every level of my component tree.


- I also have assumed that the data may not be persisted in local storage. So when a book item is added to the cart, on the refresh of the application, the value of the cart state gets reinitialized and its state is set back to zero.


### How I manage the application state:
First, I created the cart Context, which I use to create my application state and functions across different components.

I used the useContext hooks to access my state in the component I need it.

## My Approach to the challenge:
I created the project using create-react-app, a popular command-line tool that enable me to set up react applications with zero or minimal configuration and setup.

Next was to load the data that is stored in the database. 
Having gone through this https://quidax-feec-graphql.herokuapp.com/graphql GraphQL API documentation sent with this challenge,

I implemented GraphQL Queries with Apollo CLient and integrate them with the react UI.

Using  Apollo Client, I was able to send queries with React useQuery React hook.

I first of all defined the GraphQL query I want to
send to the API.

It looks like this;
```
import { gql } from "@apollo/client";
<!--- GraphQL query to fetch all book items -->

export const BOOK_QUERY = gql`
  {
    books {
      id
      title
      subtitle
      publisher
      release_date
      number_of_purchases
      rating
      price
      image_url
      available_copies
      likes
      tags {
        name
      }
    }
  }
`;
```

What’s actually happening with this code is that
 
The BOOK_QUERY variable uses gql, a library that uses tagged template literals to parse the GraphQL query document I defined.

This query document is then passed into the useQuery hook in the BookPage component I created.
 
This hook returns three items that are relevant for my purposes; 

1 - loading:  This is true as long as the request is still ongoing and the response hasn’t been received.

2 - Error: In case the request fails, this field will contain information about what exactly went wrong.

3 - data: This is the actual data, in this case, book items that I received from the server. 

Then I  executed and tested the query in the graphQL Playground (against the application schema) and retrieve the results from the GraphQL server. 

The project was styled using CSS. The React components were implemented using the functional component.


### Requirement not completed:
I have been working on implementing the search functionality on the application. 
This feature is almost in near compIetion. I am yet to complete it. 



## Author

#### James Oyanna
* [GitHub](https://github.com/jamesoyanna)
* [LinkedIn](https://www.linkedin.com/in/jamesoyanna)


`Quidax Book App` Open source software
## Resources

I made use of these `resources` during development.

* [New React Js Doc](https://beta.reactjs.org/)

 * [GraphQl](https://graphql.org/learn/)
    [Apollo Client](https://www.apollographql.com/docs/react/)
* [casscading Style Sheet (CSS)
* [React Context Api](https://reactjs.org/docs/context.html)

