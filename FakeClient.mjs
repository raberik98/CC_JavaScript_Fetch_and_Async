// import fetch from "node-fetch";

// fetch("http://localhost:3001/2").then((response) => {
//   response.json().then((data) => {console.log(data);})
// }).catch((error) => {
//   console.log("Error");
// })


const fetchSimulation = (number) => {
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


async function allTheFunctionsAreHere() {
  let a =  fetchSimulation(2)
  let b =  fetchSimulation(4)
  let c =  fetchSimulation(6)
  let data = await Promise.all([a,b,c])

  let result = data[0].number + data[1].number + data[2].number
  console.log("The result is: " + result);

}
allTheFunctionsAreHere()

fetchSimulation(2).then((data1) => {
  fetchSimulation(4).then((data2) => {
    fetchSimulation(6).then((data3) => {
      let result = data1.number + data2.number + data3.number
      console.log("The result is: " + result);
    })
  })
})

