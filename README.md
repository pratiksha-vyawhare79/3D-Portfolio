# Pratiksha Vyawhare - 3D Interactive Portfolio

Welcome to the source code for my personal 3D interactive portfolio! This project showcases my skills as a Full Stack Developer, combining a highly interactive React/Three.js frontend with a robust Spring Boot backend.

Live Site: [https://pratiksha-vyawhare79.github.io/3D-Portfolio](https://pratiksha-vyawhare79.github.io/3D-Portfolio) *(Note: Update this link once fully deployed)*

---

## 🌟 Key Features

- **Interactive 3D Experience**: A fully responsive 3D character scene built with React Three Fiber, bound to user scroll (GSAP) for an immersive storytelling experience.
- **Full Stack Integration**: A live "Contact Me" form that sends messages directly to a custom Java Spring Boot backend.
- **Responsive & Dynamic Design**: Tailored for all screen sizes (Mobile, Tablet, Desktop) using custom CSS modules and Tailwind CSS.
- **Live Project Showcase**: A dynamic carousel featuring my latest work, complete with real-time screenshots and live deployment links (e.g., Vispera Studios, NGO Platform, Avani News).

---

## 💻 Technology Stack

### Frontend (User Interface & 3D)
- **Framework**: React.js 18 (Vite)
- **Styling**: Tailwind CSS + Custom Vanilla CSS modules (`.css`)
- **3D Rendering**: `three.js`, `@react-three/fiber`, `@react-three/drei`
- **Animations**: `gsap` (GreenSock Animation Platform) and ScrollTrigger
- **Icons**: `react-icons`

### Backend (API & Server)
- **Framework**: Java Spring Boot
- **Database**: Configured for SQL (MySQL/PostgreSQL) via Spring Data JPA / Hibernate
- **Architecture**: RESTful APIs (`/api/contact`) with full CORS configuration to allow cross-origin requests from the React frontend.

---

## 📁 Project Architecture

```text
.
├── backend/                   # Spring Boot Java Application (Contact API)
│   ├── src/main/java/...      # Controllers, Services, Entities
│   └── application.properties # Database and Server Configuration
├── public/                    # Static Assets (Images, 3D Models, HDRIs)
├── src/
│   ├── components/            # React Components
│   │   ├── Character/         # 3D Scene Logic
│   │   ├── styles/            # Scoped CSS files
│   │   ├── About.tsx          # About Me section
│   │   ├── Contact.tsx        # Contact Form (Connects to Spring Boot)
│   │   ├── Landing.tsx        # Hero Section
│   │   ├── Navbar.tsx         # Navigation & Social Links
│   │   ├── Work.tsx           # Project Showcase Carousel
│   │   └── ...
│   ├── App.tsx                # Main Application Entry
│   └── main.tsx               # React DOM Rendering
├── package.json               # Node.js Dependencies
└── vite.config.ts             # Vite Configuration
```

---

## 🚀 Getting Started Locally

### 1. Running the Frontend (React)

1. Ensure you have Node.js installed.
2. Navigate to the root directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. Open your browser to `http://localhost:5173`.

### 2. Running the Backend (Spring Boot)

1. Ensure you have Java 17+ and Maven installed.
2. Navigate to the `backend/` directory (or open it in your Java IDE like Eclipse/IntelliJ).
3. Update `application.properties` with your local database credentials if you wish to save messages to a local database.
4. Run the Spring Boot application. It will start on `http://localhost:8080`.
5. The frontend is already configured to send `POST` requests to `http://localhost:8080/api/contact`.

---

## 🌐 Deployment Instructions

### Frontend (Netlify / Vercel / GitHub Pages)
1. Run `npm run build` to generate the highly optimized production files in the `dist/` folder.
2. Deploy the `dist/` folder to your preferred Jamstack host.

### Backend (Render / Railway / AWS)
1. Package the Spring Boot application into a `.jar` file using Maven (`mvn clean package`).
2. Deploy the `.jar` to a Java-compatible cloud hosting provider.
3. **Important**: Once the backend is deployed, update the `fetch()` URL inside `src/components/Contact.tsx` to point to your new live backend URL (e.g., `https://my-backend.onrender.com/api/contact`).

---

## 📄 License
This project is open-source and available under the MIT License.
