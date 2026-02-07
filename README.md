# Aditya Singh - Portfolio Website

A modern, animated portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Go serverless functions. Inspired by the Next.js website aesthetic with a dark theme and colorful animations.

![Portfolio Preview](./public/preview.png) <!-- PLACEHOLDER: Add a screenshot -->

## ✨ Features

- **Modern Design**: Dark theme with colorful gradient animations inspired by Next.js website
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth animations using Framer Motion
- **Performance**: Optimized for speed with Next.js 14 App Router
- **Go Backend**: Contact form powered by Go serverless functions
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend
- **Go** - Serverless function for contact form
- **Vercel Functions** - Serverless deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- Go 1.21+ (for local API testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asing508/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── api/                    # Go serverless functions
│   └── contact/
│       └── index.go       # Contact form handler
├── components/             # React components
│   ├── AnimatedBackground.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/                 # Static assets
│   ├── resume.pdf         # PLACEHOLDER: Add your resume
│   └── projects/          # Project screenshots
├── tailwind.config.ts     # Tailwind configuration
├── vercel.json            # Vercel configuration
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Update in `components/Contact.tsx`
2. **Experience**: Modify `components/Experience.tsx`
3. **Projects**: Edit `components/Projects.tsx`
4. **Skills**: Update `components/Skills.tsx`
5. **About Section**: Modify `components/About.tsx`
6. **Hero Section**: Edit `components/Hero.tsx`

### Placeholders to Update

Search for `PLACEHOLDER` in the codebase to find all items that need to be customized:

- `/public/resume.pdf` - Add your resume
- `/public/og-image.png` - Add Open Graph image (1200x630px)
- `/public/projects/*.png` - Add project screenshots
- Social links and contact information
- Twitter handle in metadata

### Environment Variables

Create a `.env.local` file for local development:

```env
# SMTP Configuration for Contact Form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=asing508@asu.edu
```

## 📤 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/asing508/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   In Vercel dashboard → Settings → Environment Variables, add:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `CONTACT_EMAIL`

4. **Deploy**
   - Vercel will automatically deploy on every push to main
   - Your site will be live at `your-project.vercel.app`

### Custom Domain (Optional)

1. Go to Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 🔧 Go API Development

The contact form uses a Go serverless function. To test locally:

```bash
# Install Vercel CLI
npm i -g vercel

# Run development server with API
vercel dev
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2s

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Aditya Singh**
- Email: asing508@asu.edu
- LinkedIn: [linkedin.com/in/aditya-singh-983b5b265/](https://www.linkedin.com/in/aditya-singh-983b5b265/)
- GitHub: [github.com/asing508](https://github.com/asing508)

---

Built with ❤️ by Aditya Singh
