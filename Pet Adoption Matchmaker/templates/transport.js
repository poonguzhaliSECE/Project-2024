document.addEventListener('DOMContentLoaded', () => {
    const autoButton = document.getElementById('autoButton');
    const collegeBusButton = document.getElementById('collegeBusButton');
    const ticketBookingModal = document.getElementById('ticketBookingModal');
    const modalClose = document.querySelector('.close');

    autoButton.addEventListener('click', () => {
        // Implement auto button functionality here
    });

    collegeBusButton.addEventListener('click', () => {
        ticketBookingModal.style.display = 'block';
    });

    modalClose.addEventListener('click', () => {
        ticketBookingModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == ticketBookingModal) {
            ticketBookingModal.style.display = 'none';
        }
    });

    const ticketForm = document.getElementById('ticket-form');
    ticketForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Implement ticket booking form submission here
    });
});
