// --- Human Readable Topic Names ---
const topicNames = {
    // Tronc Commun (tc)
    "ensembles-nombres": "Arithmétique & Ensembles de Nombres",
    "calcul-vectoriel": "Calcul vectoriel dans le plan",
    "projection-plan": "La projection dans le plan",
    "ordre-ir": "L'ordre dans IR",
    "droite-plan": "La droite dans le plan",
    "polynomes": "Les Polynômes",
    "equations-inequations": "Équations, Inéquations et Systèmes",
    "trigonometrie": "Trigonométrie (Partie 1 & 2)",
    "generalites-fonctions": "Généralités sur les fonctions",
    "transformations-plan": "Transformations dans le plan",
    "produit-scalaire": "Produit scalaire dans le plan",
    "geometrie-espace": "Géométrie dans l'espace",
    "statistiques": "Statistiques",
    
    // 1ere Bac (1bac)
    "logique": "Notions de Logique",
    "Notion-de-logique": "Notion de Logique",
    "calcul-numerique": "Calcul numérique",
    "generalite-sur-les-fonctions": "Généralités sur les fonctions",
    "fonctions-generalites": "Généralités sur les fonctions",
    "barycentre-plan": "Le barycentre dans le plan",
    "produit-scalaire-plan": "Le produit scalaire dans le plan",
    "suites-numeriques": "Les suites numériques",
    "calcul-trigonometrique": "Calcul trigonométrique",
    "rotation-plan": "La rotation dans le plan",
    "limites-fonction": "Limites d'une fonction numérique",
    "limite-d-une-fonction": "Limite d'une fonction numérique",
    "derivation-fonction": "La dérivation et applications",
    "derivation": "La dérivation",
    "representation-graphique": "Représentation graphique d'une fonction",
    "etudes-des-fonctions": "Études des fonctions",
    "vecteurs-espace": "Vecteurs de l'espace",
    "geometrie-analytique-espace": "Géométrie analytique de l'espace",
    "denombrement": "Le dénombrement",
    
    // 2eme Bac (2bac)
    "limites-et-continuite": "Limites et continuité",
    "derivation-etude-fonctions": "Dérivation et étude des fonctions",
    "fonctions-primitives": "Les fonctions primitives",
    "fonctions-logarithmiques": "Les fonctions logarithmiques",
    "nombres-complexes-p1": "Nombres complexes (Partie 1)",
    "fonctions-exponentielles": "Les fonctions exponentielles",
    "nombres-complexes-p2": "Nombres complexes (Partie 2)",
    "nombres-complexes": "Nombres complexes",
    "calcul-integral": "Le calcul intégral",
    "Integration": "Intégration",
    "equations-differentielles": "Les équations différentielles",
    "geometrie-espace": "La géométrie dans l'espace",
    "denombrement-probabilites": "Dénombrement et probabilités",
    "arithmetiques-dans-Z": "Arithmétique dans Z",
    "Structures-algebriques": "Structures algébriques",
    "probabilites": "Probabilités",
    "espaces-vectoriels-reels": "Espaces vectoriels réels"
};

// --- Level Topics Definitions for Dropdown ---
const levelTopics = {
    "tc": [
        "ensembles-nombres", "calcul-vectoriel", "projection-plan", "ordre-ir", 
        "droite-plan", "polynomes", "equations-inequations", "trigonometrie", 
        "generalites-fonctions", "produit-scalaire", "geometrie-espace"
    ],
    "1bac": [
        "logique", "fonctions-generalites", "barycentre-plan", "produit-scalaire-plan", 
        "suites-numeriques", "calcul-trigonometrique", "rotation-plan", "limites-fonction", 
        "derivation-fonction", "representation-graphique", "vecteurs-espace", 
        "geometrie-analytique-espace", "denombrement"
    ],
    "2bac": [
        "limites-et-continuite", "derivation-etude-fonctions", "suites-numeriques", 
        "fonctions-primitives", "fonctions-logarithmiques", "nombres-complexes-p1", 
        "fonctions-exponentielles", "nombres-complexes-p2", "calcul-integral", 
        "equations-differentielles", "geometrie-espace", "denombrement-probabilites"
    ]
};

