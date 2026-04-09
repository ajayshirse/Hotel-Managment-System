fetch("http://localhost:8080/api/bookings")
.then(res => res.json())
.then(data => {

    console.log(data);

    const table = document.getElementById("bookingTable");
    table.innerHTML = "";

    data.forEach(b => {

        const row = `
        <tr>
            <td>${b.room}</td>
            <td>${b.checkIn}</td>
            <td>${b.checkOut}</td>
            <td>Confirmed</td>
            <td><button onclick="cancelBooking(${b.id})">Cancel</button></td>
        </tr>
        `;

        table.innerHTML += row;
    });
})
.catch(err => console.log(err));

function cancelBooking(id){

    if(confirm("Are you sure to cancel booking?")){

        fetch(`http://localhost:8080/api/booking/${id}`, {
            method: "DELETE"
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
            location.reload();
        })
        .catch(err => console.log(err));
    }
}