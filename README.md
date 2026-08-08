# 📰 News Masala

**News Masala** is a React-based news application that provides the latest news from different categories such as **Technology, Business, Sports, Health, Entertainment, and more**.

The application fetches news from a news API and presents it through a clean, responsive, and user-friendly interface.

## 🚀 Features

* 📰 Browse the latest news articles
* 🌍 Get news from different categories

  * Technology
  * Business
  * Sports
  * Health
  * Entertainment
  * General
* 🔄 Infinite Scroll for loading more articles
* ⏳ Loading indicator while fetching news
* 📊 Top Loading Bar for better user experience
* 📱 Responsive design
* 📖 Read More option for complete articles
* 🔗 Open full articles through the original news source
* ⚡ Fast and dynamic React interface

## 🛠️ Technology Stack

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Bootstrap 5**

### Libraries & Tools

* React Hooks
* React Router
* Axios / Fetch API
* React Infinite Scroll Component
* React Top Loading Bar
* PropTypes
* News API
* Git & GitHub

## 📁 Project Structure

```text id="w7x3k2"
News_Masala/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── News.js
│   │   ├── NewsItem.js
│   │   ├── Spinner.js
│   │   └── ...
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── sampleOutput.json
├── component_lifecycle.txt
├── functional_lifecycle.txt
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/aliakbarrRaza123/News_Masala.git
```

Navigate to the project directory:

```bash
cd News_Masala
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the News API

News Masala uses a News API to fetch the latest articles.

Create a `.env` file in the project root:

```env
REACT_APP_API_KEY=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your own valid API key.

> **Note:** The API key is not included in this repository for security reasons. You need to provide your own API key for the application to fetch news successfully.

### 4. Run the Application Locally

Start the development server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

> **Note:** News Masala is currently intended to be run locally because the News API requires a valid API key and may have restrictions related to API ownership and deployment.

---

## 📸 Application Overview

News Masala provides a simple and responsive interface for browsing news from multiple categories.

Users can:

1. Select a news category.
2. Browse the latest available articles.
3. Scroll down to automatically load more news using infinite scrolling.
4. Switch between light and dark modes.
5. Use **Read More** to open the complete article from its original news source.


## 🧠 React Concepts Used

This project was also developed as a practical implementation of React concepts, including:

* Functional Components
* Class-Based Components
* React Hooks
* `useState`
* `useEffect`
* Props
* PropTypes
* Conditional Rendering
* Component Reusability
* React Router
* API Integration
* Loading States
* Infinite Scrolling

The repository also contains lifecycle-related files documenting the transition and concepts explored during development.

---

## 🔄 Development Journey

The project was initially developed using **class-based React components** and was later converted to **functional components using React Hooks**.

The repository includes:

* `component_lifecycle.txt`
* `functional_lifecycle.txt`

These files document the React lifecycle concepts and development process explored while building the application.

---

## 🎯 Project Goals

The main goals of News Masala are to:

* Practice React development
* Understand API integration
* Work with asynchronous data fetching
* Implement reusable components
* Understand React Hooks
* Implement infinite scrolling
* Build a responsive real-world application
* Practice Git and GitHub workflow

---

## 🔮 Future Improvements

Possible improvements for future versions include:

* 🔍 News search functionality
* ⭐ Save/bookmark articles
* 🗞️ Personalized news feed
* 🌐 Multi-language support
* 🔔 News notifications
* 📱 Progressive Web App (PWA)
* ⚡ Improved caching and performance
* 🔐 User accounts and personalized preferences

---

## 👨‍💻 Author

**Ali Akbar Raza**

Software Engineering Student

GitHub: [aliakbarrRaza123](https://github.com/aliakbarrRaza123)

---

⭐ If you find this project useful, consider giving the repository a star!
