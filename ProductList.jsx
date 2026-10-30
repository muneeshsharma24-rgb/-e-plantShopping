
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

export function Navbar({ onHome, onPlants, onCart }) {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <h2>🌿 Paradise Nursery</h2>

      <ul>
        <li>
          <button onClick={onHome}>Home</button>
        </li>

        <li>
          <button onClick={onPlants}>Plants</button>
        </li>

        <li>
          <button onClick={onCart}>
            🛒 Cart ({cartCount})
          </button>
        </li>
      </ul>
    </nav>
  );
}

const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 20,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500"
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 25,
        image: "https://images.unsplash.com/photo-1597055181300-a8b4be6c7f3b?w=500"
      },
      {
        id: 3,
        name: "Spider Plant",
        price: 15,
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500"
      },
      {
        id: 4,
        name: "Areca Palm",
        price: 30,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500"
      },
      {
        id: 5,
        name: "Boston Fern",
        price: 22,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500"
      },
      {
        id: 6,
        name: "Rubber Plant",
        price: 28,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500"
      }
    ]
  },

  {
    category: "Succulents",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 12,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500"
      },
      {
        id: 8,
        name: "Jade Plant",
        price: 18,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500"
      },
      {
        id: 9,
        name: "Echeveria",
        price: 14,
        image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500"
      },
      {
        id: 10,
        name: "Haworthia",
        price: 16,
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500"
      },
      {
        id: 11,
        name: "Zebra Plant",
        price: 19,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500"
      },
      {
        id: 12,
        name: "String of Pearls",
        price: 21,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500"
      }
    ]
  },

  {
    category: "Flowering Plants",
    plants: [
      {
        id: 13,
        name: "Orchid",
        price: 30,
        image: "https://images.unsplash.com/photo-1566907225472-514a3cfe2f2b?w=500"
      },
      {
        id: 14,
        name: "Anthurium",
        price: 28,
        image: "https://images.unsplash.com/photo-1597055181300-a8b4be6c7f3b?w=500"
      },
      {
        id: 15,
        name: "Kalanchoe",
        price: 17,
        image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=500"
      },
      {
        id: 16,
        name: "Rose Plant",
        price: 24,
        image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=500"
      },
      {
        id: 17,
        name: "Hibiscus",
        price: 26,
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500"
      },
      {
        id: 18,
        name: "African Violet",
        price: 20,
        image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500"
      }
    ]
  }
];

function ProductList({ onHome, onCart }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">

      <Navbar
        onHome={onHome}
        onPlants={() => {}}
        onCart={onCart}
      />

      <div className="section-heading">
        <h1>Our Plants Collection</h1>
        <p>Find the perfect plants for your home.</p>
      </div>

      {plantCategories.map((category) => (

        <section
          className="category-section"
          key={category.category}
        >

          <h2>{category.category}</h2>

          <div className="products">

            {category.plants.map((plant) => {

              const addedToCart = cartItems.some(
                (item) => item.id === plant.id
              );

              return (
                <div
                  className="product-card"
                  key={plant.id}
                >

                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />

                  <h3>{plant.name}</h3>

                  <p className="product-price">
                    Price: ${plant.price.toFixed(2)}
                  </p>

                  <button
                    disabled={addedToCart}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedToCart
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>

                </div>
              );
            })}

          </div>
        </section>
      ))}

    </div>
  );
}

export default ProductList;
