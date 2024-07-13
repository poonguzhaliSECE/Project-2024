document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // You can implement booking functionality here
    // For simplicity, I'm just displaying a confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
});
