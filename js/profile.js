// --- Profile Dashboard Controller ---
const profileTopics = {
    "tc": [
        {"key": "ensembles-nombres", "name": "Arithmétique & Ensembles"},
        {"key": "calcul-vectoriel", "name": "Calcul vectoriel dans le plan"},
        {"key": "projection-plan", "name": "La projection dans le plan"},
        {"key": "ordre-ir", "name": "L'ordre dans IR"},
        {"key": "droite-plan", "name": "La droite dans le plan"},
        {"key": "polynomes", "name": "Les Polynômes"},
        {"key": "equations-inequations", "name": "Équations et Inéquations"},
        {"key": "trigonometrie", "name": "Trigonométrie (Parties 1 & 2)"},
        {"key": "generalites-fonctions", "name": "Généralités sur les fonctions"},
        {"key": "produit-scalaire", "name": "Produit scalaire dans le plan"},
        {"key": "geometrie-espace", "name": "Géométrie dans l'espace"}
    ],
    "1bac": [
        {"key": "logique", "name": "Notions de Logique"},
        {"key": "fonctions-generalites", "name": "Généralités sur les fonctions"},
        {"key": "barycentre-plan", "name": "Le barycentre dans le plan"},
        {"key": "produit-scalaire-plan", "name": "Le produit scalaire dans le plan"},
        {"key": "suites-numeriques", "name": "Les suites numériques"},
        {"key": "calcul-trigonometrique", "name": "Calcul trigonométrique"},
        {"key": "rotation-plan", "name": "La rotation dans le plan"},
        {"key": "limites-fonction", "name": "Limites d'une fonction numérique"},
        {"key": "derivation-fonction", "name": "La dérivation et applications"},
        {"key": "representation-graphique", "name": "Représentation graphique"},
        {"key": "vecteurs-espace", "name": "Vecteurs de l'espace"},
        {"key": "geometrie-analytique-espace", "name": "Géométrie analytique"},
        {"key": "denombrement", "name": "Le dénombrement"}
    ],
    "2bac": [
        {"key": "limites-et-continuite", "name": "Limites et continuité"},
        {"key": "derivation-etude-fonctions", "name": "Dérivation & étude de fonctions"},
        {"key": "suites-numeriques", "name": "Les suites numériques"},
        {"key": "fonctions-primitives", "name": "Les fonctions primitives"},
        {"key": "fonctions-logarithmiques", "name": "Les fonctions logarithmiques"},
        {"key": "nombres-complexes-p1", "name": "Nombres complexes (Partie 1)"},
        {"key": "fonctions-exponentielles", "name": "Les fonctions exponentielles"},
        {"key": "nombres-complexes-p2", "name": "Nombres complexes (Partie 2)"},
        {"key": "calcul-integral", "name": "Le calcul intégral"},
        {"key": "equations-differentielles", "name": "Les équations différentielles"},
        {"key": "geometrie-espace", "name": "La géométrie dans l'espace"},
        {"key": "denombrement-probabilites", "name": "Dénombrement et probabilités"}
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const levelSelect = document.getElementById('level-select');
    const checklistList = document.getElementById('checklist-list');
    const progressFill = document.getElementById('progress-fill');
    const progressCount = document.getElementById('progress-count');
    
    // Stats elements
    const statCompleted = document.getElementById('stat-completed');
    const statAvgScore = document.getElementById('stat-avg-score');
    const statTotalQuizzes = document.getElementById('stat-total-quizzes');
    
    // Initial load
    let currentLevel = localStorage.getItem('profile_level') || 'tc';
    levelSelect.value = currentLevel;
    
    loadDashboard();
    
    levelSelect.addEventListener('change', (e) => {
        currentLevel = e.target.value;
        localStorage.setItem('profile_level', currentLevel);
        loadDashboard();
    });

    function loadDashboard() {
        renderChecklist();
        calculateStats();
    }

    function renderChecklist() {
        checklistList.innerHTML = '';
        const topics = profileTopics[currentLevel] || [];
        
        let completedCount = 0;
        const checkedStates = JSON.parse(localStorage.getItem(`checked_${currentLevel}`) || '{}');
        
        topics.forEach((topic, idx) => {
            const isChecked = !!checkedStates[topic.key];
            if (isChecked) completedCount++;
            
            const li = document.createElement('li');
            li.className = `checklist-item ${isChecked ? 'checked' : ''}`;
            
            li.innerHTML = `
                <label class="checklist-label">
                    <input type="checkbox" class="checklist-cb" data-key="${topic.key}" ${isChecked ? 'checked' : ''}>
                    <span>${topic.name}</span>
                </label>
                <div class="checklist-actions">
                    <a href="quiz.html?level=${currentLevel}&topic=${topic.key}" class="checklist-btn checklist-btn-quiz">
                        <i class="fas fa-question-circle"></i> Quiz
                    </a>
                </div>
            `;
            
            // Toggle check event
            const cb = li.querySelector('.checklist-cb');
            cb.addEventListener('change', function() {
                const key = this.dataset.key;
                const activeChecked = JSON.parse(localStorage.getItem(`checked_${currentLevel}`) || '{}');
                
                activeChecked[key] = this.checked;
                localStorage.setItem(`checked_${currentLevel}`, JSON.stringify(activeChecked));
                
                // Toggle css classes
                li.classList.toggle('checked', this.checked);
                
                // Recalculate progress
                updateProgress();
            });
            
            checklistList.appendChild(li);
        });
        
        updateProgress();
    }

    function updateProgress() {
        const topics = profileTopics[currentLevel] || [];
        const total = topics.length;
        if (total === 0) return;
        
        const checkedStates = JSON.parse(localStorage.getItem(`checked_${currentLevel}`) || '{}');
        let completed = 0;
        topics.forEach(t => {
            if (checkedStates[t.key]) completed++;
        });
        
        const percent = Math.round((completed / total) * 100);
        progressFill.style.width = `${percent}%`;
        progressCount.textContent = `${completed} sur ${total} (${percent}%)`;
        
        // Update general completed stat card
        statCompleted.textContent = `${completed} / ${total}`;
    }

    function calculateStats() {
        // Read quiz scores history from localStorage
        const quizHistory = JSON.parse(localStorage.getItem('quiz_history') || '[]');
        
        const totalQuizzes = quizHistory.length;
        statTotalQuizzes.textContent = totalQuizzes;
        
        if (totalQuizzes > 0) {
            let sumPercent = 0;
            quizHistory.forEach(item => {
                sumPercent += item.accuracy;
            });
            const avg = Math.round(sumPercent / totalQuizzes);
            statAvgScore.textContent = `${avg}%`;
        } else {
            statAvgScore.textContent = '--';
        }
    }
});
