document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-status').textContent = "Thank you for contacting us, " + name + "! We will get back to you soon.";
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-status').textContent = "Please fill in all fields before submitting.";
    }
});
