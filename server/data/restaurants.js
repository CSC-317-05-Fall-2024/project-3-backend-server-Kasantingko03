// Restaurant Data from Project 2
let restaurantData = [
    {    id: 0,
        "name": "Pokemon Cafe Tokyo Nihonbashi",
        "phone": "+81 3-6262-3439",
        "address": "Chuo City, Japan",
        "photo": "/images/restaurant1.jpeg"
      },
      {  id: 1,
        "name": "Yakitori Abe",
        "phone": "+81 3-5422-9834",
        "address": "Miyuki House 1F, Kamiosaki 3-3-4, Shinagawa, Japan",
        "photo": "/images/restaurant2.jpeg"
      },
      {  id: 2,
        "name": "New Matsuzaka Roppongi",
        "phone": "+81 50-5494-6202",
        "address": "6 Chome−2−6 GEMS Roppongi 7F, Minato City, Japan",
        "photo": "/images/restaurant3.jpeg"
      },
      {  id: 3,
        "name": "Ichiran Ramen",
        "phone": "+81 50-1808-2529",
        "address": "3 Chome−34−11 Peace Bldg., B1F, Shinjuku City, Japan",
        "photo": "/images/restaurant4.jpeg"
      },
      {  id: 4,
        "name": "Uobei Goulabe",
        "phone": "+81 3-3462-0241",
        "address": "2 Chome−29−11 Central Bldg. 6, Shibuya City, Japan",
        "photo": "/images/restaurant5.jpeg"
      },
      {  id: 5,
        "name": "Zauo Fishing Restaurant",
        "phone": "+81 6-6212-5882",
        "address": "1 Chome−1−13 Sotetsu Grand Frésa, B1F, Osaka, Japan",
        "photo": "/images/restaurant6.jpeg"
      },
      {  id: 6,
        "name": "Nakatanidou",
        "phone": "+81 742-23-0141",
        "address": "Higashimuki Shopping Street, Nara, Japan",
        "photo": "/images/restaurant7.webp"
      },
      {  id: 7,
        "name": "Sushi no Midori Shibuya",
        "phone": "+81 3-5458-0002",
        "address": "1 Chome−12−3 Mark City East, 4F, Shibuya City, Japan",
        "photo": "/images/restaurant8.jpeg"
      },
      {  id: 8,
        "name": "Asakusa Gyukatsu (Beef Cutlet)",
        "phone": "+81 50-1722-0596",
        "address": "2 Chome−17−10 雷門上村ビル B1F, Taito City, Tokyo, Japan",
        "photo": "/images/restaurant9.jpeg"
      }
];

let lastId = restaurantData.length - 1;  // Adjust to reflect the correct last id

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};

// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const newEntry = {
        id: getNextId(),
        ...newRestaurant
    };
    restaurantData.push(newEntry);
    return newEntry;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    const restaurantToDelete = restaurantData.find(restaurant => restaurant.id === id);
    if (!restaurantToDelete) {
        throw new Error(`Restaurant with id ${id} not found!`);
    }
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
    return restaurantToDelete;
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
