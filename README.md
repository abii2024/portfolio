# 🚀 Portfolio Website - Abdisamad Abdulle

Een moderne, professionele portfolio website gebouwd met HTML5, CSS3 en vanilla JavaScript. Deze portfolio toont mijn skills, projecten en professionele ervaring als Frontend Developer.

## ✨ Features

- 🎨 **Modern Design**: Strak en professioneel design met gradient effecten en animaties
- 📱 **Volledig Responsive**: Werkt perfect op alle apparaten (desktop, tablet, mobile)
- ⚡ **Snelle Performance**: Geoptimaliseerd voor snelle laadtijden
- 🎭 **Smooth Animaties**: Scroll animaties, typing effect en hover effecten
- 🌐 **SEO Geoptimaliseerd**: Meta tags en semantische HTML voor betere vindbaarheid
- 💼 **Projecten Sectie**: Showcase van je beste werk met links naar GitHub
- 📧 **Contact Formulier**: Eenvoudig contactformulier voor potentiële klanten
- 🎯 **Skills Overview**: Visuele weergave van technische vaardigheden met progress bars
- 🔝 **Scroll to Top**: Handige knop om snel naar boven te scrollen

## 🛠️ Technologieën

- **HTML5**: Semantische markup
- **CSS3**: Custom properties, Flexbox, Grid, Animaties
- **JavaScript (ES6+)**: Vanilla JS zonder frameworks
- **Boxicons**: Voor mooie iconen
- **Google Fonts**: Inter font family

## 📁 Project Structuur

```
portfolio/
│
├── index.html          # Hoofd HTML bestand
├── styles.css          # Alle styling en animaties
├── script.js           # JavaScript functionaliteit
├── cv.jpg              # Profielfoto (vervang met je eigen foto)
├── README.md           # Deze documentatie
└── assets/             # (Optioneel) Map voor afbeeldingen
```

## 🚀 Installatie & Gebruik

### Optie 1: Direct openen
1. Clone of download dit project
2. Open `index.html` in je browser
3. Klaar! De website is live

### Optie 2: Met Live Server (aanbevolen voor development)
1. Installeer [VS Code](https://code.visualstudio.com/)
2. Installeer de "Live Server" extensie
3. Klik rechts op `index.html` en kies "Open with Live Server"

### Optie 3: Met Python
```bash
# Python 3
python -m http.server 8000

# Open in browser: http://localhost:8000
```

## 🎨 Personalisatie

### 1. Profielfoto
Vervang `cv.jpg` met je eigen foto:
- Aanbevolen formaat: 400x400px of hoger
- Bestandsformaat: JPG, PNG of WebP

### 2. Persoonlijke Informatie
Open `index.html` en pas het volgende aan:
- **Naam**: Zoek naar "Abdisamad" en vervang met je eigen naam
- **Beschrijving**: Pas de intro tekst aan in de home sectie
- **Contact Info**: Update email, telefoon en locatie in de contact sectie

### 3. Social Media Links
In `index.html`, zoek naar de social links sectie en update:
```html
<a href="https://github.com/jouwusername">GitHub</a>
<a href="https://linkedin.com/in/jouwprofiel">LinkedIn</a>
```

### 4. Skills
In `index.html`, pas de skills aan met je eigen niveau:
```html
<div class="skill-progress" style="--progress: 90%"></div>
```

### 5. Projecten
Vervang de placeholder projecten met je eigen GitHub projecten:
- Update project titels, beschrijvingen en tags
- Voeg echte GitHub links toe
- Vervang project afbeeldingen (gebruik je eigen screenshots of [Unsplash](https://unsplash.com/))

### 6. Kleuren Aanpassen
In `styles.css`, pas de CSS custom properties aan:
```css
:root {
    --primary-color: #00d4ff;    /* Hoofdkleur */
    --secondary-color: #0066ff;  /* Secundaire kleur */
    --accent-color: #00ffc8;     /* Accent kleur */
}
```

## 🎯 Secties Uitleg

### Home Section
- Typing effect met verschillende titels
- Call-to-action buttons
- Profielfoto met animatie

### About Section
- Persoonlijke introductie
- Statistieken (jaren ervaring, projecten, etc.)

### Skills Section
- Visuele weergave van skills met progress bars
- Categorieën: Frontend, Tools, Backend

### Projects Section
- Grid layout met project cards
- Hover effecten
- Links naar live demo's en GitHub

### Contact Section
- Contact informatie met iconen
- Werkend contactformulier
- Social media links

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 Troubleshooting

### Afbeeldingen laden niet
- Controleer of `cv.jpg` in dezelfde map staat als `index.html`
- Gebruik relatieve paden voor afbeeldingen

### Animaties werken niet
- Controleer of `script.js` correct is gelinkt
- Open de browser console (F12) voor error meldingen

### Stijlen niet toegepast
- Controleer of `styles.css` correct is gelinkt
- Clear browser cache (Ctrl + Shift + R / Cmd + Shift + R)

## 🌐 Deployment

### GitHub Pages
1. Push je code naar GitHub
2. Ga naar repository Settings
3. Scroll naar "GitHub Pages"
4. Selecteer "main" branch
5. Je site is live op: `https://jouwusername.github.io/repository-name`

### Netlify
1. Ga naar [Netlify](https://netlify.com)
2. Drag & drop je project folder
3. Je site is direct live!

### Vercel
1. Installeer Vercel CLI: `npm i -g vercel`
2. Run `vercel` in je project directory
3. Volg de instructies

## 📈 Performance Tips

1. **Optimaliseer Afbeeldingen**: Gebruik WebP formaat voor betere compressie
2. **Lazy Loading**: Voeg `loading="lazy"` toe aan afbeeldingen
3. **Minify CSS/JS**: Gebruik tools zoals [CSS Minifier](https://cssminifier.com/)
4. **CDN**: Host fonts en libraries op een CDN

## 🤝 Contributing

Voel je vrij om dit project te forken en aan te passen voor je eigen gebruik!

## 📝 License

Dit project is open source en beschikbaar onder de [MIT License](LICENSE).

## 📧 Contact

Voor vragen of samenwerking:
- **Email**: abdisamad@email.com
- **GitHub**: [@abdisamadabdulle](https://github.com/abdisamadabdulle)
- **LinkedIn**: [Abdisamad Abdulle](https://linkedin.com/in/abdisamad-abdulle)

## 🎉 Bedankt!

Bedankt voor het bekijken van mijn portfolio! Als je dit project nuttig vindt, geef het dan een ⭐ op GitHub!

---

**Made with ❤️ by Abdisamad Abdulle**
