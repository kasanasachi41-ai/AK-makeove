# The AK Makeover — Luxury Bridal Makeup Studio & Skin Care

Welcome to the complete source code for **The AK Makeover** website. This is a modern, high-performance React application built with TypeScript, Vite, and Tailwind CSS.

---

## 🚀 How to Run in VS Code (Local Setup)

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended). You can verify in your terminal:
```bash
node -v
npm -v
```

---

### Step-by-Step Instructions

1. **Open the project in VS Code**:
   - Extract the downloaded `the-ak-makeover.zip` file.
   - Open Visual Studio Code.
   - Click `File` -> `Open Folder...` (or `Cmd+O` on Mac / `Ctrl+K Ctrl+O` on Windows) and select the extracted folder.

2. **Open the Integrated Terminal in VS Code**:
   - Press `Ctrl + \`` (backtick) or go to `Terminal` -> `New Terminal`.

3. **Install Dependencies**:
   Run:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   Run:
   ```bash
   npm run dev
   ```

5. **Open in Your Browser**:
   Open:
   ```
   http://localhost:3000
   ```
   *(If port 3000 is busy, Vite will tell you the port, e.g. `http://localhost:5173`)*.

---

## 🛠 Available Scripts

- `npm run dev` — Starts the local live-reload development server.
- `npm run build` — Compiles and bundles the application for production into the `dist/` directory.
- `npm run preview` — Locally preview the production build.
- `npm run lint` — Validates TypeScript types and checks for errors.

---

## 📁 Project Structure

```
├── public/                 # Static assets and original photographs
│   ├── assets/             # Studio photographs (bridal, party, hairstyling, dupatta)
│   └── the-ak-makeover-source.zip # Downloadable source archive
├── src/
│   ├── components/         # Modular UI components
│   │   ├── Navbar.tsx      # Header navigation, dark mode toggle, section buttons
│   │   ├── HeroSection.tsx # Hero banner with direct booking & service CTAs
│   │   ├── AboutSection.tsx # Artist profile, background & studio philosophy
│   │   ├── BridalGallerySection.tsx # Bridal lookbook & before/after comparisons
│   │   ├── PartyMakeupSection.tsx  # Party glam & event styling
│   │   ├── FacialSkincareSection.tsx # Clinical facials, cleanup & polishing
│   │   ├── ServicesSection.tsx       # Comprehensive service list with pricing
│   │   ├── ReviewsSection.tsx        # Client testimonials & ratings
│   │   ├── BookingContactSection.tsx # Appointment reservation & WhatsApp direct
│   │   ├── Footer.tsx               # Studio contact information, links & timings
│   │   ├── LuxuryImage.tsx          # High-performance responsive image loader
│   │   └── StudioSettingsModal.tsx  # Quick studio config & price editor
│   ├── data/
│   │   └── makeoverData.ts # Central source for services, pricing, phone & gallery
│   ├── App.tsx             # Root component with dark theme & section routing
│   ├── index.css           # Global Tailwind CSS imports
│   └── main.tsx            # React application entry point
├── index.html              # HTML shell with Google fonts & metadata
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🎨 Customizing Studio Details & Prices

You can update salon details, phone numbers, WhatsApp links, and service prices either directly in the browser UI using the **"⚙️ Studio Settings"** button, or by editing:
`src/data/makeoverData.ts`

- **Phone & WhatsApp**: Update `phone` and `whatsappNumber` in `DEFAULT_STUDIO_CONFIG`.
- **Services & Pricing**: Modify items in `INITIAL_SERVICES`.
- **Gallery**: Add or change photos in `BRIDAL_GALLERY_ITEMS`.
