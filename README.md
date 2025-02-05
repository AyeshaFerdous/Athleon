# Athleon

## Live Site URL
[Visit Athleon](https://athleon-c6cfa.web.app/)

## Description
The **Athleon** is a responsive e-commerce platform that allows customers to browse, purchase, and review various sports accessories. It provides a wide range of products, including gear and apparel, catering to different sports disciplines. The website supports user authentication and easy product management, making it a seamless shopping experience.

## Key Features
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Product Catalog**: A wide variety of sports gear, apparel, and accessories categorized by sport.
- **User Authentication**: Secure login and registration system for users to manage their accounts.
- **Product Management**: Admin panel to add, update, and delete products.
- **Sorts**: Easily sort products with sort functionality by  price.

  

## Technology Stack:
- **Frontend**: React, Tailwind CSS, Firebase Authentication
- **Backend**: Node.js, Express.js, MongoDB
- **Hosting**: Firebase for the client-side, Vercel for server-side
- **Database**: MongoDB 

### Key Dependencies:
- **React** for the frontend user interface.
- **Tailwind CSS** for styling the application.
- **Firebase** for authentication and managing real-time data.
- **Express.js** and **MongoDB** for the backend.
- **dotenv** for handling environment variables.

## Installation Guide

To run this project locally, follow the steps below:

### 1. Clone the Repository:
```bash
git clone https://github.com/AyeshaFerdous/athleon.git
cd athleon
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Set up environment variables

To configure the backend services like Firebase and MongoDB, you'll need to set up environment variables. Create a .env file in the root of the project and add the following:

```bash
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
```

Make sure to replace your-* with actual credentials from your Firebase project.

### 4. Run the project

Once the dependencies are installed and environment variables are configured, you can run the project locally using:

```bash
npm start
```

This will start the development server and open the project in your default browser. You can now begin working with the Roomify Platform locally.

## 🔧 Backend Setup (Optional)

If you want to set up the backend locally for testing purposes:

1. Navigate to the server directory (if applicable).
2. Install backend dependencies:

```bash
npm install
```

3. Create a .env file in the backend directory with the following credentials:

```bash
MONGO_URI=your-mongo-db-uri
```


4. Start the backend server:

```bash
npm run dev
```

Your backend will now be running, and you can test the API along with the frontend.

---

That's it! You're all set up to explore and contribute to the *Athleon Platform*. Enjoy your journey! 🚀
```

This is a full setup guide that includes the necessary dependencies, local environment setup, and backend instructions for the *Athleon Platform* project. You can copy this into your README.md file for better clarity.
