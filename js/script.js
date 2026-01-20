/* ============================================
   PORTFOLIO - LOUIS GUÉROUT
   script.js
   ============================================ */

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    PASSION_START_YEAR: 2016  // Année où tu as commencé (10 ans)
};

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

/**
 * Calcule automatiquement les années de passion
 * Se met à jour chaque 1er janvier
 */
function calculateYearsOfPassion() {
    const currentYear = new Date().getFullYear();
    return currentYear - CONFIG.PASSION_START_YEAR;
}

// ============================================
// GÉNÉRATION HTML
// ============================================

/**
 * Génère le HTML d'un visuel Terminal
 */
function generateTerminalVisual(data) {
    const linesHTML = data.lines.map(line => {
        if (line.type === 'prompt') {
            return `<div class="terminal-line"><span class="terminal-prompt">${line.text}</span></div>`;
        } else if (line.type === 'title') {
            return `<div class="terminal-line terminal-title">${line.text}</div>`;
        } else {
            return `<div class="terminal-line">${line.text}</div>`;
        }
    }).join('');
    
    return `
        <div class="terminal-window">
            <div class="terminal-header">
                <div class="terminal-dot red"></div>
                <div class="terminal-dot yellow"></div>
                <div class="terminal-dot green"></div>
            </div>
            <div class="terminal-body">${linesHTML}</div>
        </div>
    `;
}

/**
 * Génère le HTML d'un visuel Server Rack
 */
function generateServerVisual(data) {
    const servicesHTML = data.services.map(service => `
        <div class="server-unit">
            <div class="server-led"></div>
            <div class="server-led"></div>
            <span class="server-label">${service}</span>
        </div>
    `).join('');
    
    return `<div class="server-rack">${servicesHTML}</div>`;
}

/**
 * Génère le HTML d'un visuel Image
 */
function generateImageVisual(data) {
    return `<img src="${data.src}" alt="${data.alt}" class="project-image">`;
}

/**
 * Génère le HTML complet d'un projet
 */
function generateProjectHTML(project) {
    let visualHTML = '';
    
    switch (project.visualType) {
        case 'terminal':
            visualHTML = generateTerminalVisual(project.visualData);
            break;
        case 'server':
            visualHTML = generateServerVisual(project.visualData);
            break;
        case 'image':
            visualHTML = generateImageVisual(project.visualData);
            break;
        default:
            visualHTML = '';
    }

    const techHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    
    return `
        <div class="project-card" data-color="${project.tagColor}">
            <div class="project-visual">${visualHTML}</div>
            <div class="project-content">
                <div class="project-tag" style="color: var(--accent-${project.tagColor})">${project.tag}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${techHTML}</div>
                <div class="project-learnings">
                    <h4>$ echo $LEARNINGS</h4>
                    <p>${project.learnings}</p>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// ANIMATIONS
// ============================================

/**
 * Initialise les animations au scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .skill-category, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// INITIALISATION
// ============================================

/**
 * Fonction principale d'initialisation
 */
function init() {
    console.log('root@louis:~$ ./init_portfolio.sh');
    
    // Vérification que les projets sont chargés
    if (typeof PROJECTS_DATA === 'undefined') {
        console.error('ERREUR: projects-data.js non chargé!');
        return;
    }
    
    // Mise à jour de l'année courante
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    
    // Mise à jour des années de passion
    const yearsPassionEl = document.getElementById('years-passion');
    if (yearsPassionEl) {
        yearsPassionEl.textContent = calculateYearsOfPassion() + '+';
    }
    
    // Mise à jour du compteur de projets
    const projectCountEl = document.getElementById('project-count');
    if (projectCountEl) {
        projectCountEl.textContent = PROJECTS_DATA.length;
    }
    
    // Génération des projets
    const container = document.getElementById('projects-container');
    if (container && PROJECTS_DATA.length > 0) {
        container.innerHTML = PROJECTS_DATA.map(p => generateProjectHTML(p)).join('');
    }
    
    // Initialisation des animations
    initScrollAnimations();
    
    console.log(`Portfolio initialisé : ${PROJECTS_DATA.length} projets chargés`);
}

// ============================================
// LANCEMENT
// ============================================

document.addEventListener('DOMContentLoaded', init);
