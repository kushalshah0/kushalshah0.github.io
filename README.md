# 🚀 Professional Portfolio Website

A modern, responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern UI/UX**: Clean, minimal design with dark mode
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Semantic HTML and meta tags
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Easy Customization**: All content managed through a single data file

## 🛠️ Tech Stack

- **Framework**: React 18 (Functional Components + Hooks)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Code Quality**: ESLint + Prettier

## 📦 Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio-pro
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🎨 Customization

### Update Your Information

Edit `src/data/portfolioData.js` to customize:

- Personal information (name, role, email, etc.)
- About section content
- Skills and technologies
- Projects showcase
- Work experience and education
- Social media links

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: { ... }, // Change accent color
  dark: { ... },    // Change background colors
}
```

### Add Your Images

Place your images in the `public` folder:

- `public/avatar.jpg` - Your profile picture
- `public/resume.pdf` - Your resume
- `public/projects/` - Project screenshots

## 📄 Project Structure

```
portfolio-pro/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Page sections (Hero, About, etc.)
│   │   └── ui/          # Reusable UI components
│   ├── data/            # Portfolio data
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
npm run build
vercel --prod
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy the `dist` folder** to [Netlify](https://netlify.com)

Or use the Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Features Overview

### Hero Section
- Eye-catching introduction
- Call-to-action buttons
- Smooth scroll indicator
- Animated background elements

### About Section
- Professional summary
- Key statistics
- Profile image
- Responsive grid layout

### Skills Section
- Categorized skill display
- Interactive badges
- Icon-based categories
- Hover animations

### Projects Section
- Project showcase with filtering
- Interactive cards
- Tech stack tags
- GitHub and live demo links
- Featured project highlighting

### Experience/Education
- Timeline layout
- Work experience
- Education history
- Detailed descriptions

### Contact Section
- Working contact form
- Contact information cards
- Form validation
- Success/error messages

## 🔧 Customization Tips

### Change Font
Update the Google Fonts link in `index.html` and `tailwind.config.js`

### Add New Sections
1. Create a new component in `src/components/sections/`
2. Import and add it to `App.jsx`
3. Add navigation link in `src/data/portfolioData.js`

### Modify Animations
Adjust Framer Motion variants in component files

### Update Contact Form
Replace the simulated submission in `Contact.jsx` with your backend API or email service (e.g., EmailJS, Formspree)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

For questions or support, reach out via the contact form or email.

---

**Built with ❤️ using React & Tailwind CSS**
