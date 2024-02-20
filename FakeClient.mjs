// function main() {
//     fetch("http://localhost:3000/404").then((resp) => {
//         if (resp.status == 200) {
//             console.log("Hurray");
//             resp.json().then((body) => {
//                 return console.log(body);
//             }).catch((err2) => {
//                 return console.log(err2);
//             })
//         }

//         console.log("Something went wrong: " + resp.status);
//     }).catch((err) => {
//         console.log(err);
//     })

// }

async function fetchOnce(url, number) {
    try {
        const resp = await fetch(url)
        console.log(number + " " + resp.status);
    } catch (error) {
        console.log(number + " " + error);
    }
}

async function main() {
    await fetchOnce("http://localhost:3000/data", 1)
    await fetchOnce("http://localhost:3000/404", 2)
    await fetchOnce("http://localhost:3000/simulateError", 3)
}


async function wrapper() {
    console.log("Start");
    await main()
    console.log("End");
}

wrapper()

