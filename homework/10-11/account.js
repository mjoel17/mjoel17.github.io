var objPeople = [
    {
        username: "78537853785",
        password: "37953795379"
    }
]

function getInfo() {
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value; 
    
    for(var i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].
        password) {
            window.location.replace("https://c.tenor.com/tbCuJhOJUW4AAAAC/im-cyn-scary.gif");
        return
        }
    }
    console.log("Ups! Incorrect username or password :(")
}