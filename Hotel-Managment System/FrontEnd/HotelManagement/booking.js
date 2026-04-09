const params = new URLSearchParams(window.location.search);

const room = params.get("room");
const price = params.get("price");

// Debug (optional)
console.log(room, price);

document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();

    const booking = {
        name: document.querySelector("input[placeholder='Full Name']").value,
        email: document.querySelector("input[placeholder='Email']").value,
        room: room,
        price: price,
        checkIn: document.querySelectorAll("input[type='date']")[0].value,
        checkOut: document.querySelectorAll("input[type='date']")[1].value
    };

    fetch("http://localhost:8080/api/booking", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        alert("Booking Confirmed ✅");
        window.location.href = "My_Bookings.html";
    })
    .catch(err => {
        alert("Error: " + err);
    });
});

function cancelBooking(id){

    if(confirm("Are you sure to cancel booking?")){

        fetch(`http://localhost:8080/api/booking/${id}`, {
            method: "DELETE"
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
            location.reload();
        });
    }
}