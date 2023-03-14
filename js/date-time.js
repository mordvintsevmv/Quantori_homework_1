const month_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const day_array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const getDate = () => {
    const current_date = new Date()

    const hours = current_date.getHours() > 9 ? `${current_date.getHours()}` : `0${current_date.getHours()}`
    const minutes = current_date.getMinutes() > 9 ? `${current_date.getMinutes()}` : `0${current_date.getMinutes()}`

    const day = current_date.getDay()
    const date = current_date.getDate()
    const month = current_date.getMonth()

    document.getElementById("iphone-time").innerHTML = `${hours}:${minutes}`

    document.getElementById("iphone-date").innerHTML = `${day_array[day]}, ${date} ${month_array[month]}`


    setTimeout(getDate, 1000)
}

getDate()