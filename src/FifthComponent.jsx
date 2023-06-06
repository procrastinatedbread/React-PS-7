import { useState, useEffect } from "react";
const fakeFetch = () => {
  const quotes = [
    {
      content: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      content:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein"
    },
    {
      content: "So many books, so little time.",
      author: "Frank Zappa"
    },
    {
      content: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero"
    },
    {
      content:
        "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    }
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      resolve(randomQuote);
    }, 1000);
  });
};

const FifthComponent = () => {
  const [usersData, setUsersData] = useState([]);

  const innerFunction = async () => {
    const response = await fakeFetch();
    setUsersData(response);
  };

  useEffect(() => {
    innerFunction();
  }, []);
  const handleOnClick = () => innerFunction();
  return (
    <>
      <h1>"{usersData.content}"</h1>
      <p>-{usersData.author}</p>
      <button onClick={handleOnClick}>New Quote</button>
    </>
  );
};
export default FifthComponent;
