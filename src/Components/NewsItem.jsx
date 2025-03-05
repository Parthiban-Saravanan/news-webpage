import React from "react";
import image from "../assets/News.png";

const NewsItem = ({ title, description, src, url }) => {
  const validSrc = src || image;

  return (
    <div className="card bg-dark text-light mb-3">
      <img src={validSrc} className="card-img-top" alt="News" style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No Title Available"}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "Stay updated with our daily news feeds, bringing you the latest headlines."}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;