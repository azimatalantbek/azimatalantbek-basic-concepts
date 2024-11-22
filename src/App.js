import React, { useState } from "react";
import "./App.css";

function App() {
  const todoItems = [
    { id: 1, task: "Learn React basics" },
    { id: 2, task: "Build a to-do list" },
    { id: 3, task: "Practice React with projects" },
    { id: 4, task: "Read React documentation" },
  ];

  const [count, setCount] = useState(0);

  const [inputText, setInputText] = useState("");
  const [displayedText, setDisplayedText] = useState("");


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1>My Simple Homepage</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Us Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          We are a team dedicated to providing the best services to our clients.
          Our goal is to deliver high-quality solutions.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <h2>Our Services</h2>
        <ul>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>SEO Optimization</li>
        </ul>
      </section>

      {/* To-Do List */}
      <section className="section">
        <h2>To-Do List</h2>
        <ul>
          {todoItems.map((item) => (
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </section>

      {/* Counter App */}
      <section className="section">
        <h2>Counter App</h2>
        <p>Count: {count}</p>
        <div>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>

      {/* Event Handling */}
      <section className="section">
        <h2>Input Form</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDisplayedText(inputText);
          }}
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter some text"
          />
          <button type="submit">Display Text</button>
        </form>
        {displayedText && <p>You entered: {displayedText}</p>}
      </section>

      {/* Login/Logout*/}
      <section className="section">
        <h2>Login/Logout</h2>
        <p>{isLoggedIn ? "You are logged in!" : "You are logged out!"}</p>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>
          Email:{" "}
          <a href="mailto:azima.tostonova_2027@ucentralasia.org">
            azima.tostonova_2027@ucentralasia.org
          </a>
        </p>
        <p>Phone: +996 700 108 449</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My Simple Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
