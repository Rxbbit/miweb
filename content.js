const content = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            portfolio: "Portfolio",
            process: "Process",
            contact: "Contact"
        },
        hero: {
            title: "Artist & Web Developer",
            subtitle: "Crafting digital experiences where code meets art.",
            cta: "View My Work"
        },
        about: {
            title: "Artist & Developer",
            p1: "I am a 3D environment artist and web developer, working as a freelancer in both fields since 2020. I collaborate with people from all over the world, bringing a unique artistic vision to every digital project.",
            p2: "My goal is to transmit something meaningful with every piece I create, blending technical precision with environmental storytelling.",
            freelancer: "Freelancer",
            global: "Global",
            working: "Working worldwide"
        },
        techStack: {
            title: "Technology Stack"
        },
        process: {
            title: "Creative Process",
            step1: { t: "Discovery", d: "Understanding your vision and goals." },
            step2: { t: "Design", d: "Creating a unique visual identity and environment." },
            step3: { t: "Development", d: "Writing clean code and building functional art." },
            step4: { t: "Launch", d: "Optimizing and deploying your digital masterpiece." }
        },
        services: {
            title: "Expertise",
            webDev: {
                title: "Web Development",
                desc: "Specialized in HTML, CSS, JS, WordPress, and Squarespace, adapting to any environment."
            },
            creativeDesign: {
                title: "3D Environments",
                desc: "Creating immersive 3D spaces that tell a story and engage users."
            },
            seo: {
                title: "Global Reach",
                desc: "Working with international clients to bring digital experiences to life anywhere."
            }
        },
        portfolio: {
            title: "Selected Projects",
            viewProject: "View Project",
            categories: {
                all: "All",
                business: "Business",
                hospitality: "Hospitality",
                art: "Art"
            }
        },
        contact: {
            title: "Let's Create Together",
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Send Message",
            success: "Message sent successfully!"
        },
        footer: {
            social: "Instagram",
            rights: "All rights reserved."
        }
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre Mí",
            portfolio: "Portafolio",
            process: "Proceso",
            contact: "Contacto"
        },
        hero: {
            title: "Artista y Desarrollador Web",
            subtitle: "Creando experiencias digitales donde el código se encuentra con el arte.",
            cta: "Ver mi trabajo"
        },
        about: {
            title: "Artista y Desarrollador",
            p1: "Soy artista 3D de entornos y desarrollador web, trabajando como freelancer en ambos campos desde 2020. Colaboro con personas de cualquier parte del mundo, aportando una visión artística única a cada proyecto digital.",
            p2: "Mi objetivo es transmitir algo significativo con cada pieza que creo, mezclando la precisión técnica con la narrativa ambiental.",
            freelancer: "Freelancer",
            global: "Global",
            working: "Trabajando en todo el mundo"
        },
        techStack: {
            title: "Stack Tecnológico"
        },
        process: {
            title: "Proceso Creativo",
            step1: { t: "Descubrimiento", d: "Entender tu visión y objetivos." },
            step2: { t: "Diseño", d: "Crear una identidad visual y entorno únicos." },
            step3: { t: "Desarrollo", d: "Escribir código limpio y construir arte funcional." },
            step4: { t: "Lanzamiento", d: "Optimizar y desplegar tu obra maestra digital." }
        },
        services: {
            title: "Mi Experiencia",
            webDev: {
                title: "Desarrollo Web",
                desc: "Especializado en HTML, CSS, JS, WordPress y Squarespace, adaptándome a cualquier entorno."
            },
            creativeDesign: {
                title: "Entornos 3D",
                desc: "Creación de espacios 3D inmersivos que cuentan una historia y cautivan al usuario."
            },
            seo: {
                title: "Alcance Global",
                desc: "Trabajo con clientes internacionales para dar vida a experiencias digitales en cualquier lugar."
            }
        },
        portfolio: {
            title: "Proyectos Seleccionados",
            viewProject: "Ver Proyecto",
            categories: {
                all: "Todos",
                business: "Negocios",
                hospitality: "Hostelería",
                art: "Arte"
            }
        },
        contact: {
            title: "Creemos algo juntos",
            name: "Nombre",
            email: "Correo",
            message: "Mensaje",
            submit: "Enviar mensaje",
            success: "¡Mensaje enviado con éxito!"
        },
        footer: {
            social: "Instagram",
            rights: "Todos los derechos reservados."
        }
    }
};

