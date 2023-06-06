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

const EighthComponent = () => {
  const [productsData, setProductsData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const url = "https://example.com/api/products";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setProductsData(data.products);
    };
    innerFunction();
  }, []);
  const handleClick = () => {
    setSortedProducts([...productsData].sort((a, b) => a.price - b.price));
  };
  const handleClickTwo = () => {
    setSortedProducts([...productsData].sort((a, b) => b.price - a.price));
  };
  const handleClickThree = () => {
    setSortedProducts(productsData);
  };

  return (
    <>
      <button onClick={handleClick}>Low to High</button>
      <button onClick={handleClickTwo}>High to Low</button>
      <button onClick={handleClickThree}>Reset</button>
      {sortedProducts.length === 0
        ? productsData.map(({ name, description, price, quantity }) => {
            return (
              <>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{price}</p>
                <p>{quantity}</p>
              </>
            );
          })
        : sortedProducts.map(({ name, description, price, quantity }) => {
            return (
              <>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{price}</p>
                <p>{quantity}</p>
              </>
            );
          })}
    </>
  );
};
export default EighthComponent;
