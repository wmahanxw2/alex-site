# ALEX VPN website (React + Vite + Tailwind 4)

    npm install
    npm run dev        # local preview
    npm run build      # output in dist/ -> upload its CONTENT to cPanel public_html

- Texts, plans, prices, links: `src/config/site.js`
- Backend / payment hooks (placeholders): `src/config/api.js`
- Never put Pasarguard credentials in this project: keep them in server-side code (PHP outside public_html).
