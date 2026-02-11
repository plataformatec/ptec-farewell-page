# Plataformatec Farewell Site

A static page announcing the closure of [Plataformatec](https://plataformatec.com) and showcasing what the founders are doing next.

## About

Plataformatec was a software consultancy founded in Brazil, known for creating the [Elixir programming language](https://elixir-lang.org/) and contributing significantly to the Ruby and Elixir ecosystems. In January 2020, the company was acqui-hired by [Nubank](https://nubank.com.br/).

## Tech Stack

- Plain HTML + [Tailwind CSS](https://tailwindcss.com/) (CDN)
- Deployed to GitHub Pages via GitHub Actions

## Project Structure

```
├── index.html              # The entire site
├── images/                 # Logos and photos
├── .github/workflows/
│   └── deploy.yml          # Deploy to GitHub Pages on push
└── .nojekyll               # Skip Jekyll processing
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages. No build step needed.
