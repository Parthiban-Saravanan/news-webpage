import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center mb-4">
        Flash <span className="badge bg-danger">News</span>
      </h2>
      {loading && <p className="text-center text-primary">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      {!loading && !error && articles.length === 0 && <p className="text-center">No articles available.</p>}
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4">
            <NewsItem title={article.title} description={article.description} src={article.urlToImage} url={article.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
