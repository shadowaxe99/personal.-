```tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SubscriptionContent.css';

interface SubscriptionContentState {
  exclusiveContent: string[];
  isLoading: boolean;
  error: string | null;
}

const SubscriptionContent: React.FC = () => {
  const [state, setState] = useState<SubscriptionContentState>({
    exclusiveContent: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchExclusiveContent = async () => {
      try {
        const response = await axios.get('/api/subscription-content');
        setState({
          exclusiveContent: response.data,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setState({
          exclusiveContent: [],
          isLoading: false,
          error: 'Error fetching exclusive content',
        });
      }
    };

    fetchExclusiveContent();
  }, []);

  const handleSubscription = async () => {
    // This function would handle the subscription logic, possibly involving
    // another API call to process the subscription and payment.
    // For now, it's just a placeholder.
    alert('Thank you for subscribing!');
  };

  if (state.isLoading) {
    return <div>Loading exclusive content...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

  return (
    <div className="subscription-content">
      <h2>Exclusive Content</h2>
      <p>Subscribe to get access to exclusive content curated by Michael Gruen.</p>
      <button onClick={handleSubscription}>Subscribe Now</button>
      <div className="content-list">
        {state.exclusiveContent.map((content, index) => (
          <div key={index} className="content-item">
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionContent;
```