// --- Quiz Questions Pool ---
const quizQuestionsPool = {
    // --- Tronc Commun Topics ---
    "ensembles-nombres": [
        {
            "question": "Quel est le plus grand diviseur commun (PGCD) des nombres 42 et 70 ?",
            "options": ["7", "14", "21", "35"],
            "correct": 1,
            "explanation": "Les diviseurs de 42 sont 1, 2, 3, 6, 7, 14, 21, 42. Les diviseurs de 70 sont 1, 2, 5, 7, 10, 14, 35, 70. Le PGCD est donc 14."
        },
        {
            "question": "Le nombre entier naturel n = 2³ × 3² × 5 est divisible par :",
            "options": ["15", "18", "25", "36"],
            "correct": 0,
            "explanation": "Puisque la décomposition en facteurs premiers contient 3 et 5, le nombre est divisible par 3 × 5 = 15."
        },
        {
            "question": "Si a et b sont deux entiers impairs, alors la somme a + b est toujours :",
            "options": ["Impaire", "Paire", "Un nombre premier", "Multiple de 4"],
            "correct": 1,
            "explanation": "Un nombre impair s'écrit 2k + 1. La somme de deux impairs est (2k + 1) + (2k' + 1) = 2(k + k' + 1), qui est divisible par 2 et donc pair."
        }
    ],
    "equations-inequations": [
        {
            "question": "Quelles sont les solutions de l'équation x² - 7x + 12 = 0 dans R ?",
            "options": ["S = {2, 6}", "S = {3, 4}", "S = {-3, -4}", "S = {1, 12}"],
            "correct": 1,
            "explanation": "Le discriminant est delta = (-7)² - 4(1)(12) = 49 - 48 = 1. Les solutions sont x1 = (7 - 1)/2 = 3 et x2 = (7 + 1)/2 = 4."
        },
        {
            "question": "L'inéquation 2x - 6 > 0 a pour ensemble de solutions dans R :",
            "options": ["]-∞, 3[", "]3, +∞[", "[3, +∞[", "]-∞, -3["],
            "correct": 1,
            "explanation": "2x - 6 > 0  => 2x > 6  => x > 3. Donc l'ensemble des solutions est l'intervalle ouvert ]3, +∞[."
        }
    ],
    
    // --- 1ere Bac Topics ---
    "logique": [
        {
            "question": "La négation de la proposition 'Pour tout x ∈ R, x² ≥ 0' est :",
            "options": [
                "Pour tout x ∈ R, x² < 0",
                "Il existe x ∈ R tel que x² < 0",
                "Il existe x ∈ R tel que x² ≤ 0",
                "Pour tout x ∈ R, x² ≤ 0"
            ],
            "correct": 1,
            "explanation": "La négation de 'Pour tout (∀)' est 'Il existe (∃)', et la négation de '≥' est '<'. Donc, la négation correcte est 'Il existe x ∈ R tel que x² < 0'."
        },
        {
            "question": "Soit P et Q deux propositions. La proposition 'P implique Q' (P ⇒ Q) est logiquement équivalente à :",
            "options": ["(Non P) ou Q", "P et (Non Q)", "(Non P) et Q", "P ou Q"],
            "correct": 0,
            "explanation": "En logique formelle, l'implication P ⇒ Q est définie comme étant fausse uniquement si P est vraie et Q est fausse. Cela équivaut à (Non P) ou Q."
        }
    ],
    "derivation-fonction": [
        {
            "question": "La fonction dérivée de f(x) = 2x³ - 5x² + 3x - 7 sur R est :",
            "options": [
                "f'(x) = 6x² - 10x + 3",
                "f'(x) = 2x² - 5x + 3",
                "f'(x) = 6x³ - 10x² + 3",
                "f'(x) = 6x² - 5x + 3"
            ],
            "correct": 0,
            "explanation": "La dérivée de x³ est 3x², celle de x² est 2x, et celle de x est 1. Donc f'(x) = 2(3x²) - 5(2x) + 3(1) = 6x² - 10x + 3."
        },
        {
            "question": "Si f'(x0) > 0, alors au voisinage du point x0, la fonction f est :",
            "options": ["Constante", "Décroissante", "Strictement croissante", "Nulle"],
            "correct": 2,
            "explanation": "Le signe de la dérivée donne les variations de la fonction. Si la dérivée est strictement positive en un point, la fonction est strictement croissante dans un intervalle autour de ce point."
        }
    ],

    // --- 2eme Bac Topics ---
    "limites-et-continuite": [
        {
            "question": "Soit f une fonction continue sur [a, b]. Si f(a) × f(b) < 0, d'après le théorème des valeurs intermédiaires (TVI) :",
            "options": [
                "L'équation f(x) = 0 n'a pas de solution sur [a, b]",
                "L'équation f(x) = 0 a au moins une solution sur ]a, b[",
                "La fonction f est constante sur [a, b]",
                "f(a) = f(b)"
            ],
            "correct": 1,
            "explanation": "Puisque f est continue et change de signe entre a et b (f(a) × f(b) < 0), la courbe représentative de f traverse l'axe des abscisses au moins une fois, donc f(x) = 0 a au moins une solution dans ]a, b[."
        },
        {
            "question": "Quelle est la limite de (1 - cos(x))/x² quand x tend vers 0 ?",
            "options": ["0", "1", "1/2", "Infini"],
            "correct": 2,
            "explanation": "C'est une limite trigonométrique remarquable de référence : lim (x → 0) (1 - cos(x))/x² = 1/2."
        }
    ],
    "fonctions-logarithmiques": [
        {
            "question": "Quel est l'ensemble de définition de la fonction f(x) = ln(2x - 4) ?",
            "options": ["]2, +∞[", "[2, +∞[", "]-∞, 2[", "R"],
            "correct": 0,
            "explanation": "La fonction logarithme ln(u) est définie ssi u > 0. Donc 2x - 4 > 0 => 2x > 4 => x > 2. L'intervalle est ]2, +∞[."
        },
        {
            "question": "La dérivée de la fonction f(x) = ln(x² + 1) sur R est :",
            "options": [
                "f'(x) = 1 / (x² + 1)",
                "f'(x) = 2x / (x² + 1)",
                "f'(x) = 2x * ln(x² + 1)",
                "f'(x) = x / (x² + 1)"
            ],
            "correct": 1,
            "explanation": "La formule de dérivation pour ln(u) est u'/u. Ici, u(x) = x² + 1 (donc u'(x) = 2x). Ainsi, f'(x) = 2x / (x² + 1)."
        }
    ],
    "fonctions-exponentielles": [
        {
            "question": "Résolvez dans R l'équation : e^(2x - 3) = e^5. La solution est :",
            "options": ["x = 1", "x = 4", "x = 8", "x = e"],
            "correct": 1,
            "explanation": "Puisque la fonction exponentielle est strictement monotone, e^a = e^b <=> a = b. Donc 2x - 3 = 5 => 2x = 8 => x = 4."
        },
        {
            "question": "Quelle est la limite de x * e^(-x) quand x tend vers +∞ ?",
            "options": ["+∞", "1", "0", "-∞"],
            "correct": 2,
            "explanation": "x * e^(-x) peut s'écrire x / e^x. Par croissance comparée, l'exponentielle e^x l'emporte sur toute puissance de x au voisinage de +∞, donc la limite est 0."
        }
    ],
    "nombres-complexes-p1": [
        {
            "question": "La forme trigonométrique du nombre complexe z = 1 + i est :",
            "options": [
                "√2 (cos(π/4) + i sin(π/4))",
                "2 (cos(π/4) + i sin(π/4))",
                "√2 (cos(π/3) + i sin(π/3))",
                "cos(π/4) + i sin(π/4)"
            ],
            "correct": 0,
            "explanation": "Le module de z est |z| = √(1² + 1²) = √2. En factorisant par le module : z = √2 (1/√2 + i 1/√2) = √2 (cos(π/4) + i sin(π/4))."
        },
        {
            "question": "Soit z = 3 - 4i. Quel est le module |z| ?",
            "options": ["1", "5", "7", "25"],
            "correct": 1,
            "explanation": "Le module d'un complexe z = a + ib est |z| = √(a² + b²). Ici, |z| = √(3² + (-4)²) = √(9 + 16) = √25 = 5."
        }
    ],
    "calcul-integral": [
        {
            "question": "Calculez la valeur de l'intégrale : ∫ (de 1 à e) 1/x dx :",
            "options": ["0", "1", "e", "ln(e) - 1"],
            "correct": 1,
            "explanation": "Une primitive de 1/x sur ]0, +∞[ est ln(x). L'intégrale vaut [ln(x)] de 1 à e = ln(e) - ln(1) = 1 - 0 = 1."
        },
        {
            "question": "Si F est une primitive de f sur [a, b], alors ∫ (de a à b) f(t) dt est égale à :",
            "options": ["F(a) - F(b)", "F(b) - F(a)", "f(b) - f(a)", "F'(b) - F'(a)"],
            "correct": 1,
            "explanation": "Par définition de l'intégrale d'une fonction continue, ∫ (de a à b) f(t) dt = [F(t)] (de a à b) = F(b) - F(a)."
        }
    ],
    "denombrement-probabilites": [
        {
            "question": "Combien de groupes de 3 personnes peut-on former à partir de 5 personnes ?",
            "options": ["10", "15", "20", "60"],
            "correct": 0,
            "explanation": "Le choix ne dépend pas de l'ordre, c'est une combinaison : C(5, 3) = 5! / (3! × 2!) = (5 × 4) / 2 = 10."
        },
        {
            "question": "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?",
            "options": ["1/6", "1/3", "1/2", "2/3"],
            "correct": 2,
            "explanation": "Il y a 3 nombres pairs (2, 4, 6) sur 6 faces. La probabilité est donc de 3/6 = 1/2."
        }
    ]
};

