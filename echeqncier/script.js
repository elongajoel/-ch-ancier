document.getElementById('credit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const months = parseInt(document.getElementById('months').value);
    
    // Principal fixe chaque mois
    const principalFixe = amount / months;
    let capitalRestant = amount;
    let scheduleRows = '';

    for (let i = 1; i <= months; i++) {
        const interets = capitalRestant * rate;
        const mensualite = principalFixe + interets;
        const parSemaine = mensualite / 4;
        const parJour = mensualite / 30;
        capitalRestant -= principalFixe;
        scheduleRows += `<tr>
            <td>${i}</td>
            <td>${mensualite.toFixed(2)}</td>
            <td>${parSemaine.toFixed(2)}</td>
            <td>${parJour.toFixed(2)}</td>
            <td>${interets.toFixed(2)}</td>
            <td>${principalFixe.toFixed(2)}</td>
            <td>${capitalRestant > 0 ? capitalRestant.toFixed(2) : '0.00'}</td>
        </tr>`;
    }

    document.querySelector('#schedule-table tbody').innerHTML = scheduleRows;
    document.getElementById('schedule-section').style.display = 'block';
}); 