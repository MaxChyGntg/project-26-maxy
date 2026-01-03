let login = true;
let username = window.prompt("Enter your username");
let password = window.prompt("enter your password");

do{
    username = window.prompt("Enter your username");
    password = window.prompt("enter your password");

    if(username === "Max123" && password === "Max321"){
        login = true;   
        console.log(`Welcome ${username}`);
    }
    else{
        console.log("You are not log in");
    }
}while(login);
