import React, { useState, useEffect } from 'react';
import './TimelineBudget.css';

interface TimelineItem {
  title: string;
  description: string;
  date: string;
  budget: number;
}

const initialTimeline: TimelineItem[] = [
  {
    title: 'Project Kickoff',
    description: 'Initial meeting with the development team to discuss project scope and objectives.',
    date: '2023-04-01',
    budget: 5000,
  },
  // Additional timeline items...
];

const TimelineBudget: React.FC = () => {
  const [timeline, setTimeline] = useState<TimelineItem[]>(initialTimeline);
  const [totalBudget, setTotalBudget] = useState<number>(0);

  useEffect(() => {
    const calculateTotalBudget = () => {
      const total = timeline.reduce((acc, item) => acc + item.budget, 0);
      setTotalBudget(total);
    };

    calculateTotalBudget();
  }, [timeline]);

  return (
    <div className="timeline-budget-container">
      <h2>Project Timeline and Budget</h2>
      <div className="timeline">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <time>{item.date}</time>
            <p className="budget">Budget: ${item.budget.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div className="total-budget">
        <h3>Total Budget</h3>
        <p>${totalBudget.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default TimelineBudget;