# Yamini Pethakamsetti - Portfolio Website

A modern, responsive portfolio website built with React + Vite showcasing Yamini's skills, education, and experience as a Teaching Partner and Content Creator.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds and smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Components**: Smooth scrolling navigation and hover effects
- **Contact Form**: Functional contact form for potential employers
- **Professional Sections**: Hero, About, Education, Skills, Projects, and Contact sections

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icons for the interface
- **PostCSS** - CSS processing

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## 🚀 Getting Started

### 1. Install Dependencies

Navigate to the project directory and install the dependencies:

```bash
cd portfolio-website
npm install
```

### 2. Start Development Server

Run the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### 3. Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

### 4. Preview Production Build

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Personal Information
Update the following files to customize the content:

- **Hero.jsx**: Update name, title, and contact information
- **About.jsx**: Modify objective and personal details
- **Education.jsx**: Update educational background and certifications
- **Skills.jsx**: Modify technical skills and proficiency levels
- **Projects.jsx**: Add or modify projects and experiences
- **Contact.jsx**: Update contact information and form handling

### Styling
- **tailwind.config.js**: Customize Tailwind CSS configuration
- **src/index.css**: Modify global styles and custom components

### Colors and Theme
The website uses a purple-pink gradient theme. To change colors:
1. Update gradient classes in components (e.g., `from-purple-500 to-pink-500`)
2. Modify the `tailwind.config.js` file to add custom colors

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation menu
- Adaptive grid layouts
- Touch-friendly interactions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will automatically detect Vite and deploy

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/repository-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`

## 📞 Contact

For any questions or support, please contact:
- **Email**: yaminipethakamsetti0911@gmail.com
- **Phone**: +91 7997575606

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ for students' brighter future**

