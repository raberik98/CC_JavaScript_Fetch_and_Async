// fetch("http://localhost:3000/3")
//   .then((res) => res.json())
//   .then((data) => { console.log(data); })
//   .catch((err) => { console.log(err); })

// async function getData(url) {
//   let resp = await fetch(url)
//   let data = await resp.json()
//   return data
// }

// async function sumOfTwoNumbers(a,b) {
//   let c = a + b
//   console.log("Ok this is just another function result is: ",c);
// }

// async function main() {
//  let data = await getData("http://localhost:3000/2")
//  sumOfTwoNumbers(data.numbers[0], data.numbers[1])
//  sumOfTwoNumbers(data.numbers[2], data.numbers[3])
//  sumOfTwoNumbers(data.numbers[4], data.numbers[5])
//  sumOfTwoNumbers(data.numbers[6], data.numbers[7])
// }

// fetch("http://localhost:3000/2")
//   .then((resp1) => resp1.json())
//   .then((data1) => {
//     console.log(data1);
//     fetch("http://localhost:3000/2")
//       .then((resp2) => resp2.json())
//       .then((data2) => {
//         console.log(data2);
//         fetch("http://localhost:3000/1")
//           .then((resp3) => resp3.json())
//           .then((data3) => {
//             console.log(data3);
//             console.log("Ok I am finished");
//           })
//           .catch((err3) => {
//             console.log(err3);
//             console.log("I got stuck at fetch 3");
//           });
//       })
//       .catch((err2) => {
//         console.log(err2);
//         console.log("I got stuck at fetch 2");
//       });
//   })
//   .catch((err1) => {
//     console.log(err1);
//     console.log("I got stuck at fetch 1");
//   });

async function fetchDataAndLog(url) {
  return fetch(url).then((resp) => resp.json())
}

async function main() {
  let data = await fetchDataAndLog("http://localhost:3000/2")
  console.log(data);
}
main()

// async function main() {
//   try {
//     let resp1 = await fetch("http://localhost:3000/2")
//     let data1  = await resp1.json()
//     console.log(data1);

//     let resp2 = await fetch("http://localhost:3000/2")
//     let data2  = await resp2.json()
//     console.log(data2);

//     let resp3 = await fetch("http://localhost:3000/1")
//     let data3  = await resp3.json()
//     console.error(data3);

//   } catch (error) {
//     console.log("Ok error happened!");
//     console.error(error);
//   }
// }

// main()
