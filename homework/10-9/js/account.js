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
            window.location.replace("https://i.gifer.com/origin/ab/ab3e8242a8421d7884bad5a19ad33d6d.gif");
        return
        }
    }
    console.log("Ups! Incorrect username or password :(")
}