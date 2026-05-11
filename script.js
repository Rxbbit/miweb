import { content, projects } from './content.js';

let currentLang = 'es';

// Neural Particles Effect
function setupParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;

            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                if (mouse.x < this.x && this.x < canvas.width - 10) this.x += 2;
                if (mouse.x > this.x && this.x > 10) this.x -= 2;
                if (mouse.y < this.y && this.y < canvas.height - 10) this.y += 2;
                if (mouse.y > this.y && this.y > 10) this.y -= 2;
            }
        }
        draw() {
            ctx.fillStyle = 'rgba(0, 242, 255, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        const count = (canvas.width * canvas.height) / 9000;
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function connect() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    const opacity = 1 - (distance / 150);
                    ctx.strokeStyle = `rgba(0, 242, 255, ${opacity * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        connect();
        requestAnimationFrame(animate);
    }

    init();
    animate();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('js-enabled');
    setupParticles();
    updateLanguage();
    renderProjects('all');
    setupEventListeners();
    setupScrollAnimations();
});

function setupEventListeners() {
    // Language Switcher
    const langBtn = document.getElementById('lang-btn');
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
        updateLanguage();
        renderProjects(document.querySelector('.filter-btn.active').dataset.filter);
    });

    // Portfolio Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });

    // Modal Close
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
        const modal = document.getElementById('project-modal');
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
        document.body.style.overflow = 'auto';
    });

    // Mobile Menu (Placeholder)
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.addEventListener('click', () => {
        // Simple toggle logic could go here
        alert(currentLang === 'es' ? 'Menú próximamente' : 'Menu coming soon');
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
        submitBtn.disabled = true;

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Use FormSubmit to send email directly to the provided address without a backend
        fetch("https://formsubmit.co/ajax/jeffry1340@hotmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: "Nuevo mensaje de Portfolio web",
                Nombre: name,
                Correo: email,
                Mensaje: message
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(content[currentLang].contact.success);
                contactForm.reset();
            } else {
                throw new Error("Error del servidor");
            }
        })
        .catch(error => {
            console.error(error);
            alert(currentLang === 'es' ? 'Hubo un error al enviar el mensaje. Intenta de nuevo.' : 'There was an error sending the message. Please try again.');
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });
}

function setupScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function updateLanguage() {
    const langData = content[currentLang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = langData;
        
        keys.forEach(k => {
            value = value ? value[k] : null;
        });
        
        if (value) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else {
                el.innerHTML = value;
            }
        }
    });

    // Re-render projects to update their language
    renderProjects(document.querySelector('.filter-btn.active')?.dataset.filter || 'all');
}

function getNestedTranslation(obj, key) {
    return key.split('.').reduce((p, c) => p && p[c] || null, obj);
}

function renderProjects(filter) {
    const grid = document.getElementById('project-grid');
    grid.innerHTML = '';

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${encodeURI(project.images[0])}" alt="${project.title[currentLang]}" loading="lazy">
            </div>
            <div class="project-info">
                <h3>${project.title[currentLang]}</h3>
                <p>${project.description[currentLang]}</p>
                <div class="tech-tags">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        `;
        card.addEventListener('click', () => openProjectModal(project));
        grid.appendChild(card);
    });
}

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">${project.title[currentLang]}</h2>
        <p style="margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 1.1rem;">${project.description[currentLang]}</p>
        
        <div class="slider-container">
            <div class="slider-wrapper" id="slider-wrapper">
                ${project.images.map(img => `
                    <div class="slider-slide">
                        <img src="${encodeURI(img)}" alt="${project.title[currentLang]}">
                    </div>
                `).join('')}
            </div>
            ${project.images.length > 1 ? `
                <button class="slider-arrow prev-arrow">&larr;</button>
                <button class="slider-arrow next-arrow">&rarr;</button>
                <div class="slider-dots" id="slider-dots"></div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';

    if (project.images.length > 1) {
        initSlider(project.images.length);
    }
}

function initSlider(count) {
    let currentSlide = 0;
    const wrapper = document.getElementById('slider-wrapper');
    const dotsContainer = document.getElementById('slider-dots');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');

    // Create dots
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    function updateSlider() {
        wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + count) % count;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % count;
        updateSlider();
    });
}

