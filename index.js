var cities = []
var list = document.getElementById("list")

function addToList(){
    var city = document.getElementById("input-box")
    if (city.value === ''){
        alert("Please Enter City Name")
        return
    }
    cities.push(city.value)
    list.innerHTML= ''
    city.value= ''
    showList()
    console.log(cities)
}

function showList(){
    list.innerHTML= '';
    for ( var i = 0; i < cities.length; i++){
        list.innerHTML += `<li> ${cities[i]} <button onclick="deleteItem(${i})">Delete</button> </li>`
    }
}

function deleteItem(index){
    console.log()
    cities.splice(index, 1)
    console.log(cities)
    showList()
}


