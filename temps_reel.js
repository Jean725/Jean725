function afficherHeure() {
    const actuelle = new Date();
    const heure = String(actuelle.getHours()).padStart(2, '0');
    const minutes = String(actuelle.getMinutes()).padStart(2, '0');
    const secondes = String(actuelle.getSeconds()).padStart(2, '0');
    const heureFormate = `${heure}:${minutes}:${secondes}`;

    document.getElementById('present').value = heureFormate;

    setTimeout(afficherHeure, 1000);

}

afficherHeure();