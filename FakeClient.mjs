async function firstFunct() {
    try {
        const resp = await fetch("http://localhost:3000/simulateError")
        

        if (resp.status == 200) {
            const data = await resp.json()
            console.log(data);
        }
        else {
            const data = await resp.json()
            console.log("None 200 status code");
            console.log(data);
        }
    
        // const resp2 = await fetch("http://localhost:3000/simulateError")
        // const data2 = await resp2.json()
        // console.log(data2);
    } catch (error) {
        console.log(error);
    }
}



async function main() {
    firstFunct()
    
    

    // fetch("http://localhost:3001/data").then((resp) => resp.json()
    // .then((data) => {
    //     console.log(data);
    // })).catch((err) => console.log(err))

    // console.log("asd123");
}

main()
