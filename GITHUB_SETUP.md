# 🔧 GitHub Projecten Configuratie

## 📌 Snelle Setup

### Stap 1: Verifieer je GitHub Username
1. Ga naar je GitHub profiel: https://github.com/[jouw-username]
2. Kopieer je exacte username uit de URL

### Stap 2: Update de Configuratie
Open `script.js` en zoek naar deze regels (bovenaan het bestand):

```javascript
// ==================== GITHUB CONFIG ====================
const GITHUB_USERNAME = 'abdisamadabdulle';  // ⬅️ VERANDER DIT
const GITHUB_REPOS_TO_SHOW = 6;
```

Vervang `'abdisamadabdulle'` met je echte GitHub username.

### Stap 3: Test de Website
1. Open `index.html` in je browser
2. Open Developer Tools (F12 of Cmd+Option+I)
3. Ga naar de Console tab
4. Je zou moeten zien:
   - ✅ "📡 Fetching repositories van: ..."
   - ✅ "✅ X repositories opgehaald"
   - ✅ "✨ GitHub projecten succesvol geladen!"

## 🔍 Troubleshooting

### Probleem: "404 Not Found"
**Oorzaak**: GitHub username is onjuist of het account bestaat niet.

**Oplossing**:
1. Verifieer je username op GitHub
2. Zorg dat je profiel publiek is (Settings → Profile → Public profile)

### Probleem: "Geen repositories gevonden"
**Oorzaak**: Je hebt geen publieke repositories.

**Oplossing**:
1. Maak repositories publiek: Ga naar repository Settings → Danger Zone → Change visibility
2. Of voeg handmatig projecten toe (zie hieronder)

### Probleem: "API rate limit bereikt"
**Oorzaak**: GitHub API heeft een limiet van 60 requests per uur voor niet-geauthenticeerde verzoeken.

**Oplossing**:
1. Wacht een uur
2. Of gebruik een Personal Access Token (zie hieronder)

## 🔐 Personal Access Token (Optioneel)

Voor meer API calls en toegang tot private repositories:

### Stap 1: Maak een Token aan
1. Ga naar: https://github.com/settings/tokens
2. Klik "Generate new token" → "Generate new token (classic)"
3. Geef het een naam: "Portfolio Website"
4. Selecteer scopes: `public_repo` (voor publieke repos) of `repo` (voor private repos)
5. Klik "Generate token"
6. **KOPIEER DE TOKEN METEEN** (je ziet hem maar één keer!)

### Stap 2: Gebruik de Token
**BELANGRIJK**: Deel NOOIT je token publiek!

#### Optie A: Tijdelijk (voor local testing)
Open de browser console en voer uit:
```javascript
window.GITHUB_TOKEN = 'ghp_jouwTokenHier';
```

#### Optie B: Via Environment Variables (aanbevolen voor production)
Gebruik een backend service of Netlify/Vercel environment variables.

## 🎨 Projecten Aanpassen

### Automatische Volgorde
Projecten worden automatisch gesorteerd op "laatst bijgewerkt". Om de volgorde te beïnvloeden:
1. Update een repository op GitHub (bijv. commit, edit README)
2. Die repository verschijnt bovenaan

### Handmatige Projecten Toevoegen
Als je niet wilt dat GitHub automatisch projecten laadt:

1. **Verwijder de automatische fetch**:
   
   In `script.js`, comment uit of verwijder:
   ```javascript
   document.addEventListener('DOMContentLoaded', () => {
       // fetchGitHubProjects(GITHUB_USERNAME, GITHUB_REPOS_TO_SHOW);
   });
   ```

2. **Voeg handmatige projecten toe** in `index.html`:
   ```html
   <div class="project-card fade-in">
       <img src="jouw-screenshot.jpg" alt="Project naam" class="project-image">
       <div class="project-info">
           <h3>Project Naam</h3>
           <p>Project beschrijving hier...</p>
           <div class="project-tags">
               <span class="tag">React</span>
               <span class="tag">Node.js</span>
           </div>
           <div class="project-links">
               <a href="https://live-demo.com" class="btn-demo">Live Demo</a>
               <a href="https://github.com/user/repo" class="btn-code">
                   <i class='bx bxl-github'></i> Code
               </a>
           </div>
       </div>
   </div>
   ```

### Project Afbeeldingen
De automatische loader gebruikt placeholder afbeeldingen gebaseerd op de programmeertaal. 

Voor eigen afbeeldingen:
1. Maak screenshots van je projecten (800x500px aanbevolen)
2. Plaats ze in een `assets/images/` map
3. In `script.js`, pas de `imagePlaceholders` object aan:
   ```javascript
   img.src = `assets/images/${repo.name}.jpg`;
   ```

## 🏷️ Repository Topics Toevoegen

Topics verschijnen als tags onder je projecten. Voeg ze toe:

1. Ga naar je repository op GitHub
2. Klik op het tandwiel icoontje naast "About"
3. Voeg topics toe (bijv: `react`, `javascript`, `portfolio`, `css`)
4. Topics verschijnen automatisch in je portfolio!

## 🌐 Homepage URL Instellen

Voor de "Live Demo" knop:

1. Ga naar je repository Settings
2. Scroll naar "Website" sectie
3. Voer de URL van je live demo in
4. Save

De "Live Demo" knop linkt nu automatisch naar je deployed project!

## 📊 Statistieken Tonen

Het aantal GitHub stars wordt automatisch getoond als tag (⭐ X) als je repository stars heeft.

## 🚀 Geavanceerde Opties

### Forks Verbergen
Standaard worden geforkede repositories getoond als ze stars hebben. Om alle forks te verbergen:

In `script.js`, pas aan:
```javascript
const filteredRepos = repos.filter(repo => !repo.fork);
```

### Aantal Projecten Wijzigen
In `script.js`:
```javascript
const GITHUB_REPOS_TO_SHOW = 12; // Toon 12 in plaats van 6
```

### Specifieke Repositories Tonen
Om alleen bepaalde repositories te tonen:

```javascript
const FEATURED_REPOS = ['portfolio', 'awesome-project', 'another-project'];
const filteredRepos = repos.filter(repo => FEATURED_REPOS.includes(repo.name));
```

## ✅ Checklist

- [ ] GitHub username bijgewerkt in `script.js`
- [ ] Website getest in browser
- [ ] Console checked voor errors
- [ ] Repository descriptions toegevoegd op GitHub
- [ ] Topics toegevoegd aan repositories
- [ ] Homepage URLs ingesteld voor live demos
- [ ] Projecten verschijnen correct op de website

## 💡 Tips

1. **Beschrijvingen**: Zorg dat elke repository een duidelijke beschrijving heeft op GitHub
2. **README**: Voeg professionele README.md bestanden toe aan je repos
3. **Live Demos**: Deploy je projecten op Netlify, Vercel of GitHub Pages
4. **Screenshots**: Voeg mooie preview afbeeldingen toe aan je repositories
5. **Topics**: Gebruik relevante topics voor betere SEO en presentatie

## 🆘 Hulp Nodig?

Als je problemen hebt:
1. Check de browser console (F12) voor error messages
2. Verifieer dat je GitHub username correct is
3. Zorg dat je repositories publiek zijn
4. Test de GitHub API URL direct in je browser:
   ```
   https://api.github.com/users/JOUW-USERNAME/repos
   ```

Zie je JSON data? Dan werkt het! Zo niet, dan is er een probleem met je account/username.

---

**Veel succes! 🎉**