// --- General Fallback Questions (loaded when no specific topic questions exist) ---
const generalFallbackQuestions = {
    "tc": [
        {
            "question": "Le nombre entier n = 2³ × 3² × 5 est-il divisible par :",
            "options": ["15", "18", "25", "36"],
            "correct": 0,
            "explanation": "Puisque la décomposition en facteurs premiers contient 3 et 5, le nombre est divisible par 3 × 5 = 15."
        },
        {
            "question": "L'intersection des intervalles [-2, 5] et [3, 7] est égale à :",
            "options": ["[-2, 7]", "[3, 5]", "[-2, 3]", "[5, 7]"],
            "correct": 1,
            "explanation": "Les réels qui satisfont à la fois -2 <= x <= 5 et 3 <= x <= 7 sont compris entre 3 et 5 inclus, soit [3, 5]."
        },
        {
            "question": "Résolvez dans R l'équation : x² - 5x + 6 = 0. L'ensemble des solutions S est :",
            "options": ["S = {2, 3}", "S = {1, 5}", "S = {-2, -3}", "S = {2, 5}"],
            "correct": 0,
            "explanation": "Le discriminant est delta = (-5)² - 4(1)(6) = 25 - 24 = 1. Les solutions sont (5-1)/2 = 2 et (5+1)/2 = 3. Donc S = {2, 3}."
        }
    ],
    "1bac": [
        {
            "question": "La négation de la proposition 'Pour tout x ∈ R, x² ≥ 0' est :",
            "options": [
                "Pour tout x ∈ R, x² < 0",
                "Il existe x ∈ R tel que x² < 0",
                "Il existe x ∈ R tel que x² ≤ 0",
                "Pour tout x ∈ R, x² ≤ 0"
            ],
            "correct": 1,
            "explanation": "La négation de 'Pour tout (∀)' est 'Il existe (∃)', et la négation de '≥' est '<'. Donc, la négation correcte est 'Il existe x ∈ R tel que x² < 0'."
        },
        {
            "question": "Soit (un) une suite arithmétique de premier terme u0 = 3 et de raison r = 2. Calculez u10 :",
            "options": ["20", "23", "26", "30"],
            "correct": 1,
            "explanation": "La formule générale d'une suite arithmétique est un = u0 + n*r. Pour n = 10 : u10 = 3 + 10 * 2 = 23."
        },
        {
            "question": "Déterminez la limite suivante : lim (x → 2) (x² - 4)/(x - 2) :",
            "options": ["0", "2", "4", "Infini"],
            "correct": 2,
            "explanation": "C'est une forme indéterminée 0/0. On factorise le numérateur : x² - 4 = (x - 2)(x + 2). En simplifiant par (x - 2), la limite est lim (x + 2) = 4."
        }
    ],
    "2bac": [
        {
            "question": "Déterminez la forme algébrique du nombre complexe z = (1 + i)² :",
            "options": ["2", "2i", "1 + 2i", "-2i"],
            "correct": 1,
            "explanation": "On développe l'identité remarquable : (1 + i)² = 1² + 2i + i² = 1 + 2i - 1 = 2i."
        },
        {
            "question": "Déterminez la limite suivante : lim (x → +∞) ln(x)/x :",
            "options": ["0", "1", "+∞", "-∞"],
            "correct": 0,
            "explanation": "C'est une limite de référence par croissance comparée. L'exponentielle ou les polynômes l'emportent sur le logarithme en +∞, donc la limite est 0."
        },
        {
            "question": "Calculez la valeur de l'intégrale : ∫ (de 0 à 1) e^x dx :",
            "options": ["e", "e - 1", "1", "e + 1"],
            "correct": 1,
            "explanation": "Une primitive de e^x est e^x. L'intégrale vaut [e^x] entre 0 et 1, soit e^1 - e^0 = e - 1."
        }
    ]
};

