const fetchData = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    // console.log(data)

    document.getElementById("advice-id").innerHTML = data.slip.id
    document.getElementById("advice").innerHTML = data.slip.advice
}

fetchData()