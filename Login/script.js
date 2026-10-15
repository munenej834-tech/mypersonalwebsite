function createAccount() {
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;
    let email = document.getElementById("email").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account created successfully");
    window.location.href = "login.html";
}


function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    if (username == savedUsername && password == savedPassword) {
        alert("Login successful");
        window.location.href = "logout.html";
    } else {
        alert("Invalid username or password");
    }
}


function logout() {
    alert("You have logged out");
    window.location.href = "login.html";
}