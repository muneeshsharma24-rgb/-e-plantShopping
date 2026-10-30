
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantCategories = [

  {
    category: "Air Purifying Plants",

    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 20,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 25,
        image: "https://images.unsplash.com/photo-1597055181300-a8b4be6c7f3b"
      },
      {
        id: 3,
        name: "Spider Plant",
        price: 15,
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
      }
    ]
  },

  {
    category: "Succulents",

    plants: [
      {
        id: 4,
        name: "Aloe Vera",
        price: 12,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
      },
      {
        id: 5,
        name: "Jade Plant",
        price: 18,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
      },
      {
        id: 6,
        name: "Echeveria",
        price: 14,
        image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a"
      }
    ]
  },

  {
    category: "Flowering Plants",

    plants: [
      {
        id: 7,
        name: "Orchid",
        price: 30,
        image: "https://images.unsplash.com/photo-1566907225472-514a3cfe2f2b"
      },
      {
        id: 8,
        name: "Anthurium",
        price: 28,
        image: "https://images.unsplash.com/photo-1597055181300-a8b4be6c7f3b"
      },
      {
        id: 9,
        name: "Kalanchoe",
        price: 17,
        image: "https://images.unsplash.com/photo-1463320726281-696a485928c7"
      }
    ]
  }

];

function ProductList() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  return (

    <div className="product-list">

      <h1>Our Plants Collection</h1>

      {plantCategories.map(category => (

        <section key={category.category}>

          <h2>{category.category}</h2>

          <div className="products">

            {category.plants.map(plant => {

              const existingItem = cartItems.find(
                item => item.id === plant.id
              );

              const quantity = existingItem
                ? existingItem.quantity
                : 0;

              return (

                <div
                  className="product-card"
                  key={plant.id}
                >

                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="180"
                  />

                  <h3>{plant.name}</h3>

                  <p>Price: ${plant.price}</p>

                  <button
                    disabled={quantity > 0}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {quantity > 0
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
