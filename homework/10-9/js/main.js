var objPeople = [
    {
        username: "ARTG5330",
        password: "Fall 2021"
    }
]

function getInfo() {
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value; 
    
    for(var i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].
        password) {
        console.log(username + " Welcome to my Javascript Homework!")
        return
        }
    }
    console.log("Incorrect username or password")
}