// --- Search Controller Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const filterSelect = document.getElementById('filter-select');
    const resultsGrid = document.getElementById('results-grid');
    const resultsCount = document.getElementById('results-count');
    
    // Modal elements
    const linkModal = document.getElementById('link-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalLinksList = document.getElementById('modal-links-list');
    const modalClose = document.getElementById('modal-close');
    
    // Close modal on click
    modalClose.addEventListener('click', () => {
        linkModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === linkModal) {
            linkModal.style.display = 'none';
        }
    });

    // Check if database exists
    if (typeof searchDatabase === 'undefined') {
        console.error("Search database not found!");
        resultsGrid.innerHTML = `<p style="text-align: center; color: red; grid-column: 1/-1;">Erreur de chargement de la base de recherche.</p>`;
        return;
    }

    // Initial render
    performSearch();

    // Event listeners
    searchInput.addEventListener('input', performSearch);
    filterSelect.addEventListener('change', performSearch);

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const levelFilter = filterSelect.value; // "all", "tc", "1bac", "2bac"
        
        let filtered = searchDatabase.filter(item => {
            // Level matching
            let matchesLevel = false;
            if (levelFilter === 'all') {
                matchesLevel = true;
            } else if (levelFilter === 'tc' && item.level.toLowerCase().includes('tronc commun')) {
                matchesLevel = true;
            } else if (levelFilter === '1bac' && item.level.toLowerCase().includes('1ère bac')) {
                matchesLevel = true;
            } else if (levelFilter === '2bac' && item.level.toLowerCase().includes('2ème bac')) {
                matchesLevel = true;
            }
            
            if (!matchesLevel) return false;
            
            // Text matching
            const inTopic = item.topic.toLowerCase().includes(query);
            const inLevel = item.level.toLowerCase().includes(query);
            
            return inTopic || inLevel;
        });

        renderResults(filtered);
    }

    function renderResults(results) {
        resultsGrid.innerHTML = '';
        resultsCount.textContent = `${results.length} chapitre${results.length !== 1 ? 's' : ''} trouvé${results.length !== 1 ? 's' : ''}`;
        
        if (results.length === 0) {
            resultsGrid.innerHTML = `
                <div style="text-align: center; grid-column: 1/-1; padding: 3rem 1rem; color: #6c757d;">
                    <i class="fas fa-search-minus" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>Aucun résultat ne correspond à votre recherche.</p>
                </div>
            `;
            return;
        }

        results.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card fade-in';
            
            // Get badge color class
            let badgeClass = 'tc';
            if (item.level.toLowerCase().includes('1ère bac')) badgeClass = 'bac1';
            if (item.level.toLowerCase().includes('2ème bac')) badgeClass = 'bac2';
            
            // Setup buttons
            let buttonsHtml = '';
            
            // Cours button
            if (item.cours && item.cours.length > 0) {
                buttonsHtml += `<button class="res-btn res-btn-cours" data-type="cours" data-topic="${item.topic}" data-links='${JSON.stringify(item.cours)}'>
                    <i class="fas fa-book"></i> Cours (${item.cours.length})
                </button>`;
            }
            
            // Exercices button
            if (item.exercices && item.exercices.length > 0) {
                buttonsHtml += `<button class="res-btn res-btn-exs" data-type="exercices" data-topic="${item.topic}" data-links='${JSON.stringify(item.exercices)}'>
                    <i class="fas fa-file-pdf"></i> Exercices (${item.exercices.length})
                </button>`;
            }
            
            // Quiz button
            let quizHtml = '';
            if (item.quiz) {
                quizHtml = `<a href="${item.quiz}" class="res-btn res-btn-quiz">
                    <i class="fas fa-question-circle"></i> Faire le Quiz
                </a>`;
            } else {
                // generic fallback quiz
                let levelCode = 'tc';
                if (item.level.toLowerCase().includes('1ère bac')) levelCode = '1bac';
                if (item.level.toLowerCase().includes('2ème bac')) levelCode = '2bac';
                quizHtml = `<a href="quiz.html?level=${levelCode}" class="res-btn res-btn-quiz">
                    <i class="fas fa-question-circle"></i> Faire le Quiz
                </a>`;
            }
            
            card.innerHTML = `
                <span class="result-badge ${badgeClass}">${item.level}</span>
                <h3>${item.topic}</h3>
                <div class="result-links-section">
                    <div class="resource-btn-group">
                        ${buttonsHtml}
                    </div>
                    ${quizHtml}
                </div>
            `;
            
            resultsGrid.appendChild(card);
        });

        // Add event listeners to dynamically rendered resource buttons
        const resourceButtons = resultsGrid.querySelectorAll('.res-btn[data-links]');
        resourceButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const links = JSON.parse(this.dataset.links);
                const topicName = this.dataset.topic;
                const typeName = this.dataset.type === 'cours' ? 'Cours' : 'Séries d\'exercices';
                
                openLinksModal(topicName, typeName, links);
            });
        });
    }

    function openLinksModal(topicName, typeName, links) {
        modalTitle.textContent = `${topicName} - ${typeName}`;
        modalLinksList.innerHTML = '';
        
        links.forEach(link => {
            const li = document.createElement('li');
            const isHtml = link.href.endsWith('.html');
            const icon = isHtml ? 'fa-file-alt' : 'fa-file-pdf';
            const iconColor = isHtml ? '#17a2b8' : '#dc3545';
            
            li.innerHTML = `
                <a href="${link.href}" target="_blank">
                    <i class="fas ${icon}" style="color: ${iconColor};"></i>
                    <span>${link.title || 'Document'}</span>
                </a>
            `;
            modalLinksList.appendChild(li);
        });
        
        linkModal.style.display = 'flex';
    }
});
