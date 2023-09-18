import fetch from "node-fetch";

// const fetch = (number) => {
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



// fetch(2).then((data) => {
//   console.log("SUCCESS", data.number);
// }).catch((err) => {
//   console.log("ERROR",err.number);
// })
// fetch(3).then((data) => {
//   console.log("SUCCESS", data.number);
// }).catch((err) => {
//   console.log("ERROR",err);
// })
// fetch(4).then((data) => {
//   console.log("SUCCESS", data.number);
// }).catch((err) => {
//   console.log("ERROR",err.number);
// })


// fetch(2).then((data) => {
//   console.log("SUCCESS", data.number)
//   fetch(3).then((data1) => {
//     console.log("SUCCESS", data1.number)
//     fetch((data2) => {
//       console.log("SUCCESS", data2.number)
//     }).catch((err2) =>{
//       console.log("ERROR",err2)
//     })
//   }).catch((err1) => {
//     console.log("ERROR",err1)
//   })
// })
// .catch((err) => { console.log("ERROR",err)})

// async function fetchData() {

//     try {
//       let data = await fetch(2)
//       console.log("SUCCESS", data.number);
//     } catch (error) {
//       console.log("ERROR",error)
//     }

//     try {
//       let data = await fetch(3)
//       console.log("SUCCESS", data.number);
//     } catch (error) {
//       console.log("ERROR",error)
//     }

//     try {
//       let data = await fetch(4)
//       console.log("SUCCESS", data.number);
//     } catch (error) {
//       console.log("ERROR",error)
//     }
  
// }

// fetchData()

// async function fetchAPIOne() {
//   return fetch("http://localhost:3001/2").then((resp) => (resp.json()))
// }

// async function fetchAPITwo() {
//   return fetch("http://localhost:3001/4").then((resp) => (resp.json()))
// }

// async function fetchAPIThree() {
//   return fetch("http://localhost:3001/5").then((resp) => (resp.json()))
// }

// async function fetchAllData() {
//   let data1 = await fetchAPIOne()
//   let data2 = await fetchAPITwo()
//   let data3 = await fetchAPIThree()

//   console.log(data1);
//   console.log(data2);
//   console.log(data3);

// }

// fetchAllData()


// async function fetchAllData() {
//   let starterDataJson = await fetch()
//   let starterData = await starterDataJson.json()
//   return starterData
// }


// async function transformData(starterData) {

//   let result = []

//   for (const key in starterData) {
//     result.push(starterData[key])
//   }
//   return result
// }

// function getNerbyCountries(countryObject, countryShortName) {
//   return countryObject[countryShortName].borders
// }


// async function main() {
//   let objectData = await fetchAllData()
//   let data = transformData(objectData)

//   let affriceNeighbor = getNerbyCountries(objectData, "af")
//   console.log(affriceNeighbor);

// }

// main()





// fetch("http://localhost:3001/3").then((resp) => (  resp.json() )).then((data) => {
//   console.log(data)
// }).catch((err) => {
//   console.log("catchj branch");
//   console.log(err);
// })

// async function fetchData(string) {
//   try {
//     let resp = await fetch(string)
//     let data = await resp.json()
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData("http://localhost:3001/2")












