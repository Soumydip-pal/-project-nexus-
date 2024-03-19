document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("signupName").value.trim();
    var email = document.getElementById("signupEmail").value.trim();
    var password = document.getElementById("signupPassword").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // You can add more complex validation here, like checking email format or password strength.

    // If all validation passes, you can proceed with form submission.
    alert("Sign up successful!");
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // You can add code here to handle login authentication.
    alert("Login successful!");
});