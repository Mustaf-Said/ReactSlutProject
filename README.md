# 📚 Projektinstallation & Dokumentation

## 🚀 Kom igång

### 1. Klona projektet
```bash
git clone <repo-url>
```

### 2. Installera beroenden
```bash
npm install
```

### 3. Installera Sass & Vite-plugin
```bash
npm install vite-plugin-sass --save-dev
npm install sass
```

### 4. Starta projektet
```bash
npm run dev
```
Appen öppnas automatiskt i din webbläsare.

---

## 📁 Mappstruktur

- **src/** – TypeScript-källkod
- **components/** – Återanvändbara komponenter
- **Cuntext/** – Global ContextProvider
- **layout/** – Delar upp sidan i Navbar, Main & Footer
- **App.tsx** – RouterProvider för sidnavigering
- **Sass-filer** – Stilmallar, huvudfil: `app.scss`

---

## 🌐 API & URL:er

- **API:**  
  `https://openlibrary.org/books/OL7353617M/Fantastic_Mr._Fox`
- **BookDetails:**  
  `https://openlibrary.org/works/OL45804W/editions.json`
- **BookImg:**  
  `https://covers.openlibrary.org/b/isbn/9780385533225-S.jpg`

#### Exempel på fetch-anrop
```typescript
const endpoint = `https://openlibrary.org/search.json?q=the+lord+of+the+rings`;

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // Hantera datan här
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
```

---

## 🛠️ Använda teknologier

- Vite
- npm
- Visual Studio Code

---

## 💻 Använda språk

- TypeScript
- React
- Sass

---

## 🔗 LinkedIn

[Mustafa Said](https://www.linkedin.com/in/mustafa-said-b6b164198/)