// --- State Variables ---
let currentLevel = null;
let currentTopic = null;
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let isAnswered = false;
let questionsList = [];

// --- DOM Elements ---
const screenSelection = document.getElementById('screen-selection');
const screenQuiz = document.getElementById('screen-quiz');
const screenResults = document.getElementById('screen-results');

const levelCards = document.querySelectorAll('.selection-card');
const startBtn = document.getElementById('start-btn');
const topicSelectionContainer = document.getElementById('topic-selection-container');
const topicSelect = document.getElementById('topic-select');

const quizBadge = document.getElementById('quiz-badge');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const explanationCard = document.getElementById('explanation-card');
const explanationText = document.getElementById('explanation-text');

const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');

const scoreCircle = document.getElementById('score-circle');
const scoreNumber = document.getElementById('score-number');
const statAccuracy = document.getElementById('stat-accuracy');
const statCorrect = document.getElementById('stat-correct');
const retryBtn = document.getElementById('retry-btn');
const homeBtn = document.getElementById('home-btn');

// --- Initialization / Parameter Reading ---
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const urlLevel = params.get('level');
    const urlTopic = params.get('topic');
    
    if (urlLevel) {
        currentLevel = urlLevel;
        currentTopic = urlTopic || "general";
        
        // Directly trigger the quiz screen, bypass selection
        startQuizDirectly();
    }
});

