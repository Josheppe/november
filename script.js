function updateCountdown() {
    const targetDate = new Date('2024-11-05T00:00:00');
    const now = new Date();

    const difference = targetDate - now;

    // Berechne Tage, Stunden, Minuten, Sekunden und Millisekunden
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(difference % 1000); // Millisekunden

    // Aktualisiere die HTML-Elemente
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('milliseconds').textContent = milliseconds;
}

// Update die Countdown-Anzeige jede Millisekunde
setInterval(updateCountdown, 1);
