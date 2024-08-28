const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware, um JSON-Daten aus dem Request-Body zu parsen
app.use(bodyParser.json());

// Route, um POST-Anfragen vom Kontaktformular zu empfangen
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Nachricht erhalten von ${name} (${email}): ${message}`);
    
    // Hier könntest du die Daten z.B. in einer Datenbank speichern oder eine E-Mail senden

    res.json({ success: true });
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});