const projects = [
    {
        id: "abogados",
        title: { en: "Espinosa Velasco Abogados", es: "Espinosa Velasco Abogados" },
        category: "business",
        tech: ["HTML", "CSS", "JS", "WordPress"],
        images: [
            "imagenes/abogados/Captura de pantalla 2025-06-15 105519.png",
            "imagenes/abogados/Captura de pantalla 2025-06-15 105534.png",
            "imagenes/abogados/Captura de pantalla 2025-06-15 105542.png",
            "imagenes/abogados/Captura de pantalla 2025-06-15 105641.png"
        ],
        description: {
            en: "A professional and authoritative website for a law firm, emphasizing trust and integrity in legal services.",
            es: "Un sitio web profesional y autoritario para una firma de abogados, enfatizando la confianza e integridad en servicios legales."
        }
    },
    {
        id: "ajd",
        title: { en: "AJ&D Contracting", es: "AJ&D Contracting" },
        category: "business",
        tech: ["Squarespace", "Custom CSS", "3D Visualization"],
        images: [
            "imagenes/aj&d contracting/Captura de pantalla 2026-05-01 125153.png",
            "imagenes/aj&d contracting/Captura de pantalla 2026-05-05 101331.png",
            "imagenes/aj&d contracting/Captura de pantalla 2026-05-05 101352.png"
        ],
        description: {
            en: "Custom outdoor solutions including fences, concrete, and decks for homeowners in Sioux Falls.",
            es: "Soluciones exteriores personalizadas que incluyen cercas, concreto y terrazas para propietarios en Sioux Falls."
        }
    },
    {
        id: "dentista",
        title: { en: "Dental Care Center", es: "Centro Dental" },
        category: "business",
        tech: ["WordPress", "Medical UI"],
        images: ["imagenes/dentista/Captura de pantalla 2025-06-10 214750.png"],
        description: {
            en: "Clean and modern medical interface focusing on patient trust and easy appointment booking.",
            es: "Interfaz médica limpia y moderna enfocada en la confianza del paciente y la facilidad de reserva de citas."
        }
    },
    {
        id: "koffie",
        title: { en: "Koffie Bar", es: "Koffie Bar" },
        category: "hospitality",
        tech: ["HTML", "CSS", "3D Art"],
        images: ["imagenes/koffie/Captura de pantalla 2025-06-10 214828.png"],
        description: {
            en: "Sleek and aromatic design for a modern coffee shop experience.",
            es: "Diseño elegante y aromático para una experiencia de cafetería moderna."
        }
    },
    {
        id: "la-riviera",
        title: { en: "La Riviera Cafe", es: "La Riviera Cafe" },
        category: "hospitality",
        tech: ["JS", "Animation", "Artistic UI"],
        images: ["imagenes/la riviera cafe/Captura de pantalla 2025-06-10 214819.png"],
        description: {
            en: "Warm and inviting web presence for a local boutique cafe.",
            es: "Presencia web cálida e invitante para una cafetería local boutique."
        }
    },
    {
        id: "mh-landscaping",
        title: { en: "MH Landscaping", es: "MH Landscaping" },
        category: "business",
        tech: ["Squarespace", "Environment Design"],
        images: [
            "imagenes/mh landscaping/Captura de pantalla 2026-04-27 200646.png",
            "imagenes/mh landscaping/Captura de pantalla 2026-04-27 200657.png"
        ],
        description: {
            en: "Vibrant and nature-focused design showcasing professional landscaping and outdoor transformations.",
            es: "Diseño vibrante y enfocado en la naturaleza que muestra paisajismo profesional y transformaciones exteriores."
        }
    },
    {
        id: "mural-rosas",
        title: { en: "Mural de Rosas Cafe", es: "Cafetería Mural de Rosas" },
        category: "hospitality",
        tech: ["3D Environment", "Creative JS"],
        images: ["imagenes/mural de rosas/Captura de pantalla 2025-06-10 191258.png"],
        description: {
            en: "A beautiful fusion of flavor and aesthetics for a unique coffee experience.",
            es: "Una hermosa fusión de sabor y estética para una experiencia de café única."
        }
    },
    {
        id: "seelie",
        title: { en: "Seelie Coffee", es: "Seelie Coffee" },
        category: "hospitality",
        tech: ["HTML", "Minimalism"],
        images: ["imagenes/seelie/Captura de pantalla 2025-06-10 214901.png"],
        description: {
            en: "Minimalist and high-contrast design for a premium coffee brand.",
            es: "Diseño minimalista y de alto contraste para una marca de café premium."
        }
    },
    {
        id: "perfect-match",
        title: { en: "The Perfect Match", es: "The Perfect Match" },
        category: "business",
        tech: ["WordPress", "E-commerce"],
        images: ["imagenes/the perfect match/Captura de pantalla 2025-06-10 214848.png"],
        description: {
            en: "Modern service-oriented website with a focus on connection and elegance.",
            es: "Sitio web moderno orientado a servicios con enfoque en la conexión y la elegancia."
        }
    },
    {
        id: "un-cafe-contigo",
        title: { en: "Un Café Contigo", es: "Un Café Contigo" },
        category: "hospitality",
        tech: ["JS", "Social Integration"],
        images: ["imagenes/un cafe contigo/Captura de pantalla 2025-06-10 214808.png"],
        description: {
            en: "Intimate and social web experience for a community-driven cafe.",
            es: "Experiencia web íntima y social para una cafetería impulsada por la comunidad."
        }
    }
];

export { content, projects };