// --- Dynamic Dropdown Population on Selection Screen ---
levelCards.forEach(card => {
    card.addEventListener('click', function() {
        levelCards.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        currentLevel = this.dataset.level;
        
        // Populate and display the dropdown list of topics for this level
        populateTopicsDropdown(currentLevel);
        topicSelectionContainer.style.display = 'block';
        startBtn.disabled = false;
    });
});

function populateTopicsDropdown(level) {
    topicSelect.innerHTML = '';
    
    // Add "General" option
    const generalOpt = document.createElement('option');
    generalOpt.value = 'general';
    generalOpt.textContent = 'Quiz Général du Niveau';
    topicSelect.appendChild(generalOpt);
    
    // Add specific chapters
    const topics = levelTopics[level] || [];
    topics.forEach(topicKey => {
        const opt = document.createElement('option');
        opt.value = topicKey;
        opt.textContent = topicNames[topicKey] || topicKey;
        topicSelect.appendChild(opt);
    });
}

startBtn.addEventListener('click', () => {
    currentTopic = topicSelect.value;
    startQuizDirectly();
});

// --- Start Quiz Core ---
function startQuizDirectly() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    isAnswered = false;
    
    // Select questions
    questionsList = getQuestionsForSelection(currentLevel, currentTopic);
    
    screenSelection.style.display = 'none';
    screenQuiz.style.display = 'block';
    screenResults.style.display = 'none';
    
    showQuestion();
}

function getQuestionsForSelection(level, topic) {
    // 1. Try to load specific topic questions
    if (topic && topic !== "general" && quizQuestionsPool[topic]) {
        return quizQuestionsPool[topic];
    }
    
    // 2. Fallback to general level questions
    return generalFallbackQuestions[level] || [];
}

