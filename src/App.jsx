import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">📰 Newsify</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>
      </nav>

      <div className="container">
        <h1 className="heading">Top Headlines</h1>
        <div className="news-grid">
          {news.map(article => (
            <div className="card" key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noreferrer">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
