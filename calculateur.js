document.getElementById('loan-form').addEventListener('submit', function(e) {
            e.preventDefault();  
            
            // Récupération des valeurs saisies
            const amount = parseFloat(document.getElementById('amount').value);
            const annualInterestRate = parseFloat(document.getElementById('interest').value);
            const years = parseInt(document.getElementById('years').value);

            // Vérifications des erreurs
            if (isNaN(amount) || amount <= 0) {
                alert("Veuillez saisir un montant de prêt valide et supérieur à 0.");
                return;
            }
            if (isNaN(annualInterestRate) || annualInterestRate < 0) {
                alert("Veuillez saisir un taux d'intérêt annuel valide (>= 0).");
                return;
            }
            if (isNaN(years) || years <= 0) {
                alert("Veuillez saisir une durée de prêt valide en années (> 0).");
                return;
            }

            // Calcul mensuel
            const monthlyInterestRate = annualInterestRate / 100 / 12;
            const numberOfPayments = years * 12;

            let monthlyPayment;

            if(monthlyInterestRate === 0) {
                // Si taux d'intérêt = 0
                monthlyPayment = amount / numberOfPayments;
            } else {
                // Formule de calcul du paiement mensuel
                monthlyPayment = amount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
            }

            // Affichage du résultat
            document.getElementById('resultat').textContent = 
                `Paiement mensuel : ${monthlyPayment.toFixed(2)} XOF`;
        });