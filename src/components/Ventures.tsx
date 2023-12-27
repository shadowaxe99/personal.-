```tsx
import React from 'react';
import './Ventures.css';

interface VentureProps {
  title: string;
  description: string;
  imageUrl: string;
}

const venturesData: VentureProps[] = [
  {
    title: 'Sports Management',
    description: 'Collaborating with NBPA and FIBA agents, Michael expanded his professional spectrum into sports management, showcasing his ability to diversify and adapt to different industries.',
    imageUrl: '/images/sports-management.jpg',
  },
  {
    title: 'Cryptocurrency and FRAX',
    description: 'An early investor in Bitcoin and co-founder of FRAX, Michael has demonstrated foresight in financial technology and digital assets, highlighting his understanding of innovative financial solutions.',
    imageUrl: '/images/cryptocurrency.jpg',
  },
  {
    title: 'Talent X Entertainment',
    description: 'As a co-founder of Talent X Entertainment, Michael plays a pivotal role in the digital creator economy, focusing on developing talent and representing top digital creators globally.',
    imageUrl: '/images/talent-x.jpg',
  },
];

const Venture: React.FC<VentureProps> = ({ title, description, imageUrl }) => (
  <div className="venture">
    <img src={imageUrl} alt={title} className="venture-image" />
    <div className="venture-content">
      <h3 className="venture-title">{title}</h3>
      <p className="venture-description">{description}</p>
    </div>
  </div>
);

const Ventures: React.FC = () => {
  return (
    <section id="ventures" className="ventures-section">
      <h2 className="ventures-heading">Ventures in Diverse Fields</h2>
      <div className="ventures-container">
        {venturesData.map((venture, index) => (
          <Venture key={index} {...venture} />
        ))}
      </div>
    </section>
  );
};

export default Ventures;
```