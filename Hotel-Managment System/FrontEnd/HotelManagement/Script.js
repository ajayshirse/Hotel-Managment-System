document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    const user = {
        name: document.querySelector("input[placeholder='Full Name']").value,
        email: document.querySelector("input[placeholder='Email Address']").value,
        phone: document.querySelector("input[placeholder='Phone Number']").value,
        password: document.querySelector("input[placeholder='Password']").value
    };

    fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        alert("Registered Successfully 🚀");
        window.location.href = "Login.html";
    })
    .catch(err => {
        alert("Error: " + err);
    });
});