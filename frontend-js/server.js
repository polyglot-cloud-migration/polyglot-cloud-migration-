const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Frontend is LIVE! Docker is working.</h1>');
});

// Port 3000 par listen karna zaroori hai
app.listen(3000, '0.0.0.0', () => {
  console.log('Frontend server is running on port 3000');
});