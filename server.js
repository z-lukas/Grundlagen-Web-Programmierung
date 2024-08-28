const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Korrigiert den Operator von "|" zu "||"

// Middleware, um JSON-Daten aus dem Request-Body zu parsen
app.use(bodyParser.json());

// Middleware, um statische Dateien bereitzustellen
app.use(express.static(path.join(__dirname, 'public'))); // Setzt voraus, dass deine statischen Dateien im "public"-Ordner liegen

// Route für die Startseite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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
