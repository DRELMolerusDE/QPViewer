// Données des projets pour chaque zone (Nord, Sud, Centre)
const projectsData = {
    'Nord': [
        { association: 'OCCE FOUSSON', projet: 'Apprendre autrement avec les outils de la co-éducation', montant: 3000, quartier: 'CAMP', pourcentage: 10 },
        { association: 'ASSOCIATION SPORTIVE ALPHONSE DAUDET', projet: 'Trions nos déchets, ils seront recyclés : un grand geste pour l’environnement !', montant: 3000, quartier: 'CN', pourcentage: 10 },
        { association: 'OCCE MATERNELLE JULES VALLES', projet: 'CREATIO ! Un projet pour les élèves « en panne »… de langage', montant: 3000, quartier: 'CN', pourcentage: 10 },
        { association: 'OCCE MATERNELLE A. DAUDET', projet: 'Apprendre à gérer ses émotions par le jeu', montant: 2800, quartier: 'CN', pourcentage: 10 },
        { association: 'LES IRREDUCTIBLES DE JULES VALLES', projet: 'Culture, sport, vivre ensemble', montant: 3000, quartier: 'CN', pourcentage: 10 },
        { association: 'COLLEGE ALBERT CAMUS', projet: 'Décrochage scolaire et fracture numériques', montant: 2000, quartier: 'CN', pourcentage: 10 },
        { association: 'COLLEGE ALBERT CAMUS', projet: 'Alternative aux écrans', montant: 4000, quartier: 'CN', pourcentage: 10 },
        { association: 'COLLEGE ALBERT CAMUS', projet: 'On Time', montant: 2500, quartier: 'CN', pourcentage: 10 },
        { association: 'COLLEGE ALBERT CAMUS', projet: 'Améliorer le climat scolaire', montant: 6000, quartier: 'CN', pourcentage: 10 },
        { association: 'ASSOCIATION SPORTIVE A DAUDET', projet: 'La semaine du livre', montant: 3500, quartier: 'CN', pourcentage: 10 },
        { association: 'OCCE ECOLE ELEMENTAIRE PHILIPPE ARBOS', projet: 'Apprendre ensemble dans une classe à ciel ouvert', montant: 3000, quartier: 'CN', pourcentage: 10 },
        { association: 'OCCE ECOLE MATERNELLE P ARBOS', projet: 'Premières découvertes d’environnement nouveau et non familier', montant: 2250, quartier: 'CN', pourcentage: 10 },
        { association: 'ASSOCIATION PARENT D’ÉLÈVE ALPHONSE DAUDET', projet: 'Manger sain bouger bien', montant: 1500, quartier: 'CN', pourcentage: 10 },
        { association: 'OCCE DAUDET MATERNELLE', projet: 'Développer le langage et s’ouvrir au monde à travers les contes', montant: 4800, quartier: 'CN', pourcentage: 10 },
        { association: 'OCCE JULES VERNES', projet: 'Tous en bonne santé', montant: 3000, quartier: 'VE', pourcentage: 10 },
        { association: 'OCCE ELEMENTAIRE J VERNE', projet: 'Tous à la découverte du PDD', montant: 3100, quartier: 'VE', pourcentage: 10 },
        { association: 'AMICALE LAIQUE J VERNE', projet: 'Mise en place d’activités Péri et extra-scolaires', montant: 7000, quartier: 'VE', pourcentage: 10 },
        { association: 'LES CONQUERANTS ROMAIN RO’LAND', projet: 'Maracatu des Vergnes', montant: 2800, quartier: 'VE', pourcentage: 10 },
        { association: 'ASSOCIATION DES ELEVES DE L’ECOLE MATERNELLE Romain Rolland', projet: 'Percussions en maternelle', montant: 3000, quartier: 'VE', pourcentage: 10 },
        { association: 'OCCE MATERNELLE CHARLES PERRAULT', projet: 'Langue orale en maternelle', montant: 6000, quartier: 'GA', pourcentage: 10 },
        { association: 'GAUTHIERE CULTURE ET LOISIRS (LA) ECOLE CHARLES PERRAULT', projet: 'Pour une activité périscolaire éducative (danse, théâtre, musique et ludothèque)', montant: 4000, quartier: 'GA', pourcentage: 10 },
        { association: 'GAUTHIERE CULTURE ET LOISIRS (LA) ECOLE CHALRES PERRAULT', projet: 'Pour une culture scolaire à partager', montant: 3000, quartier: 'GA', pourcentage: 10 },
        { association: 'GAUTHIERE CULTURE ET LOISIRS (LA) ECOLE CHARLES PERRAULT', projet: 'Une réussite culturelle pour une réussite éducative', montant: 3500, quartier: 'GA', pourcentage: 10 },
        { association: 'OCCE ECOLE ELEMENTAIRE CHARLES PERRAULT', projet: 'Développer les sciences et les arts à l’école', montant: 3000, quartier: 'GA', pourcentage: 10 },
        { association: 'COLLEGE LA CHARME', projet: 'Vivre ensemble, il était une fois la différence', montant: 3000, quartier: 'GA', pourcentage: 10 }
    ],
    'Sud': [
        { association: 'OCCE ELEMENTAIRE JEAN JAURES', projet: 'L’eau dans la ville l’eau dans la nature', montant: 3000, quartier: 'SJ', pourcentage: 25 },
        { association: 'AMIS DE L’ÉCOLE MATERNELLE JEAN MACÉ', projet: 'la nature au fil des saisons', montant: 2400, quartier: 'SJ', pourcentage: 25 },
        { association: 'AMIS DE L\'ECOLE MATERNELLE JEAN MACE', projet: 'La danse à l\'école', montant: 1000, quartier: 'SJ', pourcentage: 25 },
        { association: 'COLLEGE CHARLES BAUDELAIRE', projet: 'Classes ENVOL 5ème et 4ème', montant: 3000, quartier: 'SJ', pourcentage: 25 },
        { association: 'COLLEGE CHARLES BAUDELAIRE', projet: '3ème éloquence', montant: 1500, quartier: 'SJ', pourcentage: 25 },
        { association: 'COLLEGE CHARLES BAUDELAIRE', projet: '5ème théâtre', montant: 2000, quartier: 'SJ', pourcentage: 25 },
        { association: 'COLLEGE CHARLES BAUDELAIRE', projet: 'Un chemin de la salle à la nature (UPE2A)', montant: 2000, quartier: 'SJ', pourcentage: 25 },
        { association: 'OCCE -  ECOLE MATERNELLE JEAN JAURES', projet: 'Paroles en scènes', montant: 2700, quartier: 'SJ', pourcentage: 25 },
        { association: 'LES AMIS DE L’ÉCOLE MATERNELLE JEAN MACE', projet: 'Oralité et jeux', montant: 2000, quartier: 'SJ', pourcentage: 25 },
        { association: 'COLLEGE CHARLES BAUDELAIRE', projet: 'Classe de 6ème pratiques culturelles et artistiques', montant: 2000, quartier: 'SJ', pourcentage: 25 },
        { association: 'COLLEGE CHARLES BAUDELAIRE', projet: 'Séjour ENVOL 4ème & 5ème', montant: 2500, quartier: 'SJ', pourcentage: 25 },
        { association: 'ÉCOLE ÉLÉMENTAIRE JEAN MACÉ', projet: 'Mobilité Saint-Jacques, volet ker netra', montant: 4000, quartier: 'SJ', pourcentage: 25 },
        { association: 'COLLEGE CHARLES BAUDELAIRE', projet: '3ème Médias et bilangues', montant: 1500, quartier: 'SJ', pourcentage: 25 },
        { association: 'OCCE VICTOR HUGO', projet: 'Apprendre à jouer ensemble', montant: 2200, quartier: 'FDB', pourcentage: 25 },
        { association: 'COOPERATIVE SCOLAIRE DE L’ECOLE MATERNELLE VICTOR HUGO', projet: 'Rendre les apprentissages accessibles à tous', montant: 1500, quartier: 'FDB', pourcentage: 25 }
    ],
    'Centre': [
        { association: 'OCCE MATERNELLE DURUY', projet: 'Apprendre sereinement', montant: 4200, quartier: 'CTRE', pourcentage: 100 },
        { association: 'USEP VICTOR DURUY', projet: 'BCD plurilingue', montant: 3000, quartier: 'CTRE', pourcentage: 100 },
        { association: 'OCCE ELEMENTAIRE VICTOR DURUY', projet: 'Objets sensoriels', montant: 3000, quartier: 'CTRE', pourcentage: 100 },
        { association: 'ÉCOLE MATERNELLE VICTOR DURUY', projet: 'Objets pour une école inclusive et bienveillante', montant: 2500, quartier: 'CTRE', pourcentage: 100 }
    ]
};


