```typescript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MentorshipProgram.css';

interface MentorshipProgramData {
  title: string;
  description: string;
  benefits: string[];
  structure: string;
}

const MentorshipProgram: React.FC = () => {
  const [mentorshipData, setMentorshipData] = useState<MentorshipProgramData | null>(null);

  useEffect(() => {
    const fetchMentorshipData = async () => {
      try {
        const response = await axios.get('/api/mentorship');
        setMentorshipData(response.data);
      } catch (error) {
        console.error('Error fetching mentorship program data:', error);
      }
    };

    fetchMentorshipData();
  }, []);

  return (
    <section id="mentorship-program" className="mentorship-program">
      <div className="container">
        {mentorshipData ? (
          <>
            <h2 className="mentorship-program-title">{mentorshipData.title}</h2>
            <p className="mentorship-program-description">{mentorshipData.description}</p>
            <h3>Benefits</h3>
            <ul className="mentorship-program-benefits">
              {mentorshipData.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <h3>Program Structure</h3>
            <p className="mentorship-program-structure">{mentorshipData.structure}</p>
          </>
        ) : (
          <p>Loading mentorship program details...</p>
        )}
      </div>
    </section>
  );
};

export default MentorshipProgram;
```