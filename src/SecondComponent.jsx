// import { useState, useEffect } from "react";
// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/user") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: {
//             name: "John Doe",
//             email: "john.doe@example.com",
//             phone: "+1 555-555-5555",
//             address: {
//               street: "123 Main St",
//               suite: "Suite 456",
//               city: "Anytown",
//               zipcode: "12345"
//             }
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "User not found."
//         });
//       }
//     }, 2000);
//   });
// };

// const SecondComponent = () => {
//   const [usersData, setUsersData] = useState([]);
//   const [showAddress, setShowAddress] = useState(false);
//   const url = "https://example.com/api/user";
//   useEffect(() => {
//     const innerFunction = async () => {
//       const { data } = await fakeFetch(url);
//       setUsersData(data);
//     };
//     innerFunction();
//   }, []);

//   return (
//     <>
//       <h1>User</h1>
//       <p>Name:{usersData.name}</p>
//       <p>Email:{usersData.email}</p>
//       <p>Phone:{usersData.phone}</p>
//       <button
//         onClick={() => {
//           setShowAddress(!showAddress);
//         }}
//       >
//         {showAddress ? "Hide" : "Show"} address
//       </button>
//       {showAddress && (
//         <>
//           <p>{usersData.address.street}</p>
//           <p>{usersData.address.suite}</p>
//           <p>{usersData.address.city}</p>
//           <p>{usersData.address.zipcode}</p>
//         </>
//       )}
//     </>
//   );
// };
// export default SecondComponent;