// Calcul du total des projets pour toute la ville
let totalCityAmount = 0;
Object.values(projectsData).forEach(zoneData => {
    zoneData.forEach(project => {
        totalCityAmount += project.montant;
    });
});

// Création du graphique en secteurs (initialisation avec des pourcentages par défaut)
const ctxPie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Quartier Nord', 'Quartier Sud', 'Centre'],
        datasets: [{
            data: [60, 30, 10],  // Valeurs initiales, seront mises à jour dynamiquement
            backgroundColor: ['#FF9999', '#66B3FF', '#99FF99'],
            borderColor: ['#FF6666', '#3399FF', '#66FF66'],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            datalabels: {
                color: '#fff',
                font: { weight: 'bold' },
                formatter: (value, context) => {
                    return context.chart.data.labels[context.dataIndex] + ': ' + value + '%';
                }
            }
        }
    }
});

// Fonction pour mettre à jour le tableau des projets en fonction de la zone sélectionnée
function updateTable(zone) {
    const tableBody = document.getElementById('tableBody');
    const totalDisplay = document.getElementById('totalDisplay');
    let totalAmount = 0;  // Total des projets pour la zone
    let totalZoneAmount = 0;  // Total des projets pour la zone spécifique
    let rows = '';

    // Récupérer les projets de la zone sélectionnée
    const projects = projectsData[zone];

    // Calcul du total des projets pour la zone
    projects.forEach(project => {
        totalZoneAmount += project.montant;
    });

    // Calcul des sommes et des pourcentages pour chaque projet
    projects.forEach(project => {
        totalAmount += project.montant;

        // Calcul des pourcentages dynamiquement
        const percentageCity = ((project.montant / totalCityAmount) * 100).toFixed(2);  // Pourcentage global (ville)
        const percentageZone = ((project.montant / totalZoneAmount) * 100).toFixed(2);  // Pourcentage pour la zone spécifique
        const percentageQuartier = ((project.montant / totalZoneAmount) * 100).toFixed(2);  // Pourcentage pour le quartier dans la zone

        rows += `
            <tr>
                <td>${project.association}</td>
                <td>${project.projet}</td>
                <td>${project.montant} €</td>
                <td>${percentageCity} % (Ville)</td>
                <td>${percentageZone} % (Zone)</td>
                <td>${percentageQuartier} % (Quartier)</td>
                <td>${project.quartier}</td>
            </tr>
        `;
    });

    // Ajouter la ligne "Total"
    rows += `
        <tr style="font-weight: bold; background-color: #f2f2f2;">
            <td colspan="2">Total</td>
            <td>${totalZoneAmount} €</td>
            <td>${((totalZoneAmount / totalCityAmount) * 100).toFixed(2)} % (Ville)</td>
            <td>100 % (Zone)</td>
            <td>100 % (Quartier)</td>
            <td>-</td>
        </tr>
    `;

    tableBody.innerHTML = rows;
    totalDisplay.innerHTML = `Total des projets pour ${zone}: ${totalZoneAmount} €`;
}

