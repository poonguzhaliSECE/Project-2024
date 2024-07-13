document.addEventListener("DOMContentLoaded", function() {
    const days = document.querySelectorAll('.menu-day');

    days.forEach(day => {
        day.addEventListener('click', () => {
            const meals = day.querySelectorAll('.meal');
            meals.forEach(meal => {
                meal.classList.toggle('hidden');
            });
        });
    });
});