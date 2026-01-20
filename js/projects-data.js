/* ============================================
   PORTFOLIO - LOUIS GUÉROUT
   projects-data.js
   
   Pour ajouter un projet :
   1. Copier un bloc projet existant
   2. Modifier les valeurs
   3. Le compteur se met à jour automatiquement
   ============================================ */

const PROJECTS_DATA = [
    // ==========================================
    // PROJET 1 : ASCII AVENTURE
    // ==========================================
    {
        id: "ascii-aventure",
        tag: "Projet Scolaire : Ynov 2025",
        tagColor: "green",
        title: "ASCII Aventure",
        description: "RPG textuel complet développé en une semaine en équipe. Le jeu propose un système multi-classes (Humain, Elfe, Nain), une économie avec pièces d'or, des combats PvE avec IA de monstres, une boutique, de l'artisanat et une interface entièrement en ASCII art.",
        tech: [
            "Go 1.25",
            "CLI",
            "Git",
            "Architecture modulaire"
        ],
        learnings: "Structuration de projets en Go, travail en équipe avec Git, création d'UX en mode console, gestion de la logique de jeu.",
        visualType: "terminal",
        visualData: {
            lines: [
                { text: "$ ./ascii_aventure", type: "prompt" },
                { text: "┌──────────────────┐", type: "title" },
                { text: "│ ASCII AVENTURE │", type: "title" },
                { text: "└──────────────────┘", type: "title" },
                { text: "", type: "normal" },
                { text: "Choisissez votre classe:", type: "normal" },
                { text: "1. Humain", type: "normal" },
                { text: "2. Elfe", type: "normal" },
                { text: "3. Nain", type: "normal" },
                { text: "> _", type: "prompt" }
            ]
        },
        links: {
            linkedin: "https://www.linkedin.com/pulse/asciiaventure-un-rpg-cli-en-go-louis-gu%C3%A9rout-qukie/"
        }
    },

    // ==========================================
    // PROJET 2 : NAS & HOMELAB
    // ==========================================
    {
        id: "nas-homelab",
        tag: "Projet Personnel",
        tagColor: "orange",
        title: "NAS & Homelab",
        description: "Infrastructure personnelle auto-hébergée construite avec du matériel limité : un Fujitsu 4Go DDR3 comme serveur principal et un Raspberry Pi comme pare-feu externe. Gestion de services en conteneurs, VPN sécurisé, et fonctionnement en environnement dégradé (WiFi instable).",
        tech: [
            "Docker",
            "OpenMediaVault",
            "Tailscale",
            "Raspberry Pi",
            "Firewall",
            "Jellyfin",
            "Portainer"
        ],
        learnings: "Rigueur, autonomie, conteneurisation Docker, sécurisation réseau, gestion de contraintes matérielles, résilience en environnement dégradé.",
        visualType: "server",
        visualData: {
            services: [
                "Jellyfin",
                "Portainer",
                "Tailscale VPN",
                "OpenMediaVault"
            ]
        },
        links: {}
    },

    // ==========================================
    // PROJET 3 : FOXYHACK 2026
    // ==========================================
    {
        id: "foxyhack",
        tag: "Hackathon : Base 105 Évreux : 2026",
        tagColor: "purple",
        title: "FoxyHack 2026",
        description: "Hackathon militaire organisé par la Base Aérienne 105 d'Évreux. Mission : concevoir un SI souverain, résilient et opérationnel en conditions dégradées (coupure internet, menace imminente, personnel non-expert). Conception d'une architecture complète : DNS (NSD/Unbound), DHCP, Repository Debian interne, HAProxy, monitoring Grafana, et automatisation du déploiement.",
        tech: [
            "OpenBSD",
            "Debian",
            "Proxmox",
            "Bash",
            "pf (firewall)",
            "DNS NSD/Unbound",
            "DHCP",
            "HAProxy",
            "Grafana",
            "VLANs",
            "Git"
        ],
        learnings: "Travail sous contrainte et deadlines serrées, architecture sobre et résiliente, documentation technique (procédures, runbooks, DAT), schématisation d'architecture, coordination inter-équipes, haute disponibilité, déploiement automatisé.",
        visualType: "image",
        visualData: {
            src: "assets/foxyhack-logo.png",
            alt: "FoxyHack Logo"
        },
        links: {}
    },

    // ==========================================
    // PROJET 4 : GROUPIE TRACKER
    // ==========================================
    {
        id: "groupie-tracker",
        tag: "Projet Scolaire : Ynov 2025",
        tagColor: "blue",
        title: "Groupie Tracker",
        description: "Application web permettant de suivre vos groupes de musique préférés. Affichage des membres, dates de création, premiers albums et concerts à venir. Consommation d'une API externe, barre de recherche avec autocomplétion, et architecture MVC.",
        tech: [
            "Go",
            "HTML/CSS",
            "API REST",
            "Leaflet.js",
            "Architecture MVC",
            "Templates Go",
            "Git"
        ],
        learnings: "Consommation d'API externes en Go, architecture MVC, gestion des templates HTML, routing HTTP, création d'une barre de recherche dynamique, intégration de cartes interactives.",
        visualType: "terminal",
        visualData: {
            lines: [
                { text: "$ go run main.go", type: "prompt" },
                { text: "", type: "normal" },
                { text: "Serveur démarré sur", type: "normal" },
                { text: "http://localhost:5500", type: "title" },
                { text: "", type: "normal" },
                { text: "Routes disponibles:", type: "normal" },
                { text: "  /           → Accueil", type: "normal" },
                { text: "  /artists    → Liste", type: "normal" },
                { text: "  /artist?id= → Détails", type: "normal" },
                { text: "  /concerts   → Events", type: "normal" }
            ]
        },
        links: {
            github: "https://github.com/CharlyYNOV/GROUPIE_TRACKER_B1"
        }
    }
];
