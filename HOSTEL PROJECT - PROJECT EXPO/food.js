document.addEventListener("DOMContentLoaded", function() {
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
      day.querySelector('h2').addEventListener('click', function() {
        day.classList.toggle('active');
      });
    });
  });
  