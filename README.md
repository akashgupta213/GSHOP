# G-Shop 🛍️  
A modern, full-stack e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).

## Demo  
[Live Frontend](https://your-frontend-url.com)  
[Live Backend](https://your-backend-url.com)  

## Features  
- User Authentication (Login/Signup)  
- Product Listings with images, descriptions, and pricing  
- Dynamic Shopping Cart  
- Order Summary with total price calculation  
- Address input section on checkout  
- Proceed to Pay button triggering payment flow (can be extended with payment gateway)  
- Responsive design (works on desktop, tablet, and mobile)  
- RESTful API built with Express.js and MongoDB  
- Fully deployed on Render (Frontend + Backend)  

## Tech Stack  
**Frontend:** React.js, CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (MongoDB Atlas or local)  
**Deployment:** Render  

## Project Setup  

### Clone the repository  

git clone https://github.com/your-username/GSHOP.git  
cd GSHOP  
FRONTEND SETUP 

cd e_commerce  
npm install  
npm start  


BACKEND SETUP
cd g-shop-backend  
npm install  
npm start  


CREATE .ENV 
PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  


FOLDER STRUCT
GSHOP/
│
├── e_commerce/         # React frontend
├── g-shop-backend/     # Node.js/Express backend
└── README.md






