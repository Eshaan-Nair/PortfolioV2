# AI Engineer Portfolio

A highly polished, cinematic, and responsive personal portfolio built with **Next.js**, featuring smooth scroll animations, a custom dark/light theme engine, and a fully functional AI Chatbot powered by **Groq**.

## Features
- **Cinematic Animations**: Powered by `framer-motion` for buttery smooth section reveals.
- **Interactive Particle Background**: A responsive 2D canvas network that dynamically shifts colors based on the active theme.
- **Next-Gen Chatbot**: An integrated sliding chat widget using the Vercel AI SDK and Groq's lightning-fast `llama3-8b` model. It acts as a personal AI agent to answer recruiter questions about your resume.
- **Responsive Geometry**: Custom CSS engineering to scale complex UI components (like the Skills Honeycomb) seamlessly down to mobile screens.

---

## Getting Started

Follow these instructions to run the portfolio locally on your machine.

### 1. Clone & Install
Clone the repository and install the dependencies:
```bash
npm install
```

### 2. Configure Environment Variables
This project uses the **Groq API** to power the AI Chatbot. You need to provide an API key for the chatbot to work.

1. Rename the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Open `.env.local` and paste in your Groq API key:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```
   *(You can get a free API key at [console.groq.com](https://console.groq.com))*

### 3. Run the Development Server
Start the local Next.js server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## Customizing the AI Chatbot for Yourself

If you are using this code for your own portfolio, you **must** update the AI's "Brain" so it knows your personal details instead of Eshaan's.

1. Open `src/app/api/chat/route.ts`.
2. Locate the `systemPrompt` variable.
3. Replace the text with your own name, education, projects, and work experience. The LLM will strictly use the context provided in this prompt to answer any questions users ask it!

## Social Sharing & Open Graph

The portfolio includes **Open Graph** and **Twitter Card** meta tags in `src/app/layout.tsx` so that link previews (on LinkedIn, Twitter, Slack, etc.) show a rich thumbnail instead of a blank card.

### OG Image
Place a **1200×630px** PNG at:
```
public/og-image.png
```
This image will automatically be used as the thumbnail whenever your portfolio link is shared. If the file is missing, social platforms will fall back to a blank preview.

> **LinkedIn tip:** Add your portfolio URL to the LinkedIn Featured section as a **Link** (not Media). LinkedIn will auto-fetch the `og:image` and show it as a clickable thumbnail that still redirects to your site. Use the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to force a re-scrape after deploying.

If you are forking this repo, update the `url`, `images`, and `siteName` fields in the `metadata` export inside `src/app/layout.tsx` to match your own domain.

---

## Deployment
When you are ready to deploy to Vercel, make sure you add `GROQ_API_KEY` to your Vercel Project Environment Variables before hitting deploy!
