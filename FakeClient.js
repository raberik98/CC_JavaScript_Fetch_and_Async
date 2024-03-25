const URL = "http://localhost:3000"

fetch(URL).then((resp) => {
    resp.json().then((data) => console.log(data))
}).catch((err) => console.log(err))

async function doSomething(string) {
    const data = await fetch(URL).then((resp) => resp.json())
    return string
}

async function main() {
    try {
        let [ num1, num2 ] = await Promise.all([doSomething(1), doSomething(2)])
        let num3 = num1 + num2
        let num4 = await doSomething(num3)
        console.log(num4);
    } catch (error) {
        alert(error);
    }
}
main()