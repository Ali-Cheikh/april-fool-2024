
// Add event listener to the form submit button
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
    // Submit the form data asynchronously
    var formData = new FormData(this);
    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Redirect to the URL received from the server
        window.location.href = data.redirectUrl;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});