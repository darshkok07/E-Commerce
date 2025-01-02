// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Middleware to serve static files (like images, CSS, JS)
app.use(express.static('public'));

// Sample data for featured products (would normally be in a database)
const products = [
  { id: 1, name: "Addidas Mock Up Hoodie", brand: "Addidas", price: "$70", image: "https://res.cloudinary.com/dh9uxrpmf/image/upload/v1734738620/f5_wmld9r.jpg" },
  { id: 2, name: "Addidas Mock Up Hoodie", brand: "Addidas", price: "$70", image: "https://res.cloudinary.com/dh9uxrpmf/image/upload/v1734738622/f3_vquwuz.jpg" },
  { id: 3, name: "Addidas Mock Up Hoodie", brand: "Addidas", price: "$70", image: "https://res.cloudinary.com/dh9uxrpmf/image/upload/v1734738621/f1_qwan9o.jpg" },
  { id: 4, name: "Addidas Mock Up Hoodie", brand: "Addidas", price: "$70", image: "https://res.cloudinary.com/dh9uxrpmf/image/upload/v1734738620/f6_qdpj8j.jpg" }
];

// Endpoint to get featured products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to KOK E-commerce Store');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
