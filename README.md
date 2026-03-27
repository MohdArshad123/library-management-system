# Library Management System

     This is a library management API Backened for the management of users and the books

# Routes and the endpoints

## /users
GET: Get All the list of the users in the system
POST: Create/Register a new user

## /users(id)
GET: Get a user by their ID
PUT: updating a user by their ID
DELETE: Deleting a user by their ID(check if the user still has an issueed book) && (is there any fine/penalty to be collected)

## /users/subscription-details/{id}
GET: Get a user subscription details by their ID
    >> Date of subscription
    >> Valid till ?
    >> fine if any ?


## /books
GET: Get all the books in the system
POST: Add a new book to the system


## /books (id)
GET: Get a book by its ID
PUT: update a book by its ID
DELETE: Delete a book by its ID


## /books/issued
GET: Get all the issued books

## /books/issued/withfine

Get: Get all the issued books with their fine amount



### Subscription types
    >> Basic (3 months)
    >> Standard ( months)
    >> Premium (12 months)


// If a user misses the renewable date, then the user should be charged $100
// If a user misses the subscription payment, then the user is expected to pay $100
// If a user misses both renewable date and subscription, then the collected amount should be $100

## commands:
npm init
npm i express
npm i nodemon --save-dev

npm run dev

To restore node modules and package-lock.json --> npm i/npm install
