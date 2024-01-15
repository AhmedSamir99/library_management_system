const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const sequelize = require('./database.js');

app.use(express.json()); // Middleware to parse JSON bodies


const bookRoutes = require(path.join(__dirname, 'src', 'routes', 'bookRoutes'));


sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((error) => {
  console.error('Error syncing database: ', error);
});


app.use('/api', bookRoutes); // Mount the book routes


// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

