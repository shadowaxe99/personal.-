```typescript
import React, { useState, useEffect } from 'react';
import './Portfolio.css';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    // TODO: Replace with actual API call to fetch portfolio items
    const fetchPortfolioItems = async () => {
      try {
        // Placeholder data - replace with actual data retrieval
        const response = await fetch('/api/portfolio');
        const data = await response.json();
        setPortfolioItems(data);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
      }
    };

    fetchPortfolioItems();
  }, []);

  return (
    <div className="portfolio-container">
      <h1>Michael Gruen's Portfolio</h1>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.imageUrl} alt={item.title} className="portfolio-image" />
            <div className="portfolio-info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span className="portfolio-date">{item.date}</span>
              <span className="portfolio-category">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
```