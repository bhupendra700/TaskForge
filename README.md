# TaskForge

<div align="center">
  <img src="https://res.cloudinary.com/dcvalfoky/image/upload/v1759078304/icon_cd333f.png" alt="TaskForge Logo" width="200">
</div>

---

<div align="center">
  <em>A simple yet powerful task management app built with React, Vite, and Firebase! 🚀</em>
</div>

---

TaskForge is a simple yet powerful task management application built with React and Vite. Users can sign up for free, log in using email/password, Google, or GitHub authentication, and manage their tasks seamlessly. It supports full CRUD (Create, Read, Update, Delete) operations on tasks, allowing users to add tasks (e.g., "Buy Apple", "Buy Banana"), mark them as completed, and track the time when each task was added. Tasks are stored securely in Firebase Firestore, and users can access their data from any device. Additionally, users can manage their profile photo (add, edit, delete) using Firebase Storage, reset forgotten passwords, and delete their accounts safely using Firebase features.

## Features ✨

- **User Authentication** 🔒: Secure login/signup with email/password, Google, and GitHub via Firebase Authentication.
- **Task Management** 📋: 
  - Add new tasks with timestamps ⏰.
  - Edit, delete, or mark tasks as completed ✅.
  - Full CRUD operations.
- **Profile Management** 🖼️: Upload, edit, or delete profile photos using Firebase Storage.
- **Account Security** 🛡️: Forgot password reset and account deletion options.
- **Cross-Device Access** 🌐: Sync tasks across devices using cloud storage.
- **Real-Time Data** ⚡: Powered by Firebase Firestore for instant updates.

## Screenshots 📸

### Login Prompt
<div align="center">
  <img src="https://res.cloudinary.com/dcvalfoky/image/upload/v1759074056/Screenshot_2025-09-28_210003_fcta6h.png" alt="Login Prompt">
</div>

### Logged In Status
<div align="center">
  <img src="https://res.cloudinary.com/dcvalfoky/image/upload/v1759074056/Screenshot_2025-09-28_210733_qpylg1.png" alt="Logged In">
</div>

### Task List
<div align="center">
  <img src="https://res.cloudinary.com/dcvalfoky/image/upload/v1759074056/Screenshot_2025-09-28_210855_p6quji.png" alt="Task List">
</div>

### Profile Menu
<div align="center">
  <img src="https://res.cloudinary.com/dcvalfoky/image/upload/v1759074058/Screenshot_2025-09-28_210926_qbcvgo.png" alt="Profile Menu">
</div>

## Technologies Used 🛠️

- **Frontend**: React.js with Vite for fast development and HMR (Hot Module Replacement).
- **Backend/Storage**: Firebase Firestore for task data and Firebase Storage for profile photos.
- **Authentication**: Firebase Authentication (Email/Password, Google, GitHub).
- **Deployment**: Netlify for hosting.
- **Linting**: ESLint with React plugins.

## Project Structure 📂
```
.
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── (various components for authentication, tasks, profile, etc.)
│   ├── firebase
│   │   └── (configuration files for Firebase)
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── (other source files)
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```
text## Installation and Setup 🛠️

To run the project locally:

1. Clone the repository:
git clone https://github.com/bhupendra700/TaskForge.git
text2. Navigate to the project directory:
cd TaskForge
text3. Install dependencies:
npm install
text4. Set up Firebase:
- Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com).
- Enable Authentication (Email/Password, Google, GitHub).
- Enable Firestore Database.
- Enable Storage.
- Add your Firebase config to a `.env` file (e.g., `VITE_FIREBASE_API_KEY=your_key`).
5. Run the development server:
npm run dev
text6. Open `http://localhost:5173` in your browser.

Note: This template uses Vite's minimal setup. For production, build with `npm run build`.

## Deployment 🌍

The app is deployed on Netlify: [https://taskforgefree.netlify.app](https://taskforgefree.netlify.app)

## GitHub Repository 📂

[https://github.com/bhupendra700/TaskForge](https://github.com/bhupendra700/TaskForge)

## Contributing 🤝

Contributions are welcome! Please fork the repository and submit a pull request.

## License 📄

This project is open-source and available under the MIT License.

---

<div align="center">
<em>Made with ❤️ by Bhupendra</em>
</div>