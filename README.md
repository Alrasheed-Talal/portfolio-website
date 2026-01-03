# Talal Alrasheed - Portfolio Website

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS, featuring an AI-powered chatbot using Claude API.

## Features

- ✨ Modern UI with shadcn/ui components
- 🎨 Smooth animations with Framer Motion
- 🤖 AI Chatbot powered by Google Gemini (FREE API tier!)
- 📱 Fully responsive design (mobile-first)
- ⚡ Fast performance with Vite
- 🎯 SEO optimized with meta tags and structured data
- 🔒 TypeScript for type safety
- 🌙 Dark mode support ready

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod
- **AI Integration**: Google Gemini API
- **Deployment**: Vercel

## Project Structure

```
portfolio-new/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Portfolio sections
│   │   └── chatbot/         # AI Chatbot components
│   ├── data/                # Static data (projects, experience, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities and API client
│   ├── types/               # TypeScript type definitions
│   └── App.tsx             # Main application
├── api/
│   └── chat.js              # Vercel serverless function for Claude API
├── public/                  # Static assets
└── index.html              # Entry HTML with SEO meta tags
```

## Getting Started

### Prerequisites

- Node.js 20.19.0+ or 22.12.0+
- npm or yarn
- Google Gemini API key (get from https://aistudio.google.com/app/apikey - FREE!)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-new
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Add your Gemini API key to `.env.local`:
```
GEMINI_API_KEY=your_actual_api_key_here
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Configure:
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add Environment Variable:
   - `GEMINI_API_KEY`: Your Google Gemini API key
6. Deploy!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Important: Environment Variables

Make sure to add `GEMINI_API_KEY` in your Vercel project settings:
- Go to Project Settings → Environment Variables
- Add `GEMINI_API_KEY` with your key (get free key from https://aistudio.google.com/app/apikey)
- Check "Production", "Preview", and "Development" environments
- Save and redeploy

## Customization

### Update Personal Information

Edit the files in `src/data/`:
- `about.ts` - Personal info, bio, education
- `projects.ts` - Project portfolio
- `experience.ts` - Work experience
- `skills.ts` - Technical skills
- `certifications.ts` - Certifications and courses
- `quickQuestions.ts` - Chatbot quick questions

### Update Social Links

Update LinkedIn and GitHub URLs in `src/data/about.ts`:
```typescript
linkedin: 'https://linkedin.com/in/your-profile',
github: 'https://github.com/your-username',
```

### Add Project Images

Place project screenshots in `public/images/projects/` and update image URLs in `src/data/projects.ts`.

### Update Resume

Replace `public/resume.pdf` with your actual resume file.

## AI Chatbot

The chatbot uses **Google Gemini 1.5 Flash** which offers a **generous FREE tier** - perfect for portfolios! The system prompt is in `api/chat.js` and contains information about Talal's experience, skills, and projects.

### Get Your FREE Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your key and add it to `.env.local`

### Customizing the Chatbot

To modify the chatbot's knowledge:
1. Open `api/chat.js`
2. Update the `systemPrompt` variable with your information
3. Redeploy to Vercel

### Rate Limiting

The chatbot is limited to 10 messages per session to control API usage. This can be adjusted in `src/hooks/useChat.ts`.

**Why Gemini?**
- ✅ FREE tier with generous limits (15 requests/minute)
- ✅ Fast response times (Gemini 1.5 Flash)
- ✅ High-quality responses
- ✅ No credit card required for API key

## SEO Optimization

The site includes:
- Meta tags for search engines
- Open Graph tags for social media
- Twitter Card tags
- JSON-LD structured data (Person schema)
- Sitemap.xml
- Robots.txt

Update the domain in the following files after deployment:
- `index.html` (meta tags)
- `public/sitemap.xml`
- `public/robots.txt`

## Performance

Built with performance in mind:
- Code splitting with Vite
- Lazy loading for images
- Optimized animations (transform & opacity only)
- Minimal bundle size with tree-shaking

Target metrics:
- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratio > 4.5:1

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is for personal portfolio use.

## Contact

**Talal Alrasheed**
- Email: Talal.Alrasheed20@gmail.com
- Phone: +966550549490
- Location: Riyadh, Saudi Arabia

---

Built with ❤️ using React, TypeScript, and Google Gemini AI
