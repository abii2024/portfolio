// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('hide');
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 1000);
});

// ==================== NAVIGATION ====================
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('nav a');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Sticky header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            // Close mobile menu
            mobileMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });
});

// ==================== TYPING EFFECT ====================
const typedTextElement = document.getElementById('typed-text');
const texts = [
    'Frontend Developer',
    'UI/UX Enthusiast',
    'Creative Coder',
    'Problem Solver'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingDelay = 500;
    }
    
    setTimeout(type, typingDelay);
}

// Start typing effect
setTimeout(type, 1000);

// ==================== SCROLL ANIMATIONS ====================
const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// ==================== SKILLS ANIMATION ====================
const skillsSection = document.getElementById('skills-section');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                bar.classList.add('animate');
            });
            skillsAnimated = true;
        }
    });
}, { threshold: 0.3 });

skillsObserver.observe(skillsSection);

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== FORM HANDLING ====================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would normally send the data to a server
    console.log('Form data:', data);
    
    // Show success message
    alert('Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.');
    
    // Reset form
    contactForm.reset();
});

// ==================== PROJECT CARDS INTERACTION ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== DYNAMIC STATS COUNTER ====================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

const statsSection = document.getElementById('about-section');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            const statCards = document.querySelectorAll('.stat-card h4');
            statCards.forEach((stat, index) => {
                const numbers = [3, 50, 30, 100];
                setTimeout(() => {
                    animateCounter(stat, numbers[index], 2000);
                }, index * 200);
            });
            statsAnimated = true;
        }
    });
}, { threshold: 0.3 });

statsObserver.observe(statsSection);

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.animated-bg');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ==================== CURSOR TRAIL EFFECT (Optional) ====================
// Uncomment if you want a cursor trail effect
/*
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        
        circle.style.scale = (circles.length - index) / circles.length;
        
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });
    
    requestAnimationFrame(animateCircles);
}

animateCircles();
*/

// ==================== DYNAMIC YEAR IN FOOTER ====================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('footer p');
if (footerText) {
    footerText.innerHTML = `&copy; ${currentYear} Abdisamad Abdulle. Alle rechten voorbehouden.`;
}

