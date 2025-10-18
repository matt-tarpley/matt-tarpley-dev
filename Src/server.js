const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const homeRoutes = require('./routes/home');

//set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
//routes
app.use('/', homeRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});