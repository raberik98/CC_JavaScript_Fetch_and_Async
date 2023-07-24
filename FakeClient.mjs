// import fetch from "node-fetch";

const fetch = (number) => {
  const data = {
        name: "Professor",
        skills: ["IT","Math","Communication"],
        age: 35
  }
  const error = "This is an error message!"

  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
        resolve({data:data, number: number})
    }
    else {
        reject(`\t${error} ${number}`)
    }
  });
}

// async function name() {
//   let resp = await fetch("http://localhost:3001/2")
//   //console.log(resp);
//   let data = await resp.json()
//   console.log(data);
//  // console.log(`The age key value pair is: ${data.age}`);
// }

async function requestData(number) {
  try {
    let data = await fetch(number)
    return data
  } catch (error) {
    console.log(error);
  }
}


// requestData(2)
// requestData(1)

// fetch(2).then((data) => {
//   console.log(data.data);
// })

// fetch(1).then((data) => {
//   console.log(data.data);
// }).catch((err) => {
//   console.log(err);
// })

// console.log("Log: " + 1);
// console.log("Log: " + 2);



async function overallFunction() {
  try {
    let data1 = await fetch(2)
    console.log("This is the result of the first fetch: ",data1.number);
    console.log("Log: " + 1);
    let data2 = await fetch(3)
    console.log("This is the result of the first fetch: ",data2.number);
    console.log("Log: " + 2);
  } catch (error) {
    console.log("Something went wrong during execution.", error);
  }
}
//overallFunction()

fetch(2).then((data1) => {
  console.log("This is the result of the first fetch: ",data1.number);
  console.log("Log: " + 1);
  fetch(3).then((data2) => {
    console.log("This is the result of the first fetch: ",data2.number);
    console.log("Log: " + 2);
  }).catch((err) => {
    console.log("Something went wrong during execution.", err);
  })
}).catch((err) => {
  console.log("Something went wrong during execution.", err);
})












// fetch("http://localhost:3001/16").then((resp) => {
//   resp.json().then((data) => {
//     console.log(data);
//   })
// })

// async function fetchSomeData() {
//   let resp = await fetch("http://localhost:3001/16")
//   let data = await resp.json()
//   console.log(data);
// }
// fetchSomeData()

