// --- Active Quiz Screen Logic ---
function showQuestion() {
    isAnswered = false;
    submitBtn.style.display = 'inline-flex';
    submitBtn.disabled = true;
    nextBtn.style.display = 'none';
    explanationCard.style.display = 'none';
    
    const question = questionsList[currentQuestionIndex];
    const totalQuestions = questionsList.length;
    
    // Update Badge text
    const topicLabel = topicNames[currentTopic] || "Général";
    const levelLabel = currentLevel === "tc" ? "TC" : (currentLevel === "1bac" ? "1ère Bac" : "2ème Bac");
    quizBadge.textContent = `${levelLabel} : ${topicLabel}`;
    
    progressText.textContent = `Question ${currentQuestionIndex + 1} sur ${totalQuestions}`;
    const progressPercent = ((currentQuestionIndex) / totalQuestions) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    // Set texts
    questionText.textContent = question.question;
    optionsList.innerHTML = '';
    
    // Render options
    const prefixLetters = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.className = 'option-item fade-in';
        li.dataset.index = index;
        
        li.innerHTML = `
            <span class="option-prefix">${prefixLetters[index]}</span>
            <span class="option-content">${option}</span>
        `;
        
        li.addEventListener('click', selectOption);
        optionsList.appendChild(li);
    });
}

function selectOption() {
    if (isAnswered) return;
    
    const options = optionsList.querySelectorAll('.option-item');
    options.forEach(opt => opt.classList.remove('selected'));
    
    this.classList.add('selected');
    submitBtn.disabled = false;
}

submitBtn.addEventListener('click', evaluateAnswer);

function evaluateAnswer() {
    if (isAnswered) return;
    
    const selectedOption = optionsList.querySelector('.option-item.selected');
    if (!selectedOption) return;
    
    isAnswered = true;
    const selectedIndex = parseInt(selectedOption.dataset.index);
    const question = questionsList[currentQuestionIndex];
    const correctIndex = question.correct;
    
    userAnswers.push(selectedIndex);
    
    const options = optionsList.querySelectorAll('.option-item');
    
    // Highlight correct & incorrect answers
    options.forEach(opt => {
        const idx = parseInt(opt.dataset.index);
        if (idx === correctIndex) {
            opt.classList.add('correct');
        }
        if (idx === selectedIndex && selectedIndex !== correctIndex) {
            opt.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === correctIndex) {
        score++;
    }
    
    // Display explanation card
    explanationText.textContent = question.explanation;
    explanationCard.style.display = 'block';
    
    // Adjust button displays
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-flex';
    if (currentQuestionIndex === questionsList.length - 1) {
        nextBtn.innerHTML = `Terminer <i class="fas fa-check-double"></i>`;
    } else {
        nextBtn.innerHTML = `Suivant <i class="fas fa-arrow-right"></i>`;
    }
}

nextBtn.addEventListener('click', handleNext);

function handleNext() {
    if (currentQuestionIndex < questionsList.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
}

// --- Results Screen Logic ---
function showResults() {
    screenSelection.style.display = 'none';
    screenQuiz.style.display = 'none';
    screenResults.style.display = 'block';
    
    const totalQuestions = questionsList.length;
    const accuracy = Math.round((score / totalQuestions) * 100);
    
    // Update score circle presentation
    scoreNumber.textContent = `${score}/${totalQuestions}`;
    scoreCircle.style.setProperty('--score-percent', `${accuracy}%`);
    
    // Update numerical metrics
    statAccuracy.textContent = `${accuracy}%`;
    statCorrect.textContent = `${score} / ${totalQuestions}`;
    
    // Save to localStorage history for profile stats
    try {
        const quizHistory = JSON.parse(localStorage.getItem('quiz_history') || '[]');
        quizHistory.push({
            level: currentLevel,
            topic: currentTopic,
            score: score,
            total: totalQuestions,
            accuracy: accuracy,
            timestamp: new Date().getTime()
        });
        localStorage.setItem('quiz_history', JSON.stringify(quizHistory));
    } catch (e) {
        console.error("Could not save quiz history to localStorage:", e);
    }
}

retryBtn.addEventListener('click', startQuizDirectly);
homeBtn.addEventListener('click', () => {
    // If we loaded with url params, redirect back to index or general select
    if (window.location.search) {
        window.location.href = 'quiz.html'; // load plain selector screen
    } else {
        screenSelection.style.display = 'block';
        screenQuiz.style.display = 'none';
        screenResults.style.display = 'none';
        
        // Reset selections
        levelCards.forEach(c => c.classList.remove('active'));
        topicSelectionContainer.style.display = 'none';
        currentLevel = null;
        currentTopic = null;
        startBtn.disabled = true;
    }
});
