const fullname = "Sigma123@gmail.com";

let username = fullname.slice(0, fullname.indexOf("@"));
let extension = fullname.slice(fullname.indexOf("@")+ 1);

console.log(username);
console.log(extension);
