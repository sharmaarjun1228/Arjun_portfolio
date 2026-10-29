# Arjun Sharma — Visual Data & BI Portfolio

A responsive, Pinterest-inspired portfolio with a mobile app-style bottom navigation. Built with plain HTML, CSS and JavaScript, so it can be hosted free on GitHub Pages.

## Run locally
Open `index.html` in your browser, or use VS Code Live Server for the best local experience.

## Personalise content
Edit **`js/portfolio-data.js`** to update your email, LinkedIn/GitHub URLs, impact metrics, project cards, skill groups, education, certifications, and experience. Project cards are rendered automatically from the `projects` array; adding a project means adding one object with a unique `id`, category, title, description, impact, tags, tone, visual, and size.

To change the look, edit `css/style.css`. The main page structure and navigation are in `index.html`. Your résumé is in `assets/Arjun_Sharma_Resume.pdf`.

**Important:** Replace the placeholder LinkedIn/GitHub URLs in `js/portfolio-data.js` and update the résumé with a newer version when needed. Project descriptions are based on the supplied résumé and may be refined to match what you can discuss in an interview.

## Publish on GitHub Pages
1. Create a GitHub repository, e.g. `arjun-portfolio`.
2. Upload the contents of this folder (make sure `index.html` is at the repository root).
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Visitor analytics (optional)
The page includes GoatCounter's lightweight analytics script as a placeholder. Create a site at [GoatCounter](https://www.goatcounter.com/), then replace `YOUR-CODE` in the `data-goatcounter` URL in `index.html` with your site's code. Analytics will only work after this is configured and the site is deployed. Analytics tracks visits/page views in the provider dashboard; it does not add a public visitor counter to the page.

## Features
- Mobile-first responsive layout and app-like fixed bottom navigation
- Pinterest-inspired masonry project wall with category filters
- Tap a project card to open an accessible detail dialog
- Active navigation follows the current section
- CSS-generated dashboard previews; no external image dependencies
- Reduced-motion accessibility support
- Resume link, email links, and easy-to-edit central data file


## Recent UI improvements
- Added a transparent portrait cutout in `assets/arjun-cutout.png`. Replace it with your own transparent PNG to update the portrait.
- Added the handwritten “Hey, that’s me!” note and animated SVG arrow in the hero.
- Added animated portrait entrance, floating badges, scroll reveals, and reduced-motion support.
- Added a Light/Dark theme switch in the top navigation. The selected theme is remembered in the browser.
- Recruiter-first actions remain visible: Explore my work, View résumé, Email me, and LinkedIn contact.
