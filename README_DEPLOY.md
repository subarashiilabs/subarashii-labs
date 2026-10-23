# Subarashii Labs website — GitHub Pages

This is a static website. It uses **only the banner image you provided** (`assets/studio-banner.png`); no AI-generated images, stock art, or external fonts are used.

## Publish to GitHub Pages

1. Create a public GitHub repository, for example `subarashii-labs`.
2. Upload **the contents of this folder** (`index.html`, `styles.css`, `script.js`, `site-config.js`, `assets/`) to the **repository root**. Do not upload an extra enclosing folder.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then **Save**.
6. Wait for GitHub to display the live URL. It will generally resemble `https://YOUR_USERNAME.github.io/subarashii-labs/`.
7. Open the live URL in an incognito/private window and verify that the banner, navigation and sections load.
8. Paste the actual working URL into the Unity Asset Store Publisher Portal's Website field.

## Before making the website public

- **Support:** Set `supportUrl` in `site-config.js` to a real public support page (such as your GitHub repository's Issues page). The support button stays hidden until you do this.
- **Product status:** The page currently says Premium is in release preparation and Free is in development. Update this after launch. Do not advertise an unlaunched product as available.
- **Artwork rights:** Ensure you have commercial permission to use the supplied banner image and its lettering.
- **Publisher details:** Add your real support/contact method and any required legal notices before relying on the site as customer documentation.
- **No analytics or external trackers** are included.

## Notes

GitHub Pages is public. Do not upload secrets, unpublished paid product source code, private logs, or personal information.
