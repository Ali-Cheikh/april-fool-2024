
// Add event listener to the form submit button
document.getElementById("contact-form").addEventListener("submit", function(event) {
    Swal.fire({
        title: '3aychik 3al mot de pass',
        titleColor: 'red',
        text: 'kithbit avril 🤣🤣🤣🤣😂',
        icon: 'check',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
            Swal.showLoading();
        }
    });
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