# Projektinstallation & Dokumentation

## 📥 Hur man klonar projektet
Kör följande kommando i din terminal eller CMD för att klona projektet:
```bash
git clone <repo-url>
```

## 🛠️ Installation
1. Installera beroenden:
  ```bash
  npm install
  ```
2. Installera Sass och Vite-plugin:
  ```bash
  npm install vite-plugin-sass --save-dev
  npm install sass
  ```

## 🚀 Kompilera & starta projektet
När installationen är klar, starta projektet med:
```bash
npm run dev
```
Detta öppnar din app i webbläsaren.

---

## 📂 Mappstruktur & filer
- **src/**: Huvudmappen för TypeScript-filer.
- **components/**: Innehåller återanvändbara komponenter.
- **Access-key.ts**: Din API-nyckel (ligger i `.gitignore` för säkerhet).
- **HTML-filer**: Uppdelade i tre separata filer.
- **Sass-filer**: Flera filer, huvudfilen heter `app.scss`.

---

## 🌐 API & URL:er
- **API:** `https://api.unsplash.com/photos/?client_id=<din-access-key>`
- **Sök-URL:**  
  `https://api.unsplash.com/search/photos?per_page=1&query=office`  
  (Endpoints: `per_page`, `query`)
- **Sida-URL:**  
  `https://api.unsplash.com/search/photos?page=1`  
  (Endpoint: `page`)

### Exempel på fetch-anrop:
```typescript
const accessKey = "din-access-key";
const endpoint = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
  console.log(data);
  // Hantera datan här
  })
  .catch((error) => {
  console.error("Error fetching data:", error);
  });
```

---

## 🧰 Använda teknologier & verktyg
- **TypeScript**
- **Sass**
- **Visual Studio Code**
- **Vite**
- **npm**

---

## 🔗 LinkedIn-profil
[https://www.linkedin.com/in/mustafa-said-b6b164198/](https://www.linkedin.com/in/mustafa-said-b6b164198/)
