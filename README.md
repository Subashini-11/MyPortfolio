# Subashini M - React Portfolio Application

A modern, high-performance developer portfolio built with **React**, **Vite**, and custom **CSS** design tokens for **Subashini M**, 3rd-Year B.E. Computer Science & Engineering student at **K. Ramakrishnan College of Technology**.

---

## 🌟 Features Included

- **Theme Switching**: Seamless Dark Mode / Light Mode with CSS custom variables and persistent `localStorage`.
- **Hero Section**: Dynamic developer vector avatar, floating tech badges (`Java`, `Python`, `BST`, `C`), status pill, and quick contact action buttons.
- **Career Objective & About Me**: Highlighted statement, pillars of problem-solving, and contact summary cards.
- **Interactive Skills Explorer**: Filterable categories (Languages, Core CS, Web & Tools, Soft Skills) with proficiency meters.
- **Academic Projects Showcase & Live Simulators**:
  - **Music Playlist Organizer Using BST**: Includes an interactive in-browser Binary Search Tree visualization, real-time track insertion, O(log n) lookup, and alphabetical in-order traversal playback!
  - **Digital Notice Board in Python**: Includes an interactive real-time campus circulars broadcast simulator with category filters and emergency alert tagging.
- **Certifications & Achievements**: Highlighting **NPTEL Enhancing Soft Skills**, **NPTEL Problem Solving in C**, and **CARE College Paper Presentation**.
- **Education Timeline**: Detailed overview of B.E. CSE coursework and university standing.
- **Contact & Hire Me**: One-click direct calling (`+91 8248941415`), direct emailing (`subashinim.krct@gmail.com`), copy-to-clipboard badges, and an interactive message form.
- **Printable Resume Modal**: Dedicated formatted resume sheet with instant print / PDF export support.

---

## 🚀 How to Run the Application

### Option 1: Instant Zero-Install Browser Preview
Simply double-click or open [standalone-preview.html](file:///c:/Users/subas/OneDrive/Desktop/Subashini%20M/MyPortfolio/standalone-preview.html) in your web browser (Chrome, Edge, Firefox, Brave). It runs immediately with zero setup!

### Option 2: Standard Vite React Development Server
In your terminal, navigate to this project folder and run:

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev
```

Then open `http://localhost:3000` or the URL displayed in your terminal.

---

## 📁 Project Structure

```
MyPortfolio/
├── index.html                 # Main Vite HTML entry
├── standalone-preview.html    # Zero-setup standalone browser preview
├── package.json               # Project manifest & scripts
├── vite.config.js             # Vite bundler configuration
├── README.md                  # Documentation & instructions
└── src/
    ├── main.jsx               # React DOM root entry
    ├── App.jsx                # Main application component & state
    ├── index.css              # Custom responsive CSS design system
    ├── data/
    │   └── portfolioData.js   # Centralized resume & portfolio content
    └── components/
        ├── Navbar.jsx         # Responsive navigation & theme toggle
        ├── Hero.jsx           # Hero banner with avatar & floating tags
        ├── About.jsx          # Career objective & academic summary
        ├── Skills.jsx         # Categorized skills & proficiency meters
        ├── Projects.jsx       # Academic projects & live BST simulator
        ├── Certifications.jsx # Verified NPTEL & college achievements
        ├── Education.jsx      # Degree & coursework timeline
        ├── Contact.jsx        # Direct phone/email cards & contact form
        ├── Footer.jsx         # Navigation links & back-to-top
        ├── ResumeModal.jsx    # Printable/copyable resume modal
        └── Toast.jsx          # Notification alert banner
```