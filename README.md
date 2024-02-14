# [DummyDollars💸- live](https://dummy-dollars.vercel.app/)

DummyDollars is a full-stack MERN application designed to simulate a simple money transfer platform. It allows users to sign up, receive a random amount of money upon registration, search for other users, and securely transfer funds between accounts. The application features a clean, modern user interface, token-based authentication, secure transfers and protected routes.

## Table of Contents

- [How to Use](#how-to-use)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Preview](#project-preview)

## How to Use

To use DummyDollars, follow these steps:

1. **Sign Up:** Create an account to receive a random amount of money.
2. **Search Users:** Use the search functionality to find other users.
3. **Send Money:** Select a user to send money to and enter the amount. Click "Initiate Transfer" to complete the transaction.
4. **Profile Page:** Access your profile page by clicking on the initial of your username in the top right of the navbar. Here, you can update your credentials, logout, or delete your account.

## Features

- **Token-based Authentication:** Secure user authentication using JSON Web Tokens (JWT).
- **Clean, Simple, and Responsive UI/UX:** Intuitive user interface designed for ease of use.
- **Safe Transfers:** Transfers are guaranteed to be successful and funds will never be lost in transit.
- **Protected Routes:** Certain routes are protected and require authentication to access.
- **Search User Functionality:** Users can be searched based on first name, last name, and username.
- **Password Hashing:** User passwords are securely hashed using bcrypt.js.

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- JavaScript
- CSS
- HTML

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Bcrypt.js
- Zod

## Project Preview

## Login page "/":
![image](https://github.com/hxdy-1/DummyDollars/assets/115286446/0654b980-92aa-4635-9529-22f41e7d52ae)

## Signup page "/signup":
![image](https://github.com/hxdy-1/DummyDollars/assets/115286446/a0709383-f8f3-4b6a-bdf8-b6cdde87a3e6)

## Dashboard page "/dashboard":
![image](https://github.com/hxdy-1/DummyDollars/assets/115286446/e58ae5f2-85d8-4969-9a26-0b630e9c8004)
### Searching users based on their credentials: 
![image](https://github.com/hxdy-1/DummyDollars/assets/115286446/ca8d49c4-b48e-49bd-91ab-8c1c094270f2)
### When no users were found from the search query:
![image](https://github.com/hxdy-1/DummyDollars/assets/115286446/04a12be9-aff3-4054-9409-afd8a697e80a)

## Send money page "/send?id=userId&name=firstName":
![image](https://github.com/hxdy-1/DummyDollars/assets/115286446/b0a5090a-95af-479c-b859-1eecf73cb6db)

## Profile page "/profile?username=username": 
![image](https://github.com/hxdy-1/DummyDollars/assets/115286446/aae1a703-5f75-4ca6-b0bf-422e7a9521cb)
### Updating user credentials form expanded:
![image](https://github.com/hxdy-1/DummyDollars/assets/115286446/2ceef1ec-c659-43b9-aeac-d617c844bdb1)
