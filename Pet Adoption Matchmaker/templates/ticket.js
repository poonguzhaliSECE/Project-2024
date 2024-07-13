document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Generate ticket details
    var location = document.getElementById('location').value;
    var passengers = document.getElementById('passengers').value;
    var discount = document.getElementById('discount').value;

    var ticketDetails = document.getElementById('ticketDetails');
    ticketDetails.innerHTML = `
        <h2>Ticket Details</h2>
        <p>Location: ${location}</p>
        <p>Passengers: ${passengers}</p>
        <p>Discount: ${discount ? discount + '%' : 'None'}</p>
    `;

    // Show notification
    var notification = document.getElementById('notification');
    notification.innerHTML = '<p>Ticket Generated Successfully!</p>';
});
