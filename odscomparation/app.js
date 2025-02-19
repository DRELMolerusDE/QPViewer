const jsonData = {
    "zones": {
    "CN": [
      { "association": "ASSOCIATION SPORTIVE ALPHONSE DAUDET", "projet": "Trions nos déchets, ils seront recyclés : un grand geste pour l’environnement !", "montant": 3000 },
      { "association": "OCCE MATERNELLE JULES VALLES", "projet": "CREATIO ! Un projet pour les élèves « en panne »… de langage", "montant": 3000 },
      { "association": "OCCE MATERNELLE A. DAUDET", "projet": "Apprendre à gérer ses émotions par le jeu", "montant": 2800 },
      { "association": "LES IRREDUCTIBLES DE JULES VALLES", "projet": "Culture, sport, vivre ensemble", "montant": 3000 },
      { "association": "COLLEGE ALBERT CAMUS", "projet": "Décrochage scolaire et fracture numériques", "montant": 2000 },
      { "association": "COLLEGE ALBERT CAMUS", "projet": "Alternative aux écrans", "montant": 4000 },
      { "association": "COLLEGE ALBERT CAMUS", "projet": "On Time", "montant": 2500 },
      { "association": "COLLEGE ALBERT CAMUS", "projet": "Améliorer le climat scolaire", "montant": 6000 },
      { "association": "ASSOCIATION SPORTIVE A DAUDET", "projet": "La semaine du livre", "montant": 3500 },
      { "association": "OCCE ECOLE ELEMENTAIRE PHILIPPE ARBOS", "projet": "Apprendre ensemble dans une classe à ciel ouvert", "montant": 3000 },
      { "association": "OCCE ECOLE MATERNELLE P ARBOS", "projet": "Premières découvertes d’environnement nouveau et non familier", "montant": 2250 },
      { "association": "ASSOCIATION PARENT D’ÉLÈVE ALPHONSE DAUDET", "projet": "Manger sain bouger bien", "montant": 1500 },
      { "association": "OCCE DAUDET MATERNELLE", "projet": "Développer le langage et s’ouvrir au monde à travers les contes", "montant": 4800 }
    ],
    "CTRE": [
      { "association": "OCCE MATERNELLE DURUY", "projet": "Apprendre sereinement", "montant": 4200 },
      { "association": "USEP VICTOR DURUY", "projet": "BCD plurilingue", "montant": 3000 },
      { "association": "OCCE ELEMENTAIRE VICTOR DURUY", "projet": "Objets sensoriels", "montant": 3000 },
      { "association": "ÉCOLE MATERNELLE VICTOR DURUY", "projet": "Objets pour une école inclusive et bienveillante", "montant": 2500 }
    ],
    "FDB": [
      { "association": "OCCE VICTOR HUGO", "projet": "Apprendre à jouer ensemble", "montant": 2200 },
      { "association": "COOPERATIVE SCOLAIRE DE L’ECOLE MATERNELLE VICTOR HUGO", "projet": "Rendre les apprentissages accessibles à tous", "montant": 1500 }
    ],
    "GA": [
      { "association": "OCCE MATERNELLE CHARLES PERRAULT", "projet": "Langue orale en maternelle", "montant": 6000 },
      { "association": "GAUTHIERE CULTURE ET LOISIRS (LA) ECOLE CHARLES PERRAULT", "projet": "Pour une activité périscolaire éducative (danse, théâtre, musique et ludothèque)", "montant": 4000 },
      { "association": "GAUTHIERE CULTURE ET LOISIRS (LA) ECOLE CHARLES PERRAULT", "projet": "Pour une culture scolaire à partager", "montant": 3000 },
      { "association": "GAUTHIERE CULTURE ET LOISIRS (LA) ECOLE CHARLES PERRAULT", "projet": "Une réussite culturelle pour une réussite éducative", "montant": 3500 },
      { "association": "OCCE ECOLE ELEMENTAIRE CHARLES PERRAULT", "projet": "Développer les sciences et les arts à l’école", "montant": 3000 },
      { "association": "COLLEGE LA CHARME", "projet": "Vivre ensemble, il était une fois la différence", "montant": 3000 },
      { "association": "OCCE COOPERATIVE SCOLAIRE DE L’ECOLE MATERNELLE JEAN DE LA FONTAINE", "projet": "Nature et danse dans tous les sens", "montant": 6500 },
      { "association": "OCCE ELEMENTAIRE JEAN JAURES", "projet": "L’eau dans la ville, l’eau dans la nature", "montant": 3000 }
    ],
    "SJ": [
      { "association": "AMIS DE L'ÉCOLE MATERNELLE JEAN MACÉ", "projet": "La nature au fil des saisons", "montant": 2400 },
      { "association": "AMIS DE L'ECOLE MATERNELLE JEAN MACE", "projet": "La danse à l'école", "montant": 1000 },
      { "association": "COLLEGE CHARLES BAUDELAIRE", "projet": "Classes ENVOL 5ème et 4ème", "montant": 3000 },
      { "association": "COLLEGE CHARLES BAUDELAIRE", "projet": "3ème éloquence", "montant": 1500 },
      { "association": "COLLEGE CHARLES BAUDELAIRE", "projet": "5ème théâtre", "montant": 2000 },
      { "association": "COLLEGE CHARLES BAUDELAIRE", "projet": "Un chemin de la salle à la nature (UPE2A)", "montant": 2000 },
      { "association": "OCCE - ECOLE MATERNELLE JEAN JAURES", "projet": "Paroles en scènes", "montant": 2700 },
      { "association": "LES AMIS DE L’ECOLE MATERNELLE JEAN MACE", "projet": "Oralité et jeux", "montant": 2000 },
      { "association": "COLLEGE CHARLES BAUDELAIRE", "projet": "Classe de 6ème pratiques culturelles et artistiques", "montant": 2000 },
      { "association": "COLLEGE CHARLES BAUDELAIRE", "projet": "Séjour ENVOL 4ème & 5ème", "montant": 2500 },
      { "association": "ÉCOLE ÉLÉMENTAIRE JEAN MACÉ", "projet": "Mobilité Saint-Jacques, volet ker netra", "montant": 4000 },
      { "association": "AS CLERMONT SAINT JACQUES FOOT", "projet": "Ballon de savoir", "montant": 4000 }
    ],
    "VE": [
      { "association": "OCCE JULES VERNES", "projet": "Tous en bonne santé", "montant": 3000 },
      { "association": "OCCE ELEMENTAIRE J VERNE", "projet": "Tous à la découverte du PDD", "montant": 3100 },
      { "association": "AMICALE LAIQUE J VERNE", "projet": "Mise en place d’activités Péri et extra-scolaires", "montant": 7000 },
      { "association": "LES CONQUERANTS ROMAIN RO’LAND", "projet": "Maracatu des Vergnes", "montant": 2800 },
      { "association": "FAMILY SOCIAL CLUB", "projet": "Ecol’ture", "montant": 4000 },
      { "association": "COLLEGE CHARLES BAUDELAIRE", "projet": "3ème Médias et bilangues", "montant": 1500 }
    ],
    "CAMP": [
      { "association": "OCCE FOUSSON", "projet": "Apprendre autrement avec les outils de la co-éducation", "montant": 3000 }
    ]
  }
};

