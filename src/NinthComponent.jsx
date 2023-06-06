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
              { name: "Color Pencils", price: 50, quantity: 40, rating: 4.5 },
              { name: "Sketchpens", price: 110, quantity: 20, rating: 3.8 },
              { name: "Eraser", price: 20, quantity: 20, rating: 4.2 },
              { name: "Sharpener", price: 22, quantity: 30, rating: 4.7 }
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

const NinthComponent = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const url = "https://example.com/api/products";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setProductsData(data.products);
    };
    innerFunction();
  }, []);
  const handleChange = (e) => {
    setSearchtext(e.target.value);
  };
  const sortedProducts = productsData.sort((a, b) => b.rating - a.rating);
  const filteredProductData = sortedProducts.filter((item) =>
    item.name.toLowerCase().includes(searchText.trim())
  );

  return (
    <>
      <input type="text" onChange={handleChange} />
      {filteredProductData.map(({ name, price, quantity, rating }) => {
        return (
          <div
            style={{
              border: "1px solid black"
            }}
          >
            <p>
              {name}--------------------- Rating:{rating}
            </p>
            <p> Price: ${price}</p>
            <p>Quantity: {quantity}</p>
          </div>
        );
      })}
    </>
  );
};
export default NinthComponent;
