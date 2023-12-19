// app.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON data
app.use(express.json());

// POST request handler
app.post('/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