// Données pour le graphique
const quartierData = {
    labels: ["Saint Jacques & Fontaine du Bac", "Les Vergnes & La Gauthière", "Croix de Neyrat & Champratel", "Centre"],  // Noms modifiés
    datasets: [{
        label: 'Financement par Quartier',
        data: [
            jsonData.zones.SJ.reduce((sum, project) => sum + project.montant, 0) + jsonData.zones.FDB.reduce((sum, project) => sum + project.montant, 0),  // Saint Jacques + Fontaine du Bac
            jsonData.zones.VE.reduce((sum, project) => sum + project.montant, 0) + jsonData.zones.GA.reduce((sum, project) => sum + project.montant, 0),  // Les Vergnes + La Gauthière
            jsonData.zones.CN.reduce((sum, project) => sum + project.montant, 0) + jsonData.zones.CAMP.reduce((sum, project) => sum + project.montant, 0),  // Croix de Neyrat + Champratel
            jsonData.zones.CTRE.reduce((sum, project) => sum + project.montant, 0)  // Centre
        ],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)']
    }]
};

// Initialisation du graphique
var ctx = document.getElementById('pieChart').getContext('2d');

// Redimensionner le canvas avant de créer le graphique
var canvas = document.getElementById('pieChart');
canvas.width = 500;  // Largeur souhaitée
canvas.height = 500; // Hauteur souhaitée

