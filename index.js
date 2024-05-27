document.addEventListener('DOMContentLoaded', function () {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 10,
        speedAsDuration: true
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (name && email && message) {
            alert('Thank you for your message!');
            this.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
