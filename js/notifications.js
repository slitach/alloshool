// --- Notifications Feed Controller ---
const mockNotifications = [
    {
        "id": "notif_1",
        "type": "quiz",
        "title": "Nouveau Quiz Disponible",
        "desc": "Un quiz interactif a été mis en ligne pour le chapitre 'Nombres complexes (Partie 1)' de 2ème Bac.",
        "time": "Il y a 2 heures",
        "link": "quiz.html?level=2bac&topic=nombres-complexes-p1",
        "btnText": "Faire le Quiz"
    },
    {
        "id": "notif_2",
        "type": "update",
        "title": "Séries d'exercices ajoutées",
        "desc": "Professeur Slimane a ajouté 2 nouvelles séries d'exercices corrigés pour la Dérivation et étude des fonctions.",
        "time": "Il y a 1 jour",
        "link": "course-content-2eme-bac-sp-maths.html",
        "btnText": "Consulter les cours"
    },
    {
        "id": "notif_3",
        "type": "alert",
        "title": "Conseil de Révision",
        "desc": "Rappel de révision : Assurez-vous de bien maîtriser le théorème des valeurs intermédiaires (TVI) avant le prochain contrôle !",
        "time": "Il y a 3 jours",
        "link": "course-content-2eme-bac-svt-maths.html",
        "btnText": "Voir les ressources"
    },
    {
        "id": "notif_4",
        "type": "general",
        "title": "Bienvenue sur Wacop !",
        "desc": "Découvrez notre plateforme d'apprentissage de mathématiques avec cours, fiches de synthèse, exercices et quiz corrigés.",
        "time": "Il y a 5 jours",
        "link": "index.html",
        "btnText": "Explorer l'accueil"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const notifList = document.getElementById('notif-list');
    const markAllBtn = document.getElementById('mark-all-read');
    
    // Load read notifications from localStorage
    let readNotifs = JSON.parse(localStorage.getItem('read_notifications') || '[]');
    
    renderNotifications();
    
    markAllBtn.addEventListener('click', () => {
        mockNotifications.forEach(n => {
            if (!readNotifs.includes(n.id)) {
                readNotifs.push(n.id);
            }
        });
        localStorage.setItem('read_notifications', JSON.stringify(readNotifs));
        renderNotifications();
    });

    function renderNotifications() {
        notifList.innerHTML = '';
        
        if (mockNotifications.length === 0) {
            notifList.innerHTML = `
                <div class="notif-empty">
                    <i class="far fa-bell-slash"></i>
                    <p>Aucune notification pour le moment.</p>
                </div>
            `;
            markAllBtn.style.display = 'none';
            return;
        }

        mockNotifications.forEach(notif => {
            const isUnread = !readNotifs.includes(notif.id);
            const card = document.createElement('div');
            card.className = `notif-card fade-in ${isUnread ? 'unread' : ''}`;
            
            // Set type icons
            let iconClass = 'fa-bell';
            let colorClass = 'general';
            if (notif.type === 'quiz') { iconClass = 'fa-question-circle'; colorClass = 'quiz'; }
            if (notif.type === 'update') { iconClass = 'fa-file-pdf'; colorClass = 'update'; }
            if (notif.type === 'alert') { iconClass = 'fa-exclamation-triangle'; colorClass = 'alert'; }
            
            card.innerHTML = `
                <div class="notif-icon-box ${colorClass}">
                    <i class="fas ${iconClass}"></i>
                </div>
                <div class="notif-body">
                    <div class="notif-title-row">
                        <h4 class="notif-title">${notif.title}</h4>
                        <span class="notif-time">${notif.time}</span>
                    </div>
                    <p class="notif-desc">${notif.desc}</p>
                    <div class="notif-actions">
                        <a href="${notif.link}" class="notif-btn notif-btn-primary action-link" data-id="${notif.id}">
                            ${notif.btnText}
                        </a>
                        ${isUnread ? `<button class="notif-btn mark-read-btn" data-id="${notif.id}">Marquer comme lu</button>` : ''}
                    </div>
                </div>
            `;
            
            // Unread handlers
            const actionLink = card.querySelector('.action-link');
            actionLink.addEventListener('click', () => {
                markAsRead(notif.id);
            });
            
            if (isUnread) {
                const markReadBtn = card.querySelector('.mark-read-btn');
                markReadBtn.addEventListener('click', function() {
                    markAsRead(notif.id);
                    renderNotifications();
                });
            }
            
            notifList.appendChild(card);
        });
    }

    function markAsRead(id) {
        if (!readNotifs.includes(id)) {
            readNotifs.push(id);
            localStorage.setItem('read_notifications', JSON.stringify(readNotifs));
        }
    }
});
