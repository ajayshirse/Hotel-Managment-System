document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault(); // 🔥 VERY IMPORTANT

    const user = {
        email: document.querySelector("input[placeholder='Enter Email']").value.trim(),
        password: document.querySelector("input[placeholder='Enter Password']").value.trim()
    };

    fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.text())
    .then(data => {
        alert(data);

        if(data === "Login Successful"){
            window.location.href = "./Rooms.html";
        }
    })
    .catch(err => {
        alert("Error: " + err);
    });
});