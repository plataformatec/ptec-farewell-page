# Plataformatec Farewell Site

A static website announcing the closure of [Plataformatec](https://plataformatec.com) and showcasing what the founders are doing next.

## About

Plataformatec was a software consultancy founded in Brazil, known for creating the [Elixir programming language](https://elixir-lang.org/) and contributing significantly to the Ruby and Elixir ecosystems. In January 2020, the company was acqui-hired by [Nubank](https://nubank.com.br/). This farewell page announces the closure and showcases what the founders are doing next.

## Tech Stack

- **Framework:** [Gatsby](https://www.gatsbyjs.com/) 5.x (React-based static site generator)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 3.x
- **Deployment:** GitHub Pages (automated via GitHub Actions)

## Prerequisites

- **Node.js** 20.x or higher (project uses Node 23.11.1 via `.tool-versions`)
- **npm** (comes with Node.js)

If you use [asdf](https://asdf-vm.com/) or [mise](https://mise.jdx.dev/), the correct Node version will be automatically selected.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/plataformatec/ptec-farewell-page.git
cd ptec-farewell-page
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run develop
```

The site will be available at **http://localhost:8000**

GraphQL playground is available at http://localhost:8000/___graphql

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run develop` | Start the development server with hot reload |
| `npm start` | Alias for `npm run develop` |
| `npm run build` | Build the site for production |
| `npm run serve` | Serve the production build locally |
| `npm run clean` | Clear Gatsby cache and public directory |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
├── src/
│   ├── @types/          # TypeScript type declarations
│   ├── images/          # Image assets (logos, photos)
│   ├── pages/           # Page components
│   │   ├── index.tsx    # Main landing page
│   │   └── 404.tsx      # 404 error page
│   └── styles/
│       └── global.css   # Global styles with Tailwind
├── static/              # Static assets served as-is
├── .github/
│   └── workflows/
│       └── gatsby.yml   # CI/CD pipeline for GitHub Pages
├── gatsby-config.ts     # Gatsby configuration
├── gatsby-browser.js    # Browser-specific Gatsby config
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Deployment

### Automatic Deployment (GitHub Pages)

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

The deployment workflow (`.github/workflows/gatsby.yml`):
1. Checks out the code
2. Sets up Node.js 20
3. Installs dependencies
4. Builds the site with Gatsby
5. Deploys to GitHub Pages

### Manual Deployment

To build the site manually for deployment elsewhere:

```bash
# Build the production site
npm run build

# The static files will be in the `public/` directory
```

You can then deploy the contents of the `public/` directory to any static hosting service like:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any web server capable of serving static files

### Preview Production Build Locally

```bash
npm run build
npm run serve
```

The production build will be available at **http://localhost:9000**

## Configuration

### Site Metadata

Site metadata is configured in `gatsby-config.ts`:

```typescript
siteMetadata: {
  title: `Plataformatec Farewell Site`,
  siteUrl: `https://plataformatec.com`,
}
```

### Google Analytics

Google Analytics is configured via `gatsby-plugin-google-gtag` in `gatsby-config.ts`. The tracking ID is `UA-8268430-16`.

### Tailwind CSS

Custom configuration is in `tailwind.config.js`, including the Plataformatec brand color:

```javascript
colors: {
  'ptec-blue': '#16485B'
}
```

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run typecheck` to ensure no TypeScript errors
4. Test locally with `npm run develop`
5. Submit a pull request

## License

This project is proprietary to Plataformatec.
