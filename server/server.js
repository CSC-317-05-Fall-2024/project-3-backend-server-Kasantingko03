// Add your server code here.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRestaurants, getRestaurant } from './data/restaurants.js';
import apiRouter from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine and define the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the API router
app.use('/api', apiRouter);


// Render restaurant-details.ejs when accessing /restaurants/:id
// Render restaurants.ejs when accessing /restaurants
app.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants(); // Fetch restaurants data from your data module
    if (restaurants) {
        res.render('restaurants', { restaurants }); // Pass the data to the EJS template
    } else {
        res.status(404).send('No restaurants found');
    }
});


// Render attraction.html when accessing /attractions
app.get('/attractions', (req, res) => {
    console.log('Accessing /attractions route'); // Debug log
    res.sendFile(path.join(__dirname, 'public/attraction.html')); 
});

// Render new-restaurant-form.html when accessing /newRestaurant
app.get('/newRestaurant', (req, res) => {
    console.log('Accessing /newRestaurant route'); 
    res.sendFile(path.join(__dirname, 'public/new-restaurant-form.html')); 
});
app.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    console.log('Fetched Restaurants:', restaurants); 
    res.render('restaurants', { restaurants });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