// Création du graphique
var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Saint Jacques & Fontaine du Bac', 'Les Vergnes & La Gauthière', 'Croix de Neyrat & Champratel', 'Centre'],  // Modifications ici
        datasets: [{
            label: 'Financements',
            data: [
                jsonData.zones.SJ.reduce((sum, project) => sum + project.montant, 0) + jsonData.zones.FDB.reduce((sum, project) => sum + project.montant, 0),  // Saint Jacques + Fontaine du Bac
                jsonData.zones.VE.reduce((sum, project) => sum + project.montant, 0) + jsonData.zones.GA.reduce((sum, project) => sum + project.montant, 0),  // Les Vergnes + La Gauthière
                jsonData.zones.CN.reduce((sum, project) => sum + project.montant, 0) + jsonData.zones.CAMP.reduce((sum, project) => sum + project.montant, 0),  // Croix de Neyrat + Champratel
                jsonData.zones.CTRE.reduce((sum, project) => sum + project.montant, 0)  // Centre
            ],
            backgroundColor: [
                '#f94144', // Croix de Neyrat & Champratel
                '#f9c74f', // Centre
                '#90be6d', // Les Vergnes & La Gauthière
                '#277da1'  // Saint Jacques & Fontaine du Bac
            ],
            hoverBorderColor: [
                '#d90429', '#f8961e', '#43aa8b', '#3e5c76'
            ],
            hoverBorderWidth: 4,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            },
        },
        animation: {
            duration: 500,
            easing: 'easeOutQuad',
        },
        interaction: {
            mode: 'nearest',
            intersect: true
        },
        onHover: (event, chartElement) => {
            if (chartElement.length > 0) {
                const zone = chartElement[0].index;
                const zoneLabel = pieChart.data.labels[zone];
                updateProjectsTable(zoneLabel);
            }
        },
        tooltips: {
            enabled: false // Désactiver les tooltips
        },
    }
});

// Fonction pour actualiser le tableau avec les projets du quartier sélectionné et afficher le total et les pourcentages
function updateProjectsTable(zone) {
    const tbody = document.querySelector('#projectsTable tbody');
    const totalDisplay = document.querySelector('#totalDisplay');
    
    // Vérifier si le tableau existe
    if (!tbody || !totalDisplay) {
        console.error('Le tableau ou le conteneur total n\'existe pas ou est mal référencé.');
        return;
    }

    tbody.innerHTML = ''; // Vide le tableau avant de le remplir avec les nouvelles données

    // Correspondance entre les noms complets des quartiers et leurs abréviations
    const zonesMapping = {
        'Croix de Neyrat & Champratel': ['CN', 'CAMP'],
        'Centre': ['CTRE'],
        'Saint Jacques & Fontaine du Bac': ['SJ', 'FDB'],
        'Les Vergnes & La Gauthière': ['VE', 'GA']
    };

    const selectedZones = zonesMapping[zone]; // Trouver les zones concernées par le regroupement

    // Calcul du total global pour toutes les zones
    const totalGlobal = Object.values(jsonData.zones).flat().reduce((sum, project) => sum + project.montant, 0);

    // Calcul du total et des pourcentages par groupe de zones
    let totalGroup = 0;
    const zonePercentages = [];

    // Calcul du total pour le groupe de zones sélectionné
    selectedZones.forEach(zoneAbbreviation => {
        let totalZone = 0;
        
        if (jsonData.zones[zoneAbbreviation]) {
            jsonData.zones[zoneAbbreviation].forEach(project => {
                const row = document.createElement('tr');
                row.innerHTML = ` 
                    <td>${project.association}</td>
                    <td>${project.projet}</td>
                    <td>${project.montant} €</td>
                `;
                tbody.appendChild(row);
                totalZone += project.montant; // Additionner au total de la zone
            });
            
            // Calcul du pourcentage de chaque zone par rapport au total global
            const percentage = ((totalZone / totalGlobal) * 100).toFixed(2); // On arrondit à 2 décimales
            zonePercentages.push({ zone: zoneAbbreviation, percentage: percentage, total: totalZone });
            totalGroup += totalZone; // Additionner au total du groupe
        }
    });

    // Calcul du pourcentage du regroupement des zones sélectionnées par rapport au total global
    const totalGroupPercentage = ((totalGroup / totalGlobal) * 100).toFixed(2); // Pourcentage du regroupement

    // Affichage du total et des pourcentages
    let zoneDetails = selectedZones.map(zone => {
        const zoneData = zonePercentages.find(z => z.zone === zone);
        return `${zone}: ${zoneData.percentage}%`;
    }).join(' & ');

    totalDisplay.innerHTML = `Total : ${totalGroupPercentage}% (${zoneDetails})`; // Affichage du total et des zones
}
