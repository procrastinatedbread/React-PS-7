import { useState, useEffect } from "react";
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              {
                name: "Product 1",
                description: "This is the first product",
                price: 25.99,
                quantity: 10
              },
              {
                name: "Product 2",
                description: "This is the second product",
                price: 19.99,
                quantity: 15
              },
              {
                name: "Product 3",
                description: "This is the third product",
                price: 35.5,
                quantity: 5
              },
              {
                name: "Product 4",
                description: "This is the fourth product",
                price: 49.99,
                quantity: 20
              }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Product list not found."
        });
      }
    }, 2000);
  });
};

const SeventhComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const url = "https://example.com/api/products";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data.products);
    };
    innerFunction();
  }, []);
  const handleClick = () => {
    const sorted = usersData.sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  return (
    <>
      <h1>Products</h1>
      <button onClick={handleClick}>Sorted by Price</button>
      <ul>
        {sortedProducts.length === 0
          ? usersData.map(({ name, description, price, quantity }) => {
              return (
                <li>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <p>{price}</p>
                  <p>{quantity}</p>
                </li>
              );
            })
          : sortedProducts.map(({ name, description, price, quantity }) => {
              return (
                <li>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <p>{price}</p>
                  <p>{quantity}</p>
                </li>
              );
            })}
      </ul>
    </>
  );
};
export default SeventhComponent;
