# Palni website

React and Vite website with page-specific content and shared components.

## Edit the website

- **Content and section order:** src/data/pages/ - one file per page.
- **Homepage introduction:** src/data/pages/homeServiceIntro.js.
- **Navigation and footer:** src/data/pages/navigation.js.
- **Routes, browser titles and metadata:** src/content/pages.js.
- **Reusable UI:** src/components/composed/ and src/components/sections/.
- **Design:** src/styles/site.css and src/styles/app.css.
- **Images, logos and fonts:** public/assets/.

See [the Content & Design Editing Guide](docs/CONTENT-EDITING-GUIDE.md) for exact page-to-component mappings and editing examples.

## Run and build

Run npm install when dependencies are needed, npm run dev for a local preview, and npm run build for production output.

## Verify routes and content isolation

Start the server with npm run dev -- --host 127.0.0.1 --port 5174, then run node scripts/verify-site.mjs in another terminal.

The check covers all route aliases, mobile menus, section rendering and page-data isolation. It writes no screenshots or reports. Set SITE_URL for another local server address, or CHROME_PATH for another Chrome executable. On Windows the default is the standard Chrome installation; elsewhere Playwright uses its installed Chromium.

## Animation engine maintenance

Edit src/vendor/site.raw.js or src/vendor/scenes.raw.js, then run node scripts/wrap-vendor.mjs to regenerate the lifecycle-wrapped runtime modules. Copy and design edits do not require regenerating these engines. Preserve route cleanup in src/vendor/pageEffects.js.
