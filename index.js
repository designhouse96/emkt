const express = require('express');
const app = express();
app.use(express.json());

app.post('/offers', (req, res) => {
  const offers = req.body.offers;
  // Logic to parse and store offers
  res.send('Offers received and processed');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
