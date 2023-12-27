```tsx
import React from 'react';
import './EarlyEntrepreneurship.css';

const EarlyEntrepreneurship: React.FC = () => {
  return (
    <section id="early-entrepreneurship">
      <h2>Early Entrepreneurship</h2>
      <div className="entrepreneurship-container">
        <div className="entrepreneurship-item">
          <h3>Drop-shipping Business</h3>
          <p>
            Starting at the age of 12, Michael Gruen demonstrated an early aptitude for business, navigating the complexities of drop-shipping. This model required insight into market demands, supply chain management, and customer service, setting the foundation for his future endeavors.
          </p>
        </div>
        <div className="entrepreneurship-item">
          <h3>Creator Edge Media</h3>
          <p>
            Founding an influencer marketing agency in his early career, Gruen tapped into the burgeoning field of digital marketing. He recognized the potential of influencers in shaping consumer behavior and established a platform that would grow alongside the digital marketing revolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyEntrepreneurship;
```