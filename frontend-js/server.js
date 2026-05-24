const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Ye line naye UI ko load karegi
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Frontend running at http://localhost:${port}`);
});