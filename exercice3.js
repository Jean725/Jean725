document.getElementById('dateFormulaire').addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.getElementById('today').value;

  const dates = input.split('-');

  // Detection du jour, mois, année à partir de la date saisie
  if (dates.length === 3) {
    const jour = parseInt(dates[0], 10);
    const mois = parseInt(dates[1], 10) - 1; // Mois en JS commence à 0
    const annee = parseInt(dates[2], 10);

    // Affichage de : jour, mois, année 
    const resultat3 = document.getElementById('resultatAnnee');
    resultat3.textContent = `Année : ${annee}`;
    const resultat2 = document.getElementById('resultatMois');
    resultat2.textContent = `Mois : ${mois + 1}`;
    const resultat = document.getElementById('resultatJour');
    resultat.textContent = `Jour : ${jour}`;

   
    // Création de la date saisie
    const dateSaisie = new Date(annee, mois, jour);

    if (isNaN(dateSaisie)) {
      alert('Date invalide, veuillez vérifier le format et les valeurs.');
      return;
    }

    // Date actuelle à 00:00:00 
    const dateActuelle = new Date();
    dateActuelle.setHours(0, 0, 0, 0);

    // Différence en milliseconds
    const diffMs = dateActuelle - dateSaisie;

    // Conversion en jours
    const diffJours = Math.round(diffMs / (1000 * 60 * 60 * 24));

    // Affichage de la différence
    const resultatDiff = document.getElementById('resultatDifference');
    if(diffJours === 0){
      resultatDiff.textContent = `La date saisie est aujourd'hui.`;
    } else if(diffJours > 0) {
      resultatDiff.textContent = `La date saisie est il y a ${diffJours} jour(s).`;
    } else {
      resultatDiff.textContent = `La date saisie est dans ${-diffJours} jour(s).`;
    }

  } else {
    alert('Veuillez saisir la date au format JJ-MM-AAAA');
  }
});
