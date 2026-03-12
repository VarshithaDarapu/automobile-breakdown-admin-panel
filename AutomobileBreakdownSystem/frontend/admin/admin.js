const API_BASE_URL = "https://automobile-breakdown-backend.onrender.com";
function login(){

let username = document.getElementById("username").value
let password = document.getElementById("password").value

fetch(API_BASE_URL + "/api/auth/login", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
username: username,
password: password
})

})

.then(response => response.json())

.then(data => {

if(data.token){

localStorage.setItem("token", data.token)
window.location="dashboard.html"

}else{

alert("Login failed")

}

})

.catch(error => {
console.error(error)
alert("Server error")
})

}
function deleteRow(button){

let row = button.parentNode.parentNode

row.remove()

}
function searchUser(){

let input = document.getElementById("search").value.toLowerCase()

let table = document.querySelector("table")

let rows = table.getElementsByTagName("tr")

for(let i=1;i<rows.length;i++){

let text = rows[i].innerText.toLowerCase()

if(text.includes(input)){
rows[i].style.display=""
}else{
rows[i].style.display="none"
}

}

}
function deleteRow(button){

if(confirm("Are you sure you want to delete this?")){

let row = button.parentNode.parentNode
row.remove()

}

}

function editProvider(button){

let row = button.parentNode.parentNode

let name = row.cells[1].innerText
let service = row.cells[2].innerText
let phone = row.cells[3].innerText

let newName = prompt("Edit Provider Name:", name)
let newService = prompt("Edit Service:", service)
let newPhone = prompt("Edit Phone:", phone)

if(newName){
row.cells[1].innerText = newName
row.cells[2].innerText = newService
row.cells[3].innerText = newPhone
}

}
function searchProvider(){

let input = document.getElementById("providerSearch").value.toLowerCase()

let table = document.querySelector("table")

let rows = table.getElementsByTagName("tr")

for(let i=1;i<rows.length;i++){

let text = rows[i].innerText.toLowerCase()

if(text.includes(input)){
rows[i].style.display=""
}else{
rows[i].style.display="none"
}

}


}

