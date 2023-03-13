import fetch from "node-fetch";


fetch("http://localhost:3001/4").then((response) => {
  response.json().then((data) => {console.log(data);})
})








// const fakeFetchData = (number) => {
//   const data = {
//         name: "Professor",
//         skills: ["IT","Math","Communication"],
//         age: 35
//   }
//   const error = "This is an error message!"

//   return new Promise((resolve, reject) => {
//     if (number % 2 == 0) {
//         resolve({data:data, number: number})
//     }
//     else {
//         reject(`\t${error} ${number}`)
//     }
//   });
// }