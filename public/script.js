document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Daten sammeln
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Senden an den Server
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('Danke für Ihre Nachricht!');
        } else {
            alert('Es gab ein Problem beim Senden Ihrer Nachricht.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Es gab einen Fehler beim Senden Ihrer Nachricht.');
    });
});