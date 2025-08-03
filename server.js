const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Simple API endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'NovaKart API is running!' });
});

// Serve your HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NovaKart running on port ${PORT}`);
});
