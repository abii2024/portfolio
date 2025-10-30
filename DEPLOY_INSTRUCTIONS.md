# 🚀 Deploy Instructies voor GitHub

## ✅ Stap 1: Git Repository is Klaar!

Je lokale Git repository is succesvol geïnitialiseerd met alle bestanden:
- ✅ Git init uitgevoerd
- ✅ Alle bestanden toegevoegd
- ✅ Initial commit gemaakt
- ✅ Main branch ingesteld

## 📋 Stap 2: Maak GitHub Repository

### Optie A: Via GitHub Website (Makkelijkst)

1. **Ga naar GitHub**: https://github.com/new

2. **Repository instellingen**:
   - **Repository name**: `portfolio` (of kies je eigen naam)
   - **Description**: "Modern professional portfolio website with dynamic GitHub integration"
   - **Visibility**: ✅ Public (aanbevolen voor GitHub Pages)
   - **Initialisatie**: ❌ NIET aanvinken "Add README", "Add .gitignore", of "Choose a license"
     (Je hebt deze bestanden al lokaal!)

3. **Klik**: "Create repository"

4. **Kopieer de commands** die GitHub toont onder "…or push an existing repository from the command line"

### Optie B: Via GitHub CLI (Snelst)

Als je GitHub CLI hebt geïnstalleerd:

```bash
gh repo create portfolio --public --source=. --remote=origin --push
```

## 🔗 Stap 3: Push naar GitHub

Nadat je de repository hebt aangemaakt op GitHub, voer deze commands uit:

```bash
# Voeg GitHub repository toe als remote
git remote add origin https://github.com/abdisamadabdulle/portfolio.git

# Push alle code naar GitHub
git push -u origin main
```

**Let op**: Vervang `abdisamadabdulle` met je echte GitHub username!

## 🌐 Stap 4: GitHub Pages Activeren (Live Website!)

1. **Ga naar je repository op GitHub**:
   - https://github.com/abdisamadabdulle/portfolio

2. **Klik op "Settings"** (bovenaan, rechtsboven)

3. **Scroll naar "Pages"** (linkermenu)

4. **Source instellen**:
   - Branch: `main`
   - Folder: `/ (root)`
   - Klik "Save"

5. **Wacht 1-2 minuten** en refresh de pagina

6. **Je website is live!** 🎉
   - URL: `https://abdisamadabdulle.github.io/portfolio/`

## 🔄 Stap 5: Updates Pushen

Wanneer je wijzigingen maakt aan je portfolio:

```bash
# Check welke bestanden zijn gewijzigd
git status

# Voeg gewijzigde bestanden toe
git add .

# Maak een commit met beschrijving
git commit -m "Update: beschrijving van je wijzigingen"

# Push naar GitHub
git push
```

GitHub Pages update automatisch binnen 1-2 minuten!

## ⚡ Quick Commands Overzicht

```bash
# Volledige update workflow
git add .
git commit -m "Update portfolio"
git push

# Check status
git status
git log --oneline

# Maak nieuwe branch voor experimenten
git checkout -b experiment
git checkout main  # terug naar main
```

## 🎯 Custom Domain (Optioneel)

Als je een eigen domeinnaam wilt:

1. **Koop een domain** (Namecheap, Google Domains, etc.)

2. **DNS Settings**:
   - Voeg een CNAME record toe: `www` → `abdisamadabdulle.github.io`
   - Voeg A records toe voor apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **GitHub Settings**:
   - Ga naar repository Settings → Pages
   - Voer je custom domain in
   - Vink "Enforce HTTPS" aan

## 🚀 Alternatieve Deployment Opties

### Netlify (Aanbevolen voor beginners)

1. Ga naar https://netlify.com
2. Klik "Add new site" → "Import an existing project"
3. Connect GitHub
4. Selecteer je repository
5. Deploy! (automatisch bij elke push)

**Voordelen**:
- ✅ Snellere builds
- ✅ Automatische HTTPS
- ✅ Custom domain gratis
- ✅ Form handling
- ✅ Deploy previews

### Vercel

```bash
# Installeer Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📊 Na Deployment

### Test je website:
- ✅ Werken alle links?
- ✅ Laden afbeeldingen correct?
- ✅ Responsive op mobile?
- ✅ Werkt de GitHub integratie?

### Analytics toevoegen (Optioneel):

**Google Analytics**:
```html
<!-- Voeg toe in <head> van index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛠️ Troubleshooting

### "Permission denied (publickey)"
```bash
# Genereer SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Voeg toe aan GitHub
# Kopieer public key:
cat ~/.ssh/id_ed25519.pub

# Plak in GitHub: Settings → SSH and GPG keys → New SSH key
```

### "Repository not found"
- Controleer of de repository bestaat op GitHub
- Verifieer de URL: `git remote -v`
- Update indien nodig: `git remote set-url origin https://github.com/username/portfolio.git`

### GitHub Pages laadt niet
- Check of main branch is geselecteerd in Pages settings
- Controleer of index.html in root directory staat
- Wacht 5 minuten en probeer opnieuw

## 📝 Checklist

- [ ] Git repository geïnitialiseerd
- [ ] Initial commit gemaakt
- [ ] GitHub repository aangemaakt
- [ ] Code gepushed naar GitHub
- [ ] GitHub Pages geactiveerd
- [ ] Website getest (https://username.github.io/portfolio/)
- [ ] Responsive design getest
- [ ] GitHub username bijgewerkt in script.js
- [ ] Alle links werken
- [ ] Social media links bijgewerkt

## 🎉 Gefeliciteerd!

Je portfolio is nu live op het internet! Deel de link:

```
🔗 https://abdisamadabdulle.github.io/portfolio/
```

### Volgende stappen:
1. ✅ Deel op LinkedIn
2. ✅ Voeg toe aan je CV
3. ✅ Stuur naar potentiële werkgevers
4. ✅ Update regelmatig met nieuwe projecten

---

**Vragen?** Open een issue op GitHub of check de README.md!
