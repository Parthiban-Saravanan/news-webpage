import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const newsData = {
  general: [
    {
      title: "Breaking News: AI Revolutionizes Tech Industry",
      description: "AI is changing the way we interact with technology, from chatbots to self-driving cars.",
      urlToImage: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/06/The-impact-of-artificial-intelligence-on-various-industries-1024x598.jpg",
      url: "https://example.com/ai-news",
    },
    {
      title: "Stock Market Hits Record Highs",
      description: "The stock market has reached new heights amid economic recovery.",
      urlToImage: "https://th.bing.com/th/id/OIP.X5g9dkc0UjpDKztZtuDlMgHaEK?w=800&h=450&rs=1&pid=ImgDetMain",
      url: "https://example.com/stock-market",
    },
    {
      "title": "Global Leaders Meet for Climate Summit",
      "description": "World leaders discuss strategies to combat climate change.",
      "urlToImage": "https://www.e3g.org/wp-content/uploads/climate-ambition-summit.png",
      "url": "https://example.com/climate-summit"
    },
    {
      "title": "Breakthrough in AI Technology",
      "description": "A new AI model surpasses human capabilities in key areas.",
      "urlToImage": "https://cubettech.com/_next/image/?url=https:%2F%2Fcubet-website-storage-live.s3-accelerate.amazonaws.com%2FArtificial_Intelligence_Breakthroughs_d2752c85ec.jpg&w=1200&q=75",
      "url": "https://example.com/ai-breakthrough"
    },
    {
      "title": "Scientists Discover New Exoplanet",
      "description": "Astronomers have found an Earth-like exoplanet in a distant galaxy.",
      "urlToImage": "https://th.bing.com/th/id/OIP.xkF7AUHuMH6Vrl19nu6u4gHaEK?w=555&h=312&rs=1&pid=ImgDetMain",
      "url": "https://example.com/exoplanet-discovery"
    },
    {
      "title": "Major Cybersecurity Breach Affects Millions",
      "description": "A recent data breach has put personal information at risk.",
      "urlToImage": "https://mdevelopers.com/storage/0_cybersecurity-8_43db66b7.webp",
      "url": "https://example.com/cybersecurity-breach"
    },
    {
      "title": "New Study Links Diet to Longevity",
      "description": "Research finds that a balanced diet contributes to a longer life.",
      "urlToImage": "https://th.bing.com/th/id/OIP.NFpw2gx2N5YdJQYOnrHW2QHaEK?rs=1&pid=ImgDetMain",
      "url": "https://example.com/diet-longevity"
    },
    {
      "title": "Electric Vehicles Gain Popularity",
      "description": "Sales of electric cars are soaring amid environmental concerns.",
      "urlToImage": "https://th.bing.com/th/id/OIP.PLST2m9o4Md1i5uBVTlXEgHaD4?rs=1&pid=ImgDetMain",
      "url": "https://example.com/electric-vehicles"
    }

  ],
  technology: [
    {
      title: "Quantum Computing Breakthrough Announced",
      description: "Scientists reveal a new milestone in quantum computing capabilities.",
      urlToImage: "https://blog.tipranks.com/wp-content/uploads/2023/05/shutterstock_1277557675-750x406.jpg",
      url: "https://example.com/quantum-news",
    },
    {
      "title": "Apple Unveils Next-Gen iPhone",
      "description": "The latest iPhone model boasts innovative features and faster performance.",
      "urlToImage": "https://www.insidemena.com/wp-content/uploads/2023/09/Apple-unveils-iPhone-15-Watch-Series-9-price-and-Pre-order-in-UAE.jpg",
      "url": "https://example.com/new-iphone"
    },
    {
      "title": "Quantum Computing Breakthrough",
      "description": "Scientists achieve a major milestone in quantum computing research.",
      "urlToImage": "https://blog.tipranks.com/wp-content/uploads/2023/05/shutterstock_1277557675-750x406.jpg",
      "url": "https://example.com/quantum-computing"
    },
    {
      "title": "Tesla Introduces Self-Driving Update",
      "description": "Tesla's newest software update improves autonomous driving capabilities.",
      "urlToImage": "https://i.ytimg.com/vi/bmouTwmXzA8/maxresdefault.jpg",
      "url": "https://example.com/tesla-self-driving"
    },
    {
      "title": "AI Chatbots Transform Customer Service",
      "description": "Companies are adopting AI-driven chatbots to enhance customer support.",
      "urlToImage": "https://th.bing.com/th/id/OIP.8OlSYCnZqO_6Z9dxavBcrwHaD4?rs=1&pid=ImgDetMain",
      "url": "https://example.com/ai-chatbots"
    },
    {
      "title": "Cyberattack Shuts Down Major Website",
      "description": "Hackers take down a leading website in a massive cyberattack.",
      "urlToImage": "https://www.shutterstock.com/image-vector/server-cyber-attack-concept-banner-260nw-1477719500.jpg",
      "url": "https://example.com/cyberattack"
    },
    {
      "title": "Virtual Reality: The Future of Gaming",
      "description": "Experts believe VR will revolutionize the gaming industry.",
      "urlToImage": "https://th.bing.com/th/id/OIP.17QkA6pExVzRO2UJXo5UuAHaDt?rs=1&pid=ImgDetMain",
      "url": "https://example.com/vr-gaming"
    }

  ],
  business: [
    {
      "title": "Tech Startup Raises Millions in Funding",
      "description": "A promising tech startup secures funding from top investors.",
      "urlToImage": "https://th.bing.com/th/id/R.82fec83945a1ce019215ca213562a295?rik=XvX%2bd%2bF6x408Ow&riu=http%3a%2f%2fwjaqfm.com%2fwp-content%2fuploads%2f2019%2f03%2fbusiness-news-2.jpg&ehk=mqGsGuU7AR%2bXCnGDocp8skh6hwCG7%2f39kB%2bQSYSJt1I%3d&risl=&pid=ImgRaw&r=0",
      "url": "https://example.com/startup-funding"
    },
    {
      "title": "Retail Giants Expand Online Presence",
      "description": "Major retailers are shifting their focus to e-commerce.",
      "urlToImage": "https://vakilsearch.com/blog/wp-content/uploads/2022/06/What-is-fictitious-business-name_-.jpg",
      "url": "https://example.com/retail-ecommerce"
    },
    {
      "title": "Oil Prices Surge Amid Supply Concerns",
      "description": "Global oil prices rise due to geopolitical tensions.",
      "urlToImage": "https://th.bing.com/th/id/R.82fec83945a1ce019215ca213562a295?rik=XvX%2bd%2bF6x408Ow&riu=http%3a%2f%2fwjaqfm.com%2fwp-content%2fuploads%2f2019%2f03%2fbusiness-news-2.jpg&ehk=mqGsGuU7AR%2bXCnGDocp8skh6hwCG7%2f39kB%2bQSYSJt1I%3d&risl=&pid=ImgRaw&r=0",
      "url": "https://example.com/oil-prices"
    },
    {
      "title": "Cryptocurrency Market Faces Volatility",
      "description": "Crypto investors experience significant market fluctuations.",
      "urlToImage": "https://vakilsearch.com/blog/wp-content/uploads/2022/06/What-is-fictitious-business-name_-.jpg",
      "url": "https://example.com/crypto-volatility"
    },
    {
      "title": "Small Businesses Struggle Post-Pandemic",
      "description": "Local businesses face challenges in the post-pandemic economy.",
      "urlToImage": "https://th.bing.com/th/id/R.82fec83945a1ce019215ca213562a295?rik=XvX%2bd%2bF6x408Ow&riu=http%3a%2f%2fwjaqfm.com%2fwp-content%2fuploads%2f2019%2f03%2fbusiness-news-2.jpg&ehk=mqGsGuU7AR%2bXCnGDocp8skh6hwCG7%2f39kB%2bQSYSJt1I%3d&risl=&pid=ImgRaw&r=0",
      "url": "https://example.com/small-businesses"
    }

  ],
  health: [
    {
      "title": "Meditation Benefits Mental Health",
      "description": "Studies show meditation can reduce stress and improve well-being.",
      "urlToImage": "https://thumbs.dreamstime.com/b/health-news-word-white-background-health-news-white-204712121.jpg",
      "url": "https://example.com/meditation-benefits"
    },
    {
      "title": "Breakthrough in Cancer Treatment",
      "description": "Scientists develop a new approach to combat cancer cells.",
      "urlToImage": "https://th.bing.com/th/id/OIP.GJ9C13YePsxOUSYi1gqvuQHaEK?w=986&h=554&rs=1&pid=ImgDetMain",
      "url": "https://example.com/cancer-treatment"
    },
    {
      "title": "Fitness Trends in 2025",
      "description": "Experts predict new fitness trends for a healthier lifestyle.",
      "urlToImage": "https://th.bing.com/th/id/OIP.GJ9C13YePsxOUSYi1gqvuQHaEK?w=986&h=554&rs=1&pid=ImgDetMain",
      "url": "https://example.com/fitness-trends"
    },
    {
      "title": "WHO Issues Warning on Air Pollution",
      "description": "Air pollution is becoming a major global health concern.",
      "urlToImage": "https://thumbs.dreamstime.com/b/health-news-word-white-background-health-news-white-204712121.jpg",
      "url": "https://example.com/air-pollution"
    },
    {
      "title": "Sleep Patterns and Heart Health",
      "description": "New research links sleep quality to cardiovascular health.",
      "urlToImage": "https://th.bing.com/th/id/OIP.GJ9C13YePsxOUSYi1gqvuQHaEK?w=986&h=554&rs=1&pid=ImgDetMain",
      "url": "https://example.com/sleep-heart-health"
    }

  ],
  sports: [
    {
      "title": "Tennis Star Sets New Record",
      "description": "A rising star in tennis achieves a new career milestone.",
      "urlToImage": "https://as1.ftcdn.net/v2/jpg/02/45/20/08/1000_F_245200839_jiq0wPAMa0eD3iHEO6SXIVMtKNkoT8p3.jpg",
      "url": "https://example.com/tennis-record"
    },
    {
      "title": "Formula 1 Race Ends in Controversy",
      "description": "A disputed decision changes the outcome of the latest race.",
      "urlToImage": "https://th.bing.com/th/id/OIP.Tujl1Gr8FKs8zTATcUq-fwHaEK?rs=1&pid=ImgDetMain",
      "url": "https://example.com/f1-controversy"
    },
    {
      "title": "Football Club Announces New Coach",
      "description": "A major club appoints a new coach ahead of the season.",
      "urlToImage": "https://th.bing.com/th/id/OIP.Zx-8VldTbAWUcufIA-Ud0QHaEK?rs=1&pid=ImgDetMain",
      "url": "https://example.com/football-coach"
    },
    {
      "title": "NBA Playoffs: Key Matchups to Watch",
      "description": "Experts analyze the most exciting playoff matchups.",
      "urlToImage": "https://as1.ftcdn.net/v2/jpg/02/45/20/08/1000_F_245200839_jiq0wPAMa0eD3iHEO6SXIVMtKNkoT8p3.jpg",
      "url": "https://example.com/nba-playoffs"
    }

  ],
  entertainment: [
    {
      title: "Blockbuster Movie Breaks Box Office Records",
      description: "The latest superhero film is dominating worldwide ticket sales.",
      urlToImage: "https://th.bing.com/th/id/OIP.MoOv6UtTGc1K18DlGAIwDAHaD8?rs=1&pid=ImgDetMain",
      url: "https://example.com/movie-news",
    },
  ],
};

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(newsData[category] || []);
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center mb-4">
        Flash <span className="badge bg-danger">News</span>
      </h2>
      {articles.length === 0 && <p className="text-center">No articles available.</p>}
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4">
            <NewsItem
              title={article.title}
              description={article.description}
              src={article.urlToImage}
              url={article.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