// Fonction pour mettre à jour le graphique et le tableau lors de la sélection d'une zone
function updateDataForZone(zone) {
    // Calcul du pourcentage de chaque zone pour le graphique
    const totalNord = projectsData['Nord'].reduce((total, projet) => total + projet.montant, 0);
    const totalSud = projectsData['Sud'].reduce((total, projet) => total + projet.montant, 0);
    const totalCentre = projectsData['Centre'].reduce((total, projet) => total + projet.montant, 0);

    const totalCityAmount = totalNord + totalSud + totalCentre;

    const nordPercentage = ((totalNord / totalCityAmount) * 100).toFixed(2);
    const sudPercentage = ((totalSud / totalCityAmount) * 100).toFixed(2);
    const centrePercentage = ((totalCentre / totalCityAmount) * 100).toFixed(2);

    // Mise à jour des données du graphique en secteurs
    pieChart.data.datasets[0].data = [parseFloat(nordPercentage), parseFloat(sudPercentage), parseFloat(centrePercentage)];
    pieChart.update();

    // Mise à jour du tableau des projets pour la zone sélectionnée
    updateTable(zone);
}

// Événement pour la sélection du dropdown
document.getElementById('zoneSelect').addEventListener('change', function() {
    const selectedZone = this.value;  // Récupérer la zone sélectionnée dans le dropdown
    updateDataForZone(selectedZone);  // Mettre à jour la zone
});

// Initialisation (par défaut, on affiche les projets du Quartier Nord)
updateDataForZone('Nord');