// ==================== GITHUB PROJECTS DYNAMIC LOAD ====================
async function fetchGitHubProjects(username, perPage = 6, token = null) {
    const container = document.getElementById('projects-grid');
    if (!container) {
        console.warn('Projects grid container niet gevonden');
        return;
    }

    const headers = {
        'Accept': 'application/vnd.github.mercy-preview+json' // Enables topics
    };
    
    // If user wants to provide a personal access token for private repos, set window.GITHUB_TOKEN
    const authToken = token || window.GITHUB_TOKEN || null;
    if (authToken) headers['Authorization'] = `token ${authToken}`;

    const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}`;

    try {
        console.log(`📡 Fetching repositories van: ${url}`);
        const res = await fetch(url, { headers });
        
        if (!res.ok) {
            throw new Error(`GitHub API fout: ${res.status} - ${res.statusText}`);
        }
        
        const repos = await res.json();
        console.log(`✅ ${repos.length} repositories opgehaald`);

        if (repos.length === 0) {
            console.warn('Geen repositories gevonden, statische projecten blijven zichtbaar');
            return;
        }

        // Filter out forks if you want (optional)
        const filteredRepos = repos.filter(repo => !repo.fork || repo.stargazers_count > 0);

        // Clear existing static projects and add fetched ones
        const frag = document.createDocumentFragment();

        filteredRepos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card fade-in';
            card.setAttribute('data-repo', repo.name);

            const img = document.createElement('img');
            img.className = 'project-image';
            // Try to use social preview image, fallback to language-based placeholder
            const imagePlaceholders = {
                'JavaScript': 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=500&fit=crop',
                'Python': 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop',
                'TypeScript': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
                'HTML': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
                'CSS': 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop',
                'Java': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
                'default': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop'
            };
            img.src = imagePlaceholders[repo.language] || imagePlaceholders['default'];
            img.alt = `${repo.name} project screenshot`;
            img.loading = 'lazy';

            const info = document.createElement('div');
            info.className = 'project-info';

            const h3 = document.createElement('h3');
            // Format repo name (replace hyphens with spaces and capitalize)
            const formattedName = repo.name
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            h3.textContent = formattedName;

            const p = document.createElement('p');
            p.textContent = repo.description || 'Een interessant project zonder beschrijving.';

            const tags = document.createElement('div');
            tags.className = 'project-tags';
            
            // Add language tag
            if (repo.language) {
                const langTag = document.createElement('span');
                langTag.className = 'tag';
                langTag.textContent = repo.language;
                tags.appendChild(langTag);
            }
            
            // Add topics
            if (repo.topics && repo.topics.length > 0) {
                repo.topics.slice(0, 3).forEach(topic => {
                    const topicTag = document.createElement('span');
                    topicTag.className = 'tag';
                    topicTag.textContent = topic;
                    tags.appendChild(topicTag);
                });
            }

            // Add stars if any
            if (repo.stargazers_count > 0) {
                const starTag = document.createElement('span');
                starTag.className = 'tag';
                starTag.innerHTML = `⭐ ${repo.stargazers_count}`;
                tags.appendChild(starTag);
            }

            const links = document.createElement('div');
            links.className = 'project-links';

            const demoBtn = document.createElement('a');
            demoBtn.className = 'btn-demo';
            demoBtn.textContent = 'Live Demo';
            if (repo.homepage && repo.homepage.trim() !== '') {
                demoBtn.href = repo.homepage;
                demoBtn.target = '_blank';
                demoBtn.rel = 'noopener noreferrer';
            } else {
                demoBtn.href = '#';
                demoBtn.style.opacity = '0.5';
                demoBtn.style.cursor = 'not-allowed';
                demoBtn.title = 'Geen live demo beschikbaar';
            }

            const codeBtn = document.createElement('a');
            codeBtn.className = 'btn-code';
            codeBtn.innerHTML = "<i class='bx bxl-github'></i> Code";
            codeBtn.href = repo.html_url;
            codeBtn.target = '_blank';
            codeBtn.rel = 'noopener noreferrer';

            links.appendChild(demoBtn);
            links.appendChild(codeBtn);

            info.appendChild(h3);
            info.appendChild(p);
            info.appendChild(tags);
            info.appendChild(links);

            card.appendChild(img);
            card.appendChild(info);

            frag.appendChild(card);
        });

        // Clear container and add new projects
        container.innerHTML = '';
        container.appendChild(frag);

        console.log('✨ GitHub projecten succesvol geladen!');

        // Re-initialize intersection observers for newly added elements
        const newCards = container.querySelectorAll('.fade-in');
        newCards.forEach(el => {
            if (!el.classList.contains('visible')) {
                fadeObserver.observe(el);
            }
        });

    } catch (error) {
        console.error('❌ Fout bij laden GitHub repositories:', error);
        console.warn('💡 Mogelijke oorzaken:');
        console.warn('   - GitHub gebruikersnaam is onjuist');
        console.warn('   - Geen publieke repositories beschikbaar');
        console.warn('   - GitHub API rate limit bereikt');
        console.warn('   - Internetverbinding problemen');
        console.warn('📌 Statische placeholder projecten blijven zichtbaar als fallback');
    }
}

// ==================== GITHUB CONFIG ====================
// Update deze username naar je echte GitHub username
const GITHUB_USERNAME = 'abii2024';
const GITHUB_REPOS_TO_SHOW = 6;

// Attempt to fetch public repos for the user (no token required for public repos)
// If you want to load private repos, set window.GITHUB_TOKEN = 'your_token' in a secure way.
document.addEventListener('DOMContentLoaded', () => {
    try {
        fetchGitHubProjects(GITHUB_USERNAME, GITHUB_REPOS_TO_SHOW);
        console.log(`🚀 Probeer GitHub repositories te laden voor: ${GITHUB_USERNAME}`);
    } catch (e) {
        console.error('GitHub integratie init fout:', e);
    }
});
// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce scroll events for better performance
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll event
window.addEventListener('scroll', debounce(() => {
    // Scroll-related code here
}, 10));

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Hallo daar!', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
console.log('%cMooi dat je de console bekijkt! Als je geïnteresseerd bent in samenwerken, neem gerust contact op! 🚀', 'font-size: 14px; color: #a0aec0;');

// ==================== ERROR HANDLING ====================
window.addEventListener('error', (e) => {
    console.error('Er is een fout opgetreden:', e.error);
});

// Prevent errors from breaking the site
try {
    // Initialize all features
    console.log('Portfolio succesvol geladen! ✨');
} catch (error) {
    console.error('Fout bij het initialiseren:', error);
}
