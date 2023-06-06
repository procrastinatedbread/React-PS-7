import { useState, useEffect } from "react";
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              name: "John Doe",
              email: "john@example.com",
              website: "example.com",
              company: "ABC Inc"
            },
            {
              name: "Jane Doe",
              email: "jane@example.com",
              website: "example.com",
              company: "XYZ Corp"
            },
            {
              name: "Bob Smith",
              email: "bob@example.com",
              website: "example.com",
              company: "ABC Inc"
            },
            {
              name: "Alice Brown",
              email: "alice@example.com",
              website: "example.com",
              company: "ACME Corp"
            },
            {
              name: "Charlie Green",
              email: "charlie@example.com",
              website: "example.com",
              company: "XYZ Corp"
            }
          ]
        });
      } else {
        reject({
          status: 404,
          message: "Users list not found."
        });
      }
    }, 2000);
  });
};

const FourthComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const [companiesFilter, setCompaniesFilter] = useState("all");
  const url = "https://example.com/api/users";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data);
    };
    innerFunction();
  }, []);
  const handleOnChange = (e) => {
    const corporation = e.target.value;
    setCompaniesFilter(corporation);
  };
  const filteredMovies =
    companiesFilter === "all"
      ? usersData
      : usersData.filter((item) => item.company === companiesFilter);

  return (
    <>
      <h1>Users</h1>
      <label htmlFor="companies">Filter by Company:</label>
      <select name="companies" onChange={handleOnChange}>
        <option value="all">All Companies</option>
        <option value="ABC Inc">ABC Inc</option>
        <option value="ACME Corp">ACME Corp</option>
        <option value="XYZ Corp">XYZ Corp</option>
      </select>
      <ul>
        {filteredMovies.map(({ name, email, website, company }) => {
          return (
            <li>
              <p>{name}</p>
              <p>{email}</p>
              <p>{website}</p>
              <p>{company}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FourthComponent